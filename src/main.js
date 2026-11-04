import '@fontsource/bebas-neue/400.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'
import '@fontsource/syne/800.css'
import './style.css'

import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

import { Character, LOOKS } from './character.js'
import { RunwayWorld, createCrate, createHurdle, createCollectible, ZONES } from './world.js'
import { AudioEngine } from './audio.js'

// ------------------------------------------------------------
// DOM
// ------------------------------------------------------------

const $ = (selector) => document.querySelector(selector)
const dom = {
  menu: $('#menu'),
  hud: $('#hud'),
  score: $('#score'),
  distance: $('#distance'),
  multiplier: $('#multiplier'),
  zoneName: $('#zone-name'),
  lives: $('#lives'),
  styleFill: $('#style-fill'),
  styleValue: $('#style-value'),
  comboBadge: $('#combo-badge'),
  combo: $('#combo'),
  superBadge: $('#super-badge'),
  superTime: $('#super-time'),
  judgement: $('#judgement'),
  zoneBanner: $('#zone-banner'),
  zoneBannerTitle: $('#zone-banner-title'),
  tutorialTip: $('#tutorial-tip'),
  poseBtn: $('.pose-btn'),
  poseSub: $('.pose-sub'),
  countdown: $('#countdown'),
  countdownValue: $('#countdown-value'),
  pauseScreen: $('#pause-screen'),
  howScreen: $('#how-screen'),
  gameoverScreen: $('#gameover-screen'),
  flash: $('#flash'),
  toast: $('#toast'),
  menuBest: $('#menu-best'),
  castIndex: $('#cast-index'),
  lookName: $('#menu-look-name'),
  resultRank: $('#result-rank'),
  resultTitle: $('#result-title'),
  resultCopy: $('#result-copy'),
  finalScore: $('#final-score'),
  finalDistance: $('#final-distance'),
  finalCombo: $('#final-combo'),
  bestCallout: $('#best-callout'),
  soundBtn: $('#btn-menu-sound'),
  pauseBtn: $('#btn-pause'),
  rotateHint: $('#rotate-hint'),
}

// ------------------------------------------------------------
// Config / state
// ------------------------------------------------------------

const LANES = [-1.55, 0, 1.55]
const BPM = 128
const BEAT = 60 / BPM
const IS_TOUCH = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0
const IS_MOBILE = IS_TOUCH || innerWidth < 860
const HAS_VIBRATION = typeof navigator.vibrate === 'function'

const save = {
  get(key, fallback) {
    try {
      return localStorage.getItem(key) ?? fallback
    } catch {
      return fallback
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value)
    } catch {
      // private mode / storage blocked
    }
  },
}

const app = {
  state: 'menu',
  selected: 'mika',
  best: Number(save.get('femboys.best', '0')) || 0,
  time: 0,
  menuSpin: 0,
  menuCharX: 0,
  shake: 0,
  flashPulse: 0,
  lastHud: {},
  countdownTimers: [],
  tutorialTimer: null,
  bannerTimer: null,
  toastTimer: null,
  gameoverTimer: null,
  startedAt: 0,
  currentZone: 0,
  gameoverTurn: 0,
}

const G = {
  lane: 1,
  targetLane: 1,
  playerX: 0,
  y: 0,
  vy: 0,
  onGround: true,
  speed: 11.5,
  distance: 0,
  score: 0,
  combo: 0,
  bestCombo: 0,
  multiplier: 1,
  lives: 3,
  style: 0,
  superTime: 0,
  invuln: 0,
  runTime: 0,
  spawnTimer: 2,
  pose: {
    active: false,
    start: 0,
    target: 0,
    next: 7.5,
    result: '',
  },
  obstacles: [],
  tokens: [],
  zone: 0,
  jumpFlash: 0,
  gameover: false,
}

// ------------------------------------------------------------
// Three.js — stage
// ------------------------------------------------------------

let renderer
let composer
let scene
let camera
let world
let menuChar
let gameChar
let superAura
let superRing
let bloomPass
let environment
const clock = new THREE.Clock()
const cameraPos = new THREE.Vector3(-0.4, 2.8, 8.5)
const cameraLook = new THREE.Vector3(0, 1.55, 0)
const desiredPos = new THREE.Vector3()
const desiredLook = new THREE.Vector3()
const tmpVec = new THREE.Vector3()
const audio = new AudioEngine()

function initThree() {
  const stage = $('#stage')
  renderer = new THREE.WebGLRenderer({
    antialias: !IS_MOBILE,
    powerPreference: 'high-performance',
    alpha: false,
    stencil: false,
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, IS_MOBILE ? 1.65 : 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.98
  renderer.domElement.setAttribute('aria-label', 'FEMBOYS 3D runway')
  renderer.domElement.setAttribute('role', 'img')
  stage.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  scene.background = new THREE.Color('#100313')
  scene.fog = new THREE.FogExp2('#230a2b', 0.0068)

  camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 300)
  camera.position.copy(cameraPos)
  camera.lookAt(cameraLook)

  const pmrem = new THREE.PMREMGenerator(renderer)
  environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  scene.environment = environment
  pmrem.dispose()

  world = new RunwayWorld(scene, { isMobile: IS_MOBILE })
  world.setPalette(0, true)
  world.setMode('menu')

  gameChar = makeCharacter(app.selected, { scale: 1 })
  gameChar.root.visible = false
  scene.add(gameChar.root)

  buildMenuCharacter(app.selected, false)

  // A golden aura for superstar mode.
  const auraCanvas = document.createElement('canvas')
  auraCanvas.width = auraCanvas.height = 128
  const ac = auraCanvas.getContext('2d')
  const grad = ac.createRadialGradient(64, 64, 0, 64, 64, 64)
  grad.addColorStop(0, 'rgba(255,245,190,0.9)')
  grad.addColorStop(0.3, 'rgba(255,227,110,0.35)')
  grad.addColorStop(1, 'rgba(255,227,110,0)')
  ac.fillStyle = grad
  ac.fillRect(0, 0, 128, 128)
  const auraTex = new THREE.CanvasTexture(auraCanvas)
  superAura = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: auraTex,
      color: '#ffe36e',
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  )
  superAura.scale.set(4.5, 4.5, 1)
  superAura.visible = false
  scene.add(superAura)

  superRing = new THREE.Mesh(
    new THREE.RingGeometry(1.0, 1.08, 48),
    new THREE.MeshBasicMaterial({
      color: '#ffe36e',
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  )
  superRing.rotation.x = -Math.PI / 2
  superRing.visible = false
  scene.add(superRing)

  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    IS_MOBILE ? 0.34 : 0.45,
    IS_MOBILE ? 0.35 : 0.48,
    0.78,
  )
  composer.addPass(bloomPass)
  composer.addPass(new OutputPass())

  setRenderSize()
  updateMenuCamera(0, true)
}

function makeCharacter(look, opts = {}) {
  const character = new Character(look, opts)
  character.root.rotation.y = Math.PI
  character.root.position.set(0, 0.06, 0)
  return character
}

function buildMenuCharacter(look, reveal = true) {
  if (menuChar) {
    menuChar.dispose()
    menuChar = null
  }
  menuChar = new Character(look, { scale: 1 })
  menuChar.root.position.set(app.menuCharX, 0.035, 0)
  menuChar.root.rotation.y = reveal ? -Math.PI * 2 : 0
  menuChar.setMenu(true)
  scene.add(menuChar.root)
  if (reveal) app.menuSpin = 0.8
}

function rebuildGameCharacter(look) {
  if (gameChar) {
    gameChar.root.visible = false
    gameChar.dispose()
  }
  gameChar = makeCharacter(look)
  gameChar.root.visible = false
  scene.add(gameChar.root)
}

// ------------------------------------------------------------
// Responsive camera / menu composition
// ------------------------------------------------------------

function isPortrait() {
  return innerHeight > innerWidth * 1.06
}

function updateMenuCamera(dt = 0, instant = false) {
  const portrait = isPortrait()
  const menuZ = portrait ? 9.0 : window.innerHeight < 700 ? 7.5 : 8.2
  const menuLookY = portrait ? 1.86 : window.innerHeight < 700 ? 1.62 : 1.52
  const menuCamY = portrait ? 2.55 : 2.7
  const x = app.menuCharX

  const shift = portrait ? 0 : -1.05
  desiredPos.set(x + shift + Math.sin(app.time * 0.22) * 0.05, menuCamY + Math.sin(app.time * 0.5) * 0.015, menuZ)
  desiredLook.set(x + shift, menuLookY, 0)
  const targetFov = portrait ? 44 : 43
  if (instant) {
    cameraPos.copy(desiredPos)
    cameraLook.copy(desiredLook)
    camera.fov = targetFov
    camera.updateProjectionMatrix()
  } else {
    const ease = 1 - Math.exp(-dt * 2.4)
    cameraPos.lerp(desiredPos, ease)
    cameraLook.lerp(desiredLook, ease)
    camera.fov += (targetFov - camera.fov) * (1 - Math.exp(-dt * 2.2))
    camera.updateProjectionMatrix()
  }
}

function setRenderSize() {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, IS_MOBILE ? 1.65 : 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)
  bloomPass?.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  if (camera.aspect < 0.7) {
    camera.fov = 50
  } else if (camera.aspect < 1.1) {
    camera.fov = 47
  } else {
    camera.fov = 46
  }
  camera.updateProjectionMatrix()
  if (app.state === 'menu') updateMenuCamera(0, true)
  dom.rotateHint.classList.toggle('is-hidden', !(IS_TOUCH && innerWidth > innerHeight && innerHeight < 480))
}

window.addEventListener('resize', () => {
  if (!renderer) return
  setRenderSize()
})

// ------------------------------------------------------------
// Menu
// ------------------------------------------------------------

const LOOK_ORDER = ['mika', 'jules', 'ren']

function updateMenuMeta() {
  const idx = LOOK_ORDER.indexOf(app.selected) + 1
  dom.castIndex.textContent = String(idx).padStart(2, '0') + ' / 03'
  dom.lookName.textContent = `LOOK 0${idx} — ${LOOKS[app.selected].look}`
  dom.menuBest.textContent = formatScore(app.best)
  document.querySelectorAll('.cast-card').forEach((card) => {
    const selected = card.dataset.cast === app.selected
    card.classList.toggle('is-selected', selected)
    card.setAttribute('aria-checked', String(selected))
  })
}

function selectLook(id) {
  if (!LOOKS[id] || app.state === 'playing' || app.state === 'countdown') return
  app.selected = id
  save.set('femboys.look', id)
  audio.ensure()
  audio.click()
  buildMenuCharacter(id, true)
  rebuildGameCharacter(id)
  updateMenuMeta()
  // Let the portal flash in the new cast member's colour.
  app.flashPulse = 0.4
}

function setMuted(muted) {
  audio.setMuted(muted)
  document.body.classList.toggle('is-muted', muted)
  dom.soundBtn.setAttribute('aria-pressed', String(muted))
  dom.soundBtn.setAttribute('aria-label', muted ? 'Unmute sound' : 'Mute sound')
  save.set('femboys.muted', muted ? '1' : '0')
}

// ------------------------------------------------------------
// Countdown / start
// ------------------------------------------------------------

function clearCountdownTimers() {
  for (const timer of app.countdownTimers) clearTimeout(timer)
  app.countdownTimers = []
}

function startShow() {
  if (app.state === 'countdown' || app.state === 'playing' || app.state === 'paused') return
  audio.ensure()
  audio.swoosh()
  clearCountdownTimers()
  resetRound()

  app.state = 'countdown'
  dom.menu.classList.add('is-hidden')
  dom.hud.classList.remove('is-hidden')
  dom.howScreen.classList.add('is-hidden')
  dom.gameoverScreen.classList.add('is-hidden')
  dom.pauseScreen.classList.add('is-hidden')
  dom.countdown.classList.remove('is-hidden')
  dom.tutorialTip.classList.remove('is-on')

  if (menuChar) menuChar.root.visible = false
  gameChar.root.visible = true
  gameChar.root.rotation.y = Math.PI
  gameChar.root.position.set(0, 0.06, 0)
  gameChar.visible = true
  world.setMode('play')
  world.setPalette(0, true)
  world.heroSet.visible = false
  world.playerSpot.position.x = 0
  world.playerSpot.target.position.x = 0

  let step = 0
  const sequence = ['3', '2', '1', 'SHOW!']
  const showStep = () => {
    const value = sequence[step]
    dom.countdownValue.textContent = value
    dom.countdownValue.classList.remove('pop')
    void dom.countdownValue.offsetWidth
    dom.countdownValue.classList.add('pop')
    if (value !== 'SHOW!') {
      audio.blip(440 + step * 110, 0.12, 'triangle', 0.05)
      dom.countdown.style.setProperty('--grow', '0')
    } else {
      audio.poseResult('great')
    }
    step++
    if (step < sequence.length) {
      app.countdownTimers.push(setTimeout(showStep, 760))
    }
  }
  showStep()
  app.countdownTimers.push(setTimeout(beginRun, 2860))
}

function beginRun() {
  clearCountdownTimers()
  app.state = 'playing'
  G.runTime = 0
  G.startedAt = performance.now()
  dom.countdown.classList.add('is-hidden')
  audio.startMusic()
  dom.tutorialTip.classList.add('is-on')
  clearTimeout(app.tutorialTimer)
  app.tutorialTimer = setTimeout(() => dom.tutorialTip.classList.remove('is-on'), 5200)
}

function resetRound() {
  clearObjects()
  G.lane = 1
  G.targetLane = 1
  G.playerX = 0
  G.y = 0
  G.vy = 0
  G.onGround = true
  G.speed = 11.5
  G.distance = 0
  G.score = 0
  G.combo = 0
  G.bestCombo = 0
  G.multiplier = 1
  G.lives = 3
  G.style = 0
  G.superTime = 0
  G.invuln = 0
  G.runTime = 0
  G.spawnTimer = 2.1
  G.pose.active = false
  G.pose.next = 7.5
  G.pose.result = ''
  G.zone = 0
  G.gameover = false
  G.jumpFlash = 0
  app.shake = 0
  app.currentZone = 0
  app.lastHud = {}
  gameChar?.resetRun()
  gameChar.root.rotation.y = Math.PI
  gameChar.root.rotation.z = 0
  if (superAura) superAura.visible = false
  if (superRing) superRing.visible = false
  if (world) {
    world.setPalette(0, true)
    world.setMode('play')
    world.heroSet.visible = false
    world.playerSpot.position.x = 0
    world.playerSpot.target.position.x = 0
  }
  dom.score.textContent = '000 000'
  dom.distance.textContent = '000 M'
  dom.zoneName.textContent = 'AFTERGLOW'
  dom.styleFill.style.width = '0%'
  dom.styleValue.textContent = '0%'
  dom.multiplier.textContent = '×1'
  dom.comboBadge.classList.remove('is-on')
  dom.superBadge.classList.remove('is-on')
  dom.poseBtn.classList.remove('is-ready', 'is-hit')
  dom.poseBtn.style.setProperty('--p', '0')
  dom.poseSub.textContent = 'ON BEAT'
  dom.judgement.classList.remove('show', 'is-miss')
  renderLives()
  updateHUD(true)
}

// ------------------------------------------------------------
// Input
// ------------------------------------------------------------

function moveLane(dir) {
  if (app.state !== 'playing') return
  const next = Math.max(0, Math.min(2, G.targetLane + dir))
  if (next !== G.targetLane) {
    G.targetLane = next
    audio.blip(320 + dir * 60, 0.035, 'sine', 0.02)
  }
}

function jump() {
  if (app.state !== 'playing') return
  if (!G.onGround) return
  G.onGround = false
  G.vy = 7.0
  G.jumpFlash = 0.25
  gameChar.triggerPose()
  audio.blip(555, 0.08, 'triangle', 0.028)
  if (HAS_VIBRATION) navigator.vibrate(8)
}

function pressPose() {
  if (app.state !== 'playing') return
  if (!G.pose.active) {
    gameChar.triggerPose()
    addStyle(1.2)
    audio.blip(820, 0.06, 'sine', 0.025)
    return
  }

  const delta = G.pose.target - G.runTime
  if (delta > 0.6) {
    gameChar.triggerPose()
    showToast('WAIT FOR THE BEAT')
    audio.blip(360, 0.05, 'sine', 0.025)
    return
  }

  const abs = Math.abs(delta)
  let kind = 'good'
  let base = 180
  if (abs <= 0.13) {
    kind = 'perfect'
    base = 720
  } else if (abs <= 0.29) {
    kind = 'great'
    base = 410
  }

  G.pose.active = false
  G.pose.result = kind
  dom.poseBtn.classList.remove('is-ready')
  dom.poseBtn.classList.add('is-hit')
  setTimeout(() => dom.poseBtn.classList.remove('is-hit'), 380)

  if (kind === 'perfect') {
    G.combo += 3
    addStyle(16)
    triggerFlash(true)
    world.burstConfetti(110, LOOKS[app.selected].accent)
    showJudgement('PERFECT', false)
    audio.poseResult('perfect')
    if (HAS_VIBRATION) navigator.vibrate([10, 25, 18])
  } else if (kind === 'great') {
    G.combo += 2
    addStyle(10)
    showJudgement('GREAT', false)
    audio.poseResult('great')
  } else {
    G.combo += 1
    addStyle(5)
    showJudgement('GOOD', false)
    audio.poseResult('good')
  }

  G.bestCombo = Math.max(G.bestCombo, G.combo)
  G.score += base * G.multiplier * (G.superTime > 0 ? 2 : 1)
  gameChar.triggerPose()
  if (G.combo >= 8) world.burstConfetti(22)
  scheduleNextPose()
  updateHUD()
}

function scheduleNextPose() {
  G.pose.next = G.runTime + 7.5 + Math.random() * 0.35
  G.pose.active = false
}

function startPosePrompt() {
  G.pose.active = true
  G.pose.start = G.runTime
  G.pose.target = G.pose.next
  G.pose.result = ''
  dom.poseBtn.classList.add('is-ready')
  dom.poseSub.textContent = 'GET READY'
  audio.blip(1046, 0.06, 'triangle', 0.025)
}

function missPose() {
  if (!G.pose.active) return
  G.pose.active = false
  G.pose.result = 'miss'
  dom.poseBtn.classList.remove('is-ready')
  dom.poseBtn.style.setProperty('--p', '0')
  dom.poseSub.textContent = 'ON BEAT'
  showJudgement('MISSED THE BEAT', true)
  G.combo = 0
  addStyle(-8)
  audio.blip(220, 0.14, 'sawtooth', 0.03)
  scheduleNextPose()
  updateHUD()
}

// ------------------------------------------------------------
// Gameplay
// ------------------------------------------------------------

function updateGameplay(dt) {
  G.runTime += dt
  const progress = Math.min(1, G.distance / 900)
  const superBoost = G.superTime > 0 ? 1.8 : 0
  const targetSpeed = 11.3 + progress * 8.8 + superBoost
  G.speed += (targetSpeed - G.speed) * Math.min(1, dt * 1.4)
  G.distance += G.speed * dt
  G.score += G.speed * dt * 4.1 * (G.superTime > 0 ? 2 : 1)
  G.invuln = Math.max(0, G.invuln - dt)
  G.jumpFlash = Math.max(0, G.jumpFlash - dt)

  // lane drift
  const targetX = LANES[G.targetLane]
  G.playerX += (targetX - G.playerX) * Math.min(1, dt * 13)
  if (Math.abs(targetX - G.playerX) < 0.004) G.playerX = targetX

  // jump physics
  if (G.y > 0 || G.vy > 0) {
    G.vy -= 20.5 * dt
    G.y += G.vy * dt
    if (G.y <= 0) {
      G.y = 0
      G.vy = 0
      G.onGround = true
    }
  }

  // place runner
  const lateralTilt = (G.playerX - targetX) * 0.12
  gameChar.root.position.set(G.playerX, 0.06 + G.y, 0)
  gameChar.root.rotation.z += (lateralTilt - gameChar.root.rotation.z) * Math.min(1, dt * 9)

  // spawn and move the world
  G.spawnTimer -= dt
  if (G.spawnTimer <= 0) {
    spawnPattern()
    const baseGap = Math.max(1.55, 2.75 - progress * 0.95)
    G.spawnTimer = baseGap + Math.random() * 0.55
  }
  updateObstacles(dt)
  updateTokens(dt)
  updatePose(dt)
  updateSuper(dt)
  updateZone()

  if (G.distance > 2800 && G.superTime <= 0) {
    // nothing to do but keep the odometer rolling
  }

  // Keep the moving spotlight on our icon.
  world.playerSpot.position.x += (G.playerX * 0.8 - world.playerSpot.position.x) * Math.min(1, dt * 4)
  world.playerSpot.target.position.x += (G.playerX * 0.55 - world.playerSpot.target.position.x) * Math.min(1, dt * 4)

  updateHUD()
}

function updatePose(dt) {
  if (!G.pose.active && G.runTime >= G.pose.next - 1.35) startPosePrompt()

  if (G.pose.active) {
    const delta = G.pose.target - G.runTime
    if (delta < -0.34) {
      missPose()
      return
    }
    const p = Math.max(0, Math.min(1, 1 - delta / 1.35))
    dom.poseBtn.style.setProperty('--p', p.toFixed(3))
    if (delta <= 0.58 && dom.poseSub.textContent !== 'TAP NOW') {
      dom.poseSub.textContent = 'TAP NOW'
    }
  }
}

function updateSuper(dt) {
  if (G.superTime <= 0) {
    if (superAura.visible && G.style <= 0.2) {
      superAura.visible = false
      superRing.visible = false
    }
    return
  }
  G.superTime = Math.max(0, G.superTime - dt)
  G.style = (G.superTime / 8) * 100
  superAura.visible = true
  superRing.visible = true
  superAura.position.set(G.playerX, 1.25 + G.y, 0.45)
  superRing.position.set(G.playerX, 0.09 + G.y, 0)
  const pulse = 1 + Math.sin(app.time * 8) * 0.08
  superAura.scale.set(4.7 * pulse, 5.2 * pulse, 1)
  superAura.material.opacity = 0.65 + Math.sin(app.time * 10) * 0.15
  superRing.scale.setScalar(1 + Math.sin(app.time * 7) * 0.12)
  if (G.superTime <= 0) {
    G.style = 0
    superAura.visible = false
    superRing.visible = false
    dom.superBadge.classList.remove('is-on')
    showToast('THE LIGHTS FADE — KEEP SHINING')
  }
}

function activateSuper() {
  if (G.superTime > 0) return
  G.superTime = 8
  G.style = 100
  dom.superBadge.classList.add('is-on')
  dom.superBadge.querySelector('#super-time').textContent = '8.0'
  triggerFlash(true)
  world.burstConfetti(180, '#ffe36e')
  showJudgement('SUPERSTAR', false)
  showToast('SUPERSTAR MODE — EVERYTHING GLOWS')
  audio.powerUp()
  if (HAS_VIBRATION) navigator.vibrate([15, 30, 25, 20, 30])
}

function addStyle(amount) {
  if (G.superTime > 0 && amount > 0) return
  G.style = Math.max(0, Math.min(100, G.style + amount))
  if (G.style >= 100) activateSuper()
}

function updateZone() {
  let changed = false
  while (G.zone < ZONES.length - 1 && G.distance >= ZONES[G.zone + 1].at) {
    G.zone++
    changed = true
  }
  if (!changed) return
  const zone = ZONES[G.zone]
  app.currentZone = G.zone
  world.setPalette(zone.index)
  dom.zoneName.textContent = zone.name
  dom.zoneBannerTitle.textContent = zone.name
  dom.zoneBanner.classList.add('is-on')
  clearTimeout(app.bannerTimer)
  app.bannerTimer = setTimeout(() => dom.zoneBanner.classList.remove('is-on'), 2400)
  audio.powerUp()
  showToast(`${zone.name} — NEW RUNWAY, SAME ICON`)
  triggerFlash(false, true)
}

// ------------------------------------------------------------
// Obstacles & collectibles
// ------------------------------------------------------------

function clearObjects() {
  for (const item of G.obstacles) if (item.mesh) scene.remove(item.mesh)
  for (const item of G.tokens) if (item.mesh) scene.remove(item.mesh)
  G.obstacles.length = 0
  G.tokens.length = 0
}

function spawnCrate(lane, z) {
  const mesh = createCrate()
  mesh.position.set(LANES[lane], 0.02, z)
  scene.add(mesh)
  G.obstacles.push({
    type: 'crate',
    lane,
    x: LANES[lane],
    z,
    mesh,
    checked: false,
  })
}

function spawnHurdle(z) {
  const mesh = createHurdle()
  mesh.position.set(0, 0.02, z)
  scene.add(mesh)
  G.obstacles.push({ type: 'hurdle', lane: 1, x: 0, z, mesh, checked: false })
}

function spawnToken(lane, z, big = false) {
  const mesh = createCollectible(big)
  mesh.position.set(LANES[lane], big ? 1.25 : 1.08, z)
  scene.add(mesh)
  G.tokens.push({ lane, x: LANES[lane], z, mesh, big, collected: false })
}

function spawnCoinLine(lane, z, count = 5, gap = 2.2) {
  for (let i = 0; i < count; i++) spawnToken(lane, z - i * gap, i === 2 && Math.random() > 0.82)
}

function spawnPattern() {
  const difficulty = Math.min(1, G.distance / 800)
  const r = Math.random()

  // Opening stretch: a friendly breadcrumb trail.
  if (G.distance < 45) {
    spawnCoinLine(1, -58, 5, 2.3)
    return
  }

  if (r < 0.22) {
    // full-width hurdle — jump it
    spawnHurdle(-58)
    if (Math.random() > 0.35) spawnCoinLine(1, -44, 3, 2.1)
    return
  }

  if (r < 0.46) {
    // two lanes blocked, one sparkling safe lane
    const safe = Math.floor(Math.random() * 3)
    for (let lane = 0; lane < 3; lane++) {
      if (lane !== safe) spawnCrate(lane, -60 - Math.random() * 2)
    }
    spawnCoinLine(safe, -56, 5, 2.25)
    return
  }

  if (r < 0.66) {
    // single crate with a tempting alternate line
    const blocked = Math.floor(Math.random() * 3)
    spawnCrate(blocked, -58)
    let other = (blocked + 1 + Math.floor(Math.random() * 2)) % 3
    spawnCoinLine(other, -64, 4, 2.3)
    return
  }

  if (r < 0.82) {
    // slalom of stars
    const order = Math.random() > 0.5 ? [0, 1, 2, 1, 0] : [2, 1, 0, 1, 2]
    order.forEach((lane, i) => spawnToken(lane, -62 - i * 3.1, i === 2 && difficulty > 0.45))
    return
  }

  if (difficulty > 0.25 && r < 0.92) {
    // two staggered crates
    const first = Math.floor(Math.random() * 3)
    const second = (first + 1 + Math.floor(Math.random() * 2)) % 3
    spawnCrate(first, -62)
    spawnCrate(second, -45)
    const safe = [0, 1, 2].find((l) => l !== first && l !== second)
    if (safe !== undefined) spawnCoinLine(safe, -54, 3, 2.1)
    return
  }

  // occasional jackpot star
  spawnCoinLine(Math.floor(Math.random() * 3), -58, 4, 2.4)
  if (Math.random() > 0.72) spawnToken(1, -41, true)
}

function updateObstacles(dt) {
  for (let i = G.obstacles.length - 1; i >= 0; i--) {
    const item = G.obstacles[i]
    item.z += G.speed * dt
    item.mesh.position.z = item.z

    if (item.type === 'crate') {
      item.mesh.children.forEach((child) => {
        if (child.userData.marker) {
          child.rotation.y += dt * 3
          child.position.y = 1.08 + Math.sin(app.time * 4) * 0.06
        }
      })
    }

    if (!item.checked && item.z > -0.72 && item.z < 0.82) {
      item.checked = true
      if (G.superTime > 0 && item.type === 'crate') {
        G.score += 160 * G.multiplier
        world.burstConfetti(12, '#ffe36e')
        removeObstacle(i)
        continue
      }
      if (collidesWithPlayer(item)) {
        hitObstacle(item)
        removeObstacle(i)
        continue
      }
    }

    if (item.z > 13) removeObstacle(i)
  }
}

function collidesWithPlayer(item) {
  if (G.invuln > 0) return false
  const lateral = Math.abs(G.playerX - item.x)
  if (item.type === 'hurdle') return G.y < 0.52
  return lateral < 0.74 && G.y < 0.7
}

function removeObstacle(index) {
  const item = G.obstacles[index]
  if (!item) return
  scene.remove(item.mesh)
  G.obstacles.splice(index, 1)
}

function hitObstacle(item) {
  if (G.invuln > 0) return
  G.lives--
  G.combo = 0
  G.multiplier = 1
  G.invuln = 1.8
  G.style = Math.max(0, G.style - 24)
  G.speed = Math.max(9.5, G.speed - 1.8)
  app.shake = 0.42
  gameChar.triggerHit()
  triggerFlash(false, false, true)
  showJudgement(G.lives > 0 ? 'STUMBLE' : 'SHOW STOPPER', true)
  showToast(G.lives > 0 ? 'KEEP YOUR HEAD UP' : 'THE CROWD GASPS')
  audio.hit()
  if (HAS_VIBRATION) navigator.vibrate([30, 40, 60])
  renderLives()
  updateHUD()
  if (G.lives <= 0) endGame()
}

function updateTokens(dt) {
  for (let i = G.tokens.length - 1; i >= 0; i--) {
    const token = G.tokens[i]
    token.z += G.speed * dt
    token.mesh.position.z = token.z
    token.mesh.rotation.y += dt * (token.big ? 2.8 : 2.2)
    token.mesh.position.y = (token.big ? 1.25 : 1.08) + Math.sin(app.time * 3.4 + i) * 0.08
    if (token.mesh.userData.spin) {
      token.mesh.userData.spin.ring.rotation.z += dt * 1.6
      token.mesh.userData.spin.glow.material.opacity = 0.4 + Math.sin(app.time * 5 + i) * 0.16
    }

    if (!token.collected && token.z > -0.7 && token.z < 0.85 && Math.abs(G.playerX - token.x) < 0.72) {
      token.collected = true
      collectToken(token)
      scene.remove(token.mesh)
      G.tokens.splice(i, 1)
      continue
    }
    if (token.z > 13) {
      scene.remove(token.mesh)
      G.tokens.splice(i, 1)
    }
  }
}

function collectToken(token) {
  G.combo += token.big ? 3 : 1
  G.bestCombo = Math.max(G.bestCombo, G.combo)
  G.score += (token.big ? 220 : 55) * G.multiplier * (G.superTime > 0 ? 2 : 1)
  addStyle(token.big ? 16 : 2.2)
  audio.collect(Math.min(3, G.combo % 4))
  if (token.big) {
    triggerFlash(true)
    world.burstConfetti(36, '#ffe36e')
    showToast('ICONIC ✦ +' + Math.round(220 * G.multiplier))
  }
  if (HAS_VIBRATION && token.big) navigator.vibrate(12)
}

function updateHUD(force = false) {
  const score = Math.floor(G.score)
  const distance = Math.floor(G.distance)
  const multiplier = Math.min(8, 1 + Math.floor(G.combo / 10))

  if (force || app.lastHud.score !== score) {
    dom.score.textContent = formatScore(score)
    app.lastHud.score = score
  }
  if (force || app.lastHud.distance !== distance) {
    dom.distance.textContent = String(distance).padStart(3, '0') + ' M'
    app.lastHud.distance = distance
  }
  if (force || app.lastHud.multiplier !== multiplier) {
    dom.multiplier.textContent = `×${multiplier}`
    if (multiplier !== G.multiplier) {
      dom.multiplier.classList.remove('bump')
      void dom.multiplier.offsetWidth
      dom.multiplier.classList.add('bump')
    }
    G.multiplier = multiplier
    app.lastHud.multiplier = multiplier
  }
  if (force || app.lastHud.combo !== G.combo) {
    dom.combo.textContent = String(G.combo)
    dom.comboBadge.classList.toggle('is-on', G.combo >= 3)
    app.lastHud.combo = G.combo
  }
  if (force || app.lastHud.style !== G.style) {
    const style = Math.max(0, Math.min(100, G.style))
    dom.styleFill.style.width = style + '%'
    dom.styleValue.textContent = Math.round(style) + '%'
    dom.styleFill.style.background = G.superTime > 0
      ? 'linear-gradient(90deg, #ffe36e, #ffb23f)'
      : 'linear-gradient(90deg, var(--pink), var(--gold))'
    dom.superTime.textContent = G.superTime.toFixed(1)
    app.lastHud.style = G.style
  }
}

function renderLives() {
  const hearts = dom.lives.querySelectorAll('.heart')
  hearts.forEach((heart, index) => {
    const full = index < G.lives
    heart.classList.toggle('is-full', full)
    heart.classList.remove('just-lost')
    if (!full) {
      void heart.offsetWidth
      heart.classList.add('just-lost')
    }
  })
  dom.lives.setAttribute('aria-label', `${G.lives} of 3 hearts remaining`)
}

// ------------------------------------------------------------
// Results / pause / menu flows
// ------------------------------------------------------------

function rankFor(score, distance) {
  if (score >= 60000 || distance >= 1600) return ['SUPERSTAR', 'THE SHOW IS YOURS.', 'You didn’t walk the runway. You rewrote it.']
  if (score >= 30000 || distance >= 1000) return ['IT GIRL', 'YOU ATE.', 'The front row is still on their feet.']
  if (score >= 15000 || distance >= 620) return ['FRONT ROW', 'MOMENT MADE.', 'A run so good the cameras forgot to blink.']
  if (score >= 6000 || distance >= 300) return ['RISING STAR', 'BEAUTIFUL WORK.', 'The lights loved you. The crowd loved you more.']
  return ['NEW FACE', 'A STAR IS BORN.', 'Every icon starts with one unforgettable step.']
}

function endGame() {
  if (app.state === 'gameover') return
  app.state = 'gameover'
  G.gameover = true
  G.pose.active = false
  dom.poseBtn.classList.remove('is-ready')
  dom.poseBtn.style.setProperty('--p', '0')
  dom.poseSub.textContent = 'ON BEAT'
  dom.tutorialTip.classList.remove('is-on')
  audio.stopMusic(0.8)
  audio.poseResult('great')
  world.burstConfetti(160, LOOKS[app.selected].accent)
  app.gameoverTurn = 0

  const finalScore = Math.floor(G.score)
  const newBest = finalScore > app.best
  if (newBest) {
    app.best = finalScore
    save.set('femboys.best', String(app.best))
  }
  const [rank, title, copy] = rankFor(finalScore, G.distance)
  dom.resultRank.textContent = rank
  dom.resultTitle.textContent = title
  dom.resultCopy.textContent = copy
  dom.finalScore.textContent = formatScore(finalScore)
  dom.finalDistance.textContent = String(Math.floor(G.distance)).padStart(3, '0') + ' M'
  dom.finalCombo.textContent = String(G.bestCombo)
  dom.bestCallout.textContent = 'NEW PERSONAL BEST'
  const star = document.createElement('span')
  star.textContent = ' ✦'
  dom.bestCallout.appendChild(star)
  dom.bestCallout.classList.toggle('is-on', newBest)
  dom.menuBest.textContent = formatScore(app.best)

  clearTimeout(app.gameoverTimer)
  app.gameoverTimer = setTimeout(() => {
    dom.gameoverScreen.classList.remove('is-hidden')
    if (newBest) {
      world.burstConfetti(220, '#ffe36e')
      triggerFlash(false, true)
    }
  }, 520)
  if (HAS_VIBRATION) navigator.vibrate([30, 50, 80])
}

function pauseGame(auto = false) {
  if (app.state !== 'playing') return
  app.state = 'paused'
  audio.duck(true)
  dom.pauseScreen.classList.remove('is-hidden')
  if (auto) dom.pauseScreen.querySelector('.modal-kicker').textContent = 'TAKE FIVE'
}

function resumeGame() {
  if (app.state !== 'paused') return
  app.state = 'playing'
  audio.duck(false)
  dom.pauseScreen.classList.add('is-hidden')
  // Reset timing-sensitive input clocks after a pause.
  if (G.pose.active) {
    const remaining = Math.max(0.35, G.pose.target - G.runTime)
    G.pose.target = G.runTime + remaining
    G.pose.next = G.pose.target
  }
}

function quitToMenu() {
  clearCountdownTimers()
  clearTimeout(app.gameoverTimer)
  clearTimeout(app.tutorialTimer)
  clearTimeout(app.bannerTimer)
  audio.stopMusic(0.35)
  audio.duck(false)
  app.state = 'menu'
  G.gameover = false
  G.superTime = 0
  clearObjects()
  dom.pauseScreen.classList.add('is-hidden')
  dom.gameoverScreen.classList.add('is-hidden')
  dom.howScreen.classList.add('is-hidden')
  dom.countdown.classList.add('is-hidden')
  dom.hud.classList.add('is-hidden')
  dom.menu.classList.remove('is-hidden')
  dom.zoneBanner.classList.remove('is-on')
  dom.tutorialTip.classList.remove('is-on')
  if (gameChar) gameChar.root.visible = false
  if (menuChar) {
    menuChar.root.visible = true
    menuChar.root.position.set(app.menuCharX, 0.035, 0)
    menuChar.root.rotation.y = 0
  }
  if (superAura) superAura.visible = false
  if (superRing) superRing.visible = false
  world.setMode('menu')
  world.setPalette(0, true)
  world.heroSet.visible = true
  world.heroSet.position.x = app.menuCharX
  world.playerSpot.position.x = 0
  world.playerSpot.target.position.x = 0
  dom.menuBest.textContent = formatScore(app.best)
  updateMenuMeta()
  app.shake = 0
  updateMenuCamera(0, false)
  dom.pauseScreen.querySelector('.modal-kicker').textContent = 'INTERMISSION'
}

// ------------------------------------------------------------
// Effects / UI helpers
// ------------------------------------------------------------

function formatScore(value) {
  return String(Math.max(0, Math.floor(value)))
    .padStart(6, '0')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

function showJudgement(text, miss = false) {
  dom.judgement.textContent = text
  dom.judgement.classList.remove('show', 'is-miss')
  void dom.judgement.offsetWidth
  dom.judgement.classList.add('show')
  if (miss) dom.judgement.classList.add('is-miss')
}

function showToast(text, gold = false) {
  dom.toast.textContent = text
  dom.toast.classList.toggle('is-gold', gold)
  dom.toast.classList.add('is-on')
  clearTimeout(app.toastTimer)
  app.toastTimer = setTimeout(() => dom.toast.classList.remove('is-on'), 1800)
}

function triggerFlash(bright = false, pink = false, hit = false) {
  dom.flash.classList.remove('flash', 'flash-pink')
  void dom.flash.offsetWidth
  if (hit) {
    dom.flash.classList.add('flash-pink')
  } else if (pink) {
    dom.flash.classList.add('flash-pink')
  } else if (bright) {
    dom.flash.classList.add('flash')
  } else {
    dom.flash.classList.add('flash')
  }
}

// ------------------------------------------------------------
// Camera / render loop
// ------------------------------------------------------------

function updateGameCamera(dt) {
  const targetFov = (camera.aspect < 0.78 ? 56 : 48) + Math.max(0, G.speed - 11) * 0.16 + (G.superTime > 0 ? 2 : 0)
  desiredPos.set(
    G.playerX * 0.22,
    3.35 + Math.sin(app.time * 2) * 0.012,
    8.15 + (G.speed - 11) * 0.025,
  )
  desiredLook.set(G.playerX * 0.32, 1.3 + G.y * 0.15, -4.4)
  const ease = 1 - Math.exp(-dt * 2.8)
  cameraPos.lerp(desiredPos, ease)
  cameraLook.lerp(desiredLook, ease)
  camera.fov += (targetFov - camera.fov) * (1 - Math.exp(-dt * 2.2))
  camera.updateProjectionMatrix()
}

function updateCamera(dt) {
  let ease = 1 - Math.exp(-dt * 3)
  if (app.state === 'menu') {
    updateMenuCamera(dt, false)
    ease = 1 - Math.exp(-dt * 4)
  } else if (app.state === 'gameover') {
    desiredPos.set(G.playerX * 0.1 + 0.5, 2.9, 7.1)
    desiredLook.set(0, 1.25, -0.6)
    cameraPos.lerp(desiredPos, 1 - Math.exp(-dt * 1.4))
    cameraLook.lerp(desiredLook, 1 - Math.exp(-dt * 1.4))
    camera.fov += (43 - camera.fov) * (1 - Math.exp(-dt * 1.4))
    camera.updateProjectionMatrix()
  } else {
    updateGameCamera(dt)
    ease = 1 - Math.exp(-dt * 2.8)
  }

  camera.position.copy(cameraPos)
  if (app.shake > 0) {
    app.shake = Math.max(0, app.shake - dt * 1.4)
    const s = app.shake * app.shake
    camera.position.x += (Math.random() - 0.5) * s * 0.9
    camera.position.y += (Math.random() - 0.5) * s * 0.6
    camera.position.z += (Math.random() - 0.5) * s * 0.35
  }
  // very subtle runway bounce
  if (app.state === 'playing') {
    camera.position.y += Math.sin(G.runTime * 8) * 0.007
  }
  camera.lookAt(cameraLook)
  camera.rotation.z += 0
}

function animate() {
  requestAnimationFrame(animate)
  const dt = Math.min(clock.getDelta(), 0.045)
  app.time += dt
  const beatPhase = (app.time * BPM) / 60
  const beatPulse = Math.max(0, 1 - (beatPhase % 1)) ** 3

  if (app.state === 'menu') {
    world.update(dt, app.time, 2.5, beatPulse)
    world.heroSet.position.x = app.menuCharX
    if (G.pos) {
      // no-op guard for hot reloads
    }
    if (menuChar) {
      menuChar.update(dt, 'menu', { speed: 0 })
      if (app.menuSpin > 0) {
        app.menuSpin = Math.max(0, app.menuSpin - dt)
        const t = 1 - app.menuSpin / 0.8
        const ease = 1 - Math.pow(1 - t, 3)
        menuChar.root.rotation.y = -Math.PI * 2 * (1 - ease)
      } else {
        menuChar.root.rotation.y = Math.sin(app.time * 0.26) * 0.055
      }
    }
  } else if (app.state === 'gameover') {
    world.update(dt, app.time, 0.7, beatPulse)
    if (gameChar) {
      const turn = Math.min(1, dt * 2.2)
      gameChar.root.rotation.y += (0 - gameChar.root.rotation.y) * turn
      gameChar.update(dt, 'menu', { speed: 0 })
      gameChar.root.position.x += (0 - gameChar.root.position.x) * Math.min(1, dt * 4)
      gameChar.root.position.y += (0.06 - gameChar.root.position.y) * Math.min(1, dt * 4)
    }
    superAura.visible = false
    superRing.visible = false
  } else if (app.state === 'paused') {
    // Hold the frame while the modal is up.
    if (gameChar) gameChar.update(0, 'run', { speed: G.speed, jumpY: G.y })
  } else {
    if (app.state === 'playing') {
      updateGameplay(dt)
    } else if (app.state === 'countdown') {
      G.runTime += dt
      G.speed = 6.5
      G.playerX += (0 - G.playerX) * Math.min(1, dt * 8)
      gameChar.root.position.set(G.playerX, 0.06, 0)
      gameChar.root.rotation.y = Math.PI
    }
    const worldSpeed = app.state === 'countdown' ? 6.5 : G.speed
    world.update(dt, app.time, worldSpeed, beatPulse)
    if (gameChar) gameChar.update(dt, 'run', { speed: G.speed, jumpY: G.y })
    if (G.superTime > 0) {
      superAura.position.set(G.playerX, 1.25 + G.y, 0.45)
      superRing.position.set(G.playerX, 0.09 + G.y, 0)
    }
  }

  updateCamera(dt)
  composer.render()
}

// ------------------------------------------------------------
// Events
// ------------------------------------------------------------

function bindEvents() {
  document.querySelectorAll('.cast-card').forEach((card) => {
    card.addEventListener('click', () => selectLook(card.dataset.cast))
  })

  $('#btn-start').addEventListener('click', startShow)
  $('#btn-how').addEventListener('click', () => {
    audio.ensure()
    audio.click()
    dom.howScreen.classList.remove('is-hidden')
  })
  $('#btn-how-close').addEventListener('click', () => {
    audio.click()
    dom.howScreen.classList.add('is-hidden')
  })
  $('#btn-how-play').addEventListener('click', () => {
    audio.click()
    dom.howScreen.classList.add('is-hidden')
    startShow()
  })
  dom.soundBtn.addEventListener('click', () => {
    audio.ensure()
    setMuted(!audio.muted)
    if (!audio.muted) audio.click()
  })
  dom.pauseBtn.addEventListener('click', () => {
    audio.click()
    pauseGame()
  })
  $('#btn-resume').addEventListener('click', () => {
    audio.click()
    resumeGame()
  })
  $('#btn-quit').addEventListener('click', () => {
    audio.click()
    quitToMenu()
  })
  $('#btn-again').addEventListener('click', () => {
    audio.click()
    dom.gameoverScreen.classList.add('is-hidden')
    startShow()
  })
  $('#btn-menu').addEventListener('click', () => {
    audio.click()
    quitToMenu()
  })

  document.querySelectorAll('[data-action]').forEach((button) => {
    const action = button.dataset.action
    const activate = (event) => {
      event.preventDefault()
      if (action === 'left') moveLane(-1)
      else if (action === 'right') moveLane(1)
      else if (action === 'jump') jump()
      else if (action === 'pose') pressPose()
      button.classList.add('is-pressed')
      setTimeout(() => button.classList.remove('is-pressed'), 110)
    }
    button.addEventListener('pointerdown', (event) => {
      event.stopPropagation()
      activate(event)
    })
    button.addEventListener('contextmenu', (event) => event.preventDefault())
  })

  // Swipes on the runway.
  const canvas = renderer.domElement
  let startX = 0
  let startY = 0
  let startTime = 0
  let tracking = false

  canvas.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    tracking = true
    startX = event.clientX
    startY = event.clientY
    startTime = performance.now()
    canvas.setPointerCapture?.(event.pointerId)
  })

  canvas.addEventListener('pointerup', (event) => {
    if (!tracking) return
    tracking = false
    if (app.state !== 'playing') return
    const dx = event.clientX - startX
    const dy = event.clientY - startY
    const elapsed = performance.now() - startTime
    if (Math.abs(dx) > 36 && Math.abs(dx) > Math.abs(dy) * 1.15) {
      moveLane(dx > 0 ? 1 : -1)
    } else if (dy < -34 && Math.abs(dy) > Math.abs(dx)) {
      jump()
    } else if (elapsed < 280 && Math.abs(dx) < 24 && Math.abs(dy) < 24) {
      jump()
    }
  })

  window.addEventListener('keydown', (event) => {
    if (event.repeat) return
    const key = event.key.toLowerCase()
    if (key === 'arrowleft' || key === 'a') {
      event.preventDefault()
      moveLane(-1)
    } else if (key === 'arrowright' || key === 'd') {
      event.preventDefault()
      moveLane(1)
    } else if (key === 'arrowup' || key === 'w' || key === ' ') {
      event.preventDefault()
      if (key === ' ') pressPose()
      else jump()
    } else if (key === 'p' || key === 'escape') {
      event.preventDefault()
      if (app.state === 'playing') pauseGame()
      else if (app.state === 'paused') resumeGame()
    } else if (key === 'enter') {
      if (app.state === 'menu' && dom.howScreen.classList.contains('is-hidden')) startShow()
      else if (app.state === 'gameover') {
        dom.gameoverScreen.classList.add('is-hidden')
        startShow()
      }
    } else if (key === 'm') {
      setMuted(!audio.muted)
    }
  })

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && app.state === 'playing') pauseGame(true)
  })

  window.addEventListener('blur', () => {
    if (app.state === 'playing' && !IS_TOUCH) pauseGame(true)
  })

  // Keep double-tap zoom from interrupting the show.
  document.addEventListener('gesturestart', (event) => event.preventDefault())
  document.addEventListener('dblclick', (event) => event.preventDefault(), { passive: false })
}

function boot() {
  const savedLook = save.get('femboys.look', 'mika')
  if (LOOKS[savedLook]) app.selected = savedLook
  const muted = save.get('femboys.muted', '0') === '1'
  audio.setMuted(muted)
  document.body.classList.toggle('is-muted', muted)
  dom.soundBtn.setAttribute('aria-pressed', String(muted))
  dom.soundBtn.setAttribute('aria-label', muted ? 'Unmute sound' : 'Mute sound')

  initThree()
  updateMenuMeta()
  bindEvents()
  dom.menuBest.textContent = formatScore(app.best)
  setRenderSize()
  // Refresh menu camera after layout settles around the dynamic viewport.
  requestAnimationFrame(() => {
    updateMenuCamera(0, true)
    document.body.classList.add('is-ready')
  })
  animate()
}

boot()
