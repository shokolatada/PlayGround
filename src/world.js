import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

// ------------------------------------------------------------
// FEMBOYS — the infinite afterglow runway
// ------------------------------------------------------------

const PALETTES = [
  {
    id: 'afterglow',
    name: 'AFTERGLOW',
    skyTop: '#12041d',
    skyBottom: '#5c1859',
    horizon: '#ff4f93',
    sun: '#ff789f',
    sunCore: '#fff0c7',
    fog: '#230a2b',
    neonA: '#ff3f98',
    neonB: '#68f5ff',
    neonC: '#ffe36e',
    ground: '#1c0c22',
    building: '#16081f',
    crowd: ['#ff7bb7', '#8c7cff', '#76f9f1', '#ffd577', '#f0a2ff', '#ff5f8f', '#c8ff78'],
    beamA: '#ff4f9d',
    beamB: '#63f3ff',
  },
  {
    id: 'aqua',
    name: 'AQUA HOUR',
    skyTop: '#020f20',
    skyBottom: '#07576c',
    horizon: '#4de7df',
    sun: '#6afbf5',
    sunCore: '#f0ffdc',
    fog: '#061c26',
    neonA: '#62f4ef',
    neonB: '#ffdf68',
    neonC: '#ff5f9d',
    ground: '#07171d',
    building: '#06121b',
    crowd: ['#5ef8f2', '#d7ff6a', '#ff8fc4', '#9fb1ff', '#ffe694', '#65d7ff', '#f2ffff'],
    beamA: '#56f2ee',
    beamB: '#d4ff64',
  },
  {
    id: 'solaris',
    name: 'SOLARIS',
    skyTop: '#20071b',
    skyBottom: '#943848',
    horizon: '#ffc965',
    sun: '#ffcf6d',
    sunCore: '#fff6cc',
    fog: '#2a1020',
    neonA: '#ffb947',
    neonB: '#ff5d8c',
    neonC: '#f8f4c4',
    ground: '#24101d',
    building: '#1c0a17',
    crowd: ['#ffc865', '#ff6e93', '#f9f1ca', '#ff9b6b', '#ffd5ec', '#c2f7ff', '#ffdd45'],
    beamA: '#ffc55d',
    beamB: '#ff6a97',
  },
  {
    id: 'midnight',
    name: 'MIDNIGHT',
    skyTop: '#030317',
    skyBottom: '#252061',
    horizon: '#8c9bff',
    sun: '#a9b5ff',
    sunCore: '#f3f1ff',
    fog: '#080a22',
    neonA: '#9a85ff',
    neonB: '#5ff5ff',
    neonC: '#ff77bd',
    ground: '#0a081b',
    building: '#070716',
    crowd: ['#9e8dff', '#58f5ff', '#ff7ac5', '#f4efff', '#7dffb4', '#ffdd77', '#aabaff'],
    beamA: '#9b82ff',
    beamB: '#57f5ff',
  },
]

const color = (hex) => new THREE.Color(hex)

function makeGlowTexture(size = 128, inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, inner)
  grad.addColorStop(0.2, inner)
  grad.addColorStop(0.55, 'rgba(255,255,255,0.22)')
  grad.addColorStop(1, outer)
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function makeDotTexture(size = 64) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.5, 'rgba(255,255,255,0.9)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function makeRunwayTexture() {
  const w = 512
  const h = 1024
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')

  const bg = ctx.createLinearGradient(0, 0, w, 0)
  bg.addColorStop(0, '#100813')
  bg.addColorStop(0.08, '#241029')
  bg.addColorStop(0.5, '#1c0d22')
  bg.addColorStop(0.92, '#241029')
  bg.addColorStop(1, '#100813')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, w, h)

  // subtle glitter grain
  for (let i = 0; i < 1400; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.055})`
    const s = Math.random() * 1.8 + 0.3
    ctx.fillRect(Math.random() * w, Math.random() * h, s, s)
  }

  // soft edge glow
  const edge = ctx.createLinearGradient(0, 0, w, 0)
  edge.addColorStop(0, 'rgba(255,79,157,0)')
  edge.addColorStop(0.035, 'rgba(255,79,157,0.8)')
  edge.addColorStop(0.08, 'rgba(255,79,157,0.05)')
  edge.addColorStop(0.5, 'rgba(255,255,255,0)')
  edge.addColorStop(0.92, 'rgba(104,245,255,0.05)')
  edge.addColorStop(0.965, 'rgba(104,245,255,0.8)')
  edge.addColorStop(1, 'rgba(104,245,255,0)')
  ctx.fillStyle = edge
  ctx.fillRect(0, 0, w, h)

  // lane lines
  ctx.strokeStyle = 'rgba(255,244,237,0.15)'
  ctx.lineWidth = 2
  for (const x of [w * 0.333, w * 0.667]) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, h)
    ctx.stroke()
  }

  // repeating runway chevrons
  for (let y = 0; y < h; y += 128) {
    const alpha = 0.1
    ctx.strokeStyle = `rgba(255,244,237,${alpha})`
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(w * 0.43, y + 20)
    ctx.lineTo(w * 0.5, y + 44)
    ctx.lineTo(w * 0.57, y + 20)
    ctx.stroke()

    // runway dashes
    ctx.strokeStyle = 'rgba(255,244,237,0.2)'
    ctx.lineWidth = 4
    ctx.setLineDash([18, 34])
    ctx.beginPath()
    ctx.moveTo(w * 0.5, y + 66)
    ctx.lineTo(w * 0.5, y + 112)
    ctx.stroke()
    ctx.setLineDash([])
  }

  const tex = new THREE.CanvasTexture(canvas)
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(1, 8)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  return tex
}

function makeWindowTexture(seed = 1) {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#06030b'
  ctx.fillRect(0, 0, 128, 256)
  let s = seed * 997
  const rand = () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
  for (let y = 8; y < 247; y += 13) {
    for (let x = 8; x < 120; x += 13) {
      const lit = rand() > 0.55
      if (!lit) continue
      const warm = rand() > 0.38
      ctx.fillStyle = warm ? `rgba(255,208,139,${0.4 + rand() * 0.6})` : `rgba(155,209,255,${0.28 + rand() * 0.45})`
      ctx.fillRect(x, y, 5 + Math.floor(rand() * 3), 5)
    }
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = THREE.RepeatWrapping
  tex.wrapT = THREE.RepeatWrapping
  return tex
}

function makeTextTexture(text, { sub = '', color = '#fff1e8', accent = '#ff3f98', bg = 'rgba(10,3,12,0.82)', width = 1024, height = 256 } = {}) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, width, height)
  ctx.strokeStyle = accent
  ctx.lineWidth = 10
  ctx.strokeRect(9, 9, width - 18, height - 18)
  ctx.fillStyle = color
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  ctx.font = `700 ${Math.floor(height * 0.6)}px "Bebas Neue", "Arial Narrow", sans-serif`
  ctx.fillText(text, width / 2, height * (sub ? 0.43 : 0.51))
  if (sub) {
    ctx.fillStyle = accent
    ctx.font = `800 ${Math.floor(height * 0.11)}px "Manrope", sans-serif`
    ctx.fillText(sub, width / 2, height * 0.83)
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  return tex
}

// ------------------------------------------------------------

export class RunwayWorld {
  constructor(scene, options = {}) {
    this.scene = scene
    this.isMobile = options.isMobile ?? false
    this.paletteIndex = 0
    this.current = this.makePaletteColors(PALETTES[0])
    this.target = this.makePaletteColors(PALETTES[0])
    this.elapsed = 0
    this.distance = 0
    this.mode = 'menu'
    this.particleTime = 0
    this.arches = []
    this.signs = []
    this.confettiBursts = []
    this.crowdData = []
    this.crowdPhones = []
    this.glowTex = makeGlowTexture()
    this.dotTex = makeDotTexture()
    this.neonA = new THREE.MeshBasicMaterial({ color: this.current.neonA, toneMapped: false })
    this.neonB = new THREE.MeshBasicMaterial({ color: this.current.neonB, toneMapped: false })
    this.neonC = new THREE.MeshBasicMaterial({ color: this.current.neonC, toneMapped: false })
    this.neonAGlow = new THREE.MeshBasicMaterial({
      color: this.current.neonA,
      transparent: true,
      opacity: 0.085,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    })
    this.neonBGlow = this.neonAGlow.clone()
    this.neonBGlow.color.copy(this.current.neonB)
    this.beamA = new THREE.MeshBasicMaterial({
      color: this.current.beamA,
      transparent: true,
      opacity: 0.014,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    })
    this.beamB = this.beamA.clone()
    this.beamB.color.copy(this.current.beamB)

    this.buildLights()
    this.buildSky()
    this.buildRunway()
    this.buildCity()
    this.buildArches()
    this.buildCrowd()
    this.buildSigns()
    this.buildHeroSet()
    this.buildParticles()
    this.buildConfetti()
  }

  makePaletteColors(p) {
    const out = {}
    for (const key of ['skyTop', 'skyBottom', 'horizon', 'sun', 'sunCore', 'fog', 'neonA', 'neonB', 'neonC', 'ground', 'building', 'beamA', 'beamB']) {
      out[key] = color(p[key])
    }
    return out
  }

  // ---------------- lights ----------------

  buildLights() {
    const scene = this.scene
    this.hemi = new THREE.HemisphereLight(0xffc1e3, 0x120416, 0.58)
    scene.add(this.hemi)

    this.key = new THREE.DirectionalLight(0xffd8ec, 1.65)
    this.key.position.set(3.4, 9, 6)
    scene.add(this.key)

    this.rim = new THREE.DirectionalLight(0x6ff8ff, 0.68)
    this.rim.position.set(-6, 4.5, -6)
    scene.add(this.rim)

    this.playerSpot = new THREE.SpotLight(0xff9fd1, 27, 19, 0.62, 0.75, 1.25)
    this.playerSpot.position.set(0, 8.5, 3.2)
    this.playerSpot.target.position.set(0, 0.7, -1.2)
    scene.add(this.playerSpot)
    scene.add(this.playerSpot.target)

    this.pinkPoint = new THREE.PointLight(0xff3f98, 15, 22, 1.5)
    this.pinkPoint.position.set(-4.4, 1.8, -3.5)
    scene.add(this.pinkPoint)

    this.cyanPoint = new THREE.PointLight(0x61f4ff, 12, 24, 1.5)
    this.cyanPoint.position.set(4.2, 2.2, -10)
    scene.add(this.cyanPoint)

    this.audienceGlow = new THREE.PointLight(0xff86bb, 7, 26, 1.5)
    this.audienceGlow.position.set(0, 4, -9)
    scene.add(this.audienceGlow)
  }

  // ---------------- sky ----------------

  buildSky() {
    const scene = this.scene
    const geo = new THREE.SphereGeometry(230, 32, 24)
    this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uTop: { value: this.current.skyTop.clone() },
        uBottom: { value: this.current.skyBottom.clone() },
        uHorizon: { value: this.current.horizon.clone() },
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vDir;
        uniform vec3 uTop;
        uniform vec3 uBottom;
        uniform vec3 uHorizon;
        uniform float uTime;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          float h = smoothstep(-0.15, 0.92, vDir.y);
          vec3 col = mix(uBottom, uTop, h);
          float horizon = exp(-pow((vDir.y - 0.02) * 6.5, 2.0));
          col += uHorizon * horizon * 0.24;
          float glow = pow(max(0.0, 1.0 - abs(vDir.x) * 1.2), 4.0) * exp(-pow((vDir.y - 0.15) * 3.2, 2.0));
          col += uHorizon * glow * 0.15;
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    })
    const sky = new THREE.Mesh(geo, this.skyMat)
    sky.frustumCulled = false
    scene.add(sky)
    this.sky = sky

    // sun / moon halo
    const haloTex = makeGlowTexture(256, 'rgba(255,255,255,0.85)', 'rgba(255,255,255,0)')
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: haloTex,
      color: this.current.sun,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      fog: false,
      toneMapped: false,
    }))
    halo.scale.set(28, 28, 1)
    halo.position.set(0, 17, -100)
    scene.add(halo)
    this.halo = halo

    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(6.2, 64),
      new THREE.MeshBasicMaterial({ color: this.current.sunCore, fog: false, toneMapped: false }),
    )
    disc.position.set(0, 17, -101)
    scene.add(disc)
    this.sunDisc = disc

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(6.4, 6.56, 64),
      new THREE.MeshBasicMaterial({
        color: this.current.sun,
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
        toneMapped: false,
      }),
    )
    ring.position.set(0, 17, -101.1)
    scene.add(ring)
    this.sunRing = ring

    // stars
    const starCount = this.isMobile ? 420 : 700
    const positions = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const y = 0.09 + Math.random() * 0.75
      const r = Math.sqrt(1 - y * y)
      positions[i * 3] = Math.cos(theta) * r * 165
      positions[i * 3 + 1] = y * 150 - 6
      positions[i * 3 + 2] = Math.sin(theta) * r * 165 - 20
      sizes[i] = Math.random()
    }
    const starGeo = new THREE.BufferGeometry()
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    starGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
    const starMat = new THREE.PointsMaterial({
      color: '#ffe8f5',
      size: 0.7,
      map: this.dotTex,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      fog: false,
      toneMapped: false,
    })
    this.stars = new THREE.Points(starGeo, starMat)
    scene.add(this.stars)
  }

  // ---------------- runway ----------------

  buildRunway() {
    const scene = this.scene
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(250, 280),
      new THREE.MeshStandardMaterial({
        color: this.current.ground,
        roughness: 0.38,
        metalness: 0.35,
      }),
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.set(0, -0.34, -70)
    scene.add(ground)
    this.ground = ground

    this.runwayTex = makeRunwayTexture()
    this.runwayMat = new THREE.MeshPhysicalMaterial({
      map: this.runwayTex,
      color: '#ffffff',
      roughness: 0.23,
      metalness: 0.48,
      clearcoat: 0.72,
      clearcoatRoughness: 0.18,
      emissiveMap: this.runwayTex,
      emissive: this.current.neonA,
      emissiveIntensity: 0.14,
    })
    const runway = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 190), this.runwayMat)
    runway.rotation.x = -Math.PI / 2
    runway.position.set(0, 0, -76)
    scene.add(runway)
    this.runway = runway

    // glossy black side decks
    for (const side of [-1, 1]) {
      const deck = new THREE.Mesh(
        new THREE.PlaneGeometry(15.5, 190),
        new THREE.MeshStandardMaterial({ color: '#09040d', roughness: 0.23, metalness: 0.6 }),
      )
      deck.rotation.x = -Math.PI / 2
      deck.position.set(side * 10.3, -0.04, -76)
      scene.add(deck)
    }

    // runway rail strips
    this.railMeshes = []
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.08, 190), side < 0 ? this.neonA : this.neonB)
      rail.position.set(side * 2.72, 0.02, -76)
      scene.add(rail)
      this.railMeshes.push(rail)

      const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 190), side < 0 ? this.neonAGlow : this.neonBGlow)
      glow.rotation.x = -Math.PI / 2
      glow.position.set(side * 2.9, 0.005, -76)
      scene.add(glow)
    }

    // dark platform sides that make the catwalk feel elevated
    for (const side of [-1, 1]) {
      const sidePanel = new THREE.Mesh(
        new RoundedBoxGeometry(0.34, 0.33, 190, 2, 0.05),
        new THREE.MeshStandardMaterial({ color: '#160a1c', roughness: 0.3, metalness: 0.58 }),
      )
      sidePanel.position.set(side * 2.86, -0.12, -76)
      scene.add(sidePanel)
    }

    // V.I.P. front-row pit, stage-facing
    const pitMat = new THREE.MeshStandardMaterial({ color: '#170a1e', roughness: 0.32, metalness: 0.52 })
    for (const side of [-1, 1]) {
      const pit = new THREE.Mesh(new RoundedBoxGeometry(2.7, 0.48, 9, 3, 0.11), pitMat)
      pit.position.set(side * 4.75, -0.1, 1.8)
      scene.add(pit)
      const edge = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.03, 9), side < 0 ? this.neonA : this.neonB)
      edge.position.set(side * 4.75, 0.15, 1.8)
      scene.add(edge)
    }
  }

  // ---------------- skyline ----------------

  buildCity() {
    const textures = [1, 2, 3, 4].map((s) => makeWindowTexture(s))
    const city = new THREE.Group()
    this.scene.add(city)
    this.city = city

    const buildings = []
    const rand = (a, b) => a + Math.random() * (b - a)
    for (let i = 0; i < 34; i++) {
      const side = i % 2 === 0 ? -1 : 1
      const w = rand(3.5, 9)
      const h = rand(8, 38)
      const d = rand(3, 8)
      const tex = textures[i % textures.length].clone()
      tex.needsUpdate = true
      tex.repeat.set(Math.max(1, Math.round(w / 4)), Math.max(1, Math.round(h / 8)))
      const mat = new THREE.MeshStandardMaterial({
        color: this.current.building,
        map: tex,
        emissiveMap: tex,
        emissive: 0xffc27a,
        emissiveIntensity: 0.75,
        roughness: 0.58,
        metalness: 0.2,
      })
      const building = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
      building.position.set(side * rand(19, 58), h / 2 - 0.5, -rand(48, 108))
      city.add(building)
      buildings.push({ mesh: building, mat })
    }
    this.buildings = buildings

    // neon billboards
    const billboardData = [
      ['FEMBOYS', 'LIVE', '#ff3f98'],
      ['SLAY', 'ALL NIGHT', '#5ff2ff'],
      ['♡', 'THE AFTERGLOW', '#ffd86b'],
      ['ICON', 'SEASON 01', '#b58cff'],
    ]
    this.billboards = []
    billboardData.forEach(([text, sub, accent], i) => {
      const tex = makeTextTexture(text, {
        sub,
        accent,
        width: 512,
        height: 160,
        color: '#fff1e8',
        bg: 'rgba(5,2,9,0.84)',
      })
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, fog: true })
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(13, 4.1), mat)
      const side = i % 2 === 0 ? -1 : 1
      plane.position.set(side * (28 + i * 3.4), 16 + i * 2.7, -64 - i * 10)
      plane.rotation.y = side * -0.1
      this.scene.add(plane)
      this.billboards.push(plane)
    })
  }

  // ---------------- arches ----------------

  buildArches() {
    const group = new THREE.Group()
    this.scene.add(group)
    this.archGroup = group
    const spacing = 24
    const count = this.isMobile ? 5 : 6
    const trussMat = new THREE.MeshStandardMaterial({ color: '#1a0b20', roughness: 0.32, metalness: 0.72 })

    for (let i = 0; i < count; i++) {
      const arch = new THREE.Group()
      arch.position.z = 12 - i * spacing
      const main = i % 2 === 0 ? this.neonA : this.neonB
      const alt = i % 2 === 0 ? this.neonB : this.neonA

      // structure towers
      for (const side of [-1, 1]) {
        const tower = new THREE.Mesh(new RoundedBoxGeometry(0.23, 6.5, 0.23, 2, 0.04), trussMat)
        tower.position.set(side * 4.75, 3.25, 0)
        arch.add(tower)
        for (let r = 0; r < 8; r++) {
          const bar = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.035, 0.035), trussMat)
          bar.position.set(side * 4.75, 0.35 + r * 0.79, 0.08)
          bar.rotation.z = 0.75
          arch.add(bar)
        }
        const neon = new THREE.Mesh(new THREE.BoxGeometry(0.085, 6.2, 0.085), main)
        neon.position.set(side * 4.6, 3.3, 0.16)
        arch.add(neon)
        const neon2 = new THREE.Mesh(new THREE.BoxGeometry(0.03, 5.8, 0.03), alt)
        neon2.position.set(side * 4.88, 3.3, 0.2)
        arch.add(neon2)
      }

      const top = new THREE.Mesh(new RoundedBoxGeometry(9.7, 0.3, 0.3, 2, 0.05), trussMat)
      top.position.set(0, 6.5, 0)
      arch.add(top)
      const topNeon = new THREE.Mesh(new THREE.BoxGeometry(9.3, 0.08, 0.08), main)
      topNeon.position.set(0, 6.35, 0.17)
      arch.add(topNeon)

      // a camera / follow spot rig on the arch
      for (const side of [-1, 1]) {
        const can = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.55, 10), trussMat)
        can.position.set(side * 3.1, 6.72, 0.18)
        can.rotation.x = 1.05
        arch.add(can)
        const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.05, 12), side < 0 ? this.neonA : this.neonB)
        lens.position.set(side * 3.1, 6.83, 0.46)
        lens.rotation.x = 1.05
        arch.add(lens)
      }

      // overhead glow panel
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(8.8, 0.7), i % 2 === 0 ? this.neonAGlow : this.neonBGlow)
      glow.position.set(0, 6.15, 0.02)
      arch.add(glow)

      if (i % 2 === 1) {
        const tex = makeTextTexture('FEMBOYS', {
          sub: i === 1 ? 'SEASON 01' : 'RUNWAY RHYTHM',
          width: 1024,
          height: 256,
          accent: i === 1 ? '#ff3f98' : '#5ff2ff',
          bg: 'rgba(9,2,12,0.78)',
        })
        const sign = new THREE.Mesh(
          new THREE.PlaneGeometry(3.2, 0.8),
          new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }),
        )
        sign.position.set(0, 5.7, 0.2)
        arch.add(sign)
      }

      // volumetric side beams
      for (const side of [-1, 1]) {
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.8, 5.7, 20, 1, true), i % 2 === 0 ? this.beamA : this.beamB)
        cone.position.set(side * 3.5, 3.2, 0.8)
        cone.rotation.z = side * 0.08
        arch.add(cone)
      }

      group.add(arch)
      this.arches.push({ group: arch, i })
    }
  }

  // ---------------- crowd ----------------

  buildCrowd() {
    const countsPerRow = this.isMobile ? 16 : 23
    const rows = 5
    const total = countsPerRow * rows * 2
    const bodyGeo = new THREE.CapsuleGeometry(0.1, 0.2, 3, 7)
    const headGeo = new THREE.SphereGeometry(0.1, 10, 8)
    const armGeo = new THREE.CapsuleGeometry(0.028, 0.15, 2, 5)
    const bodyMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.66, metalness: 0.02 })
    const headMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.72, metalness: 0 })
    const armMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.62, metalness: 0.01 })

    this.crowdBodies = new THREE.InstancedMesh(bodyGeo, bodyMat, total)
    this.crowdHeads = new THREE.InstancedMesh(headGeo, headMat, total)
    this.crowdArms = new THREE.InstancedMesh(armGeo, armMat, total * 2)
    this.crowdBodies.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    this.crowdHeads.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    this.crowdArms.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    this.crowdBodies.frustumCulled = false
    this.crowdHeads.frustumCulled = false
    this.crowdArms.frustumCulled = false
    this.scene.add(this.crowdBodies, this.crowdHeads, this.crowdArms)

    const colors = PALETTES[0].crowd.map(color)
    const dummy = new THREE.Object3D()
    const tint = new THREE.Color()
    let index = 0
    for (const side of [-1, 1]) {
      for (let row = 0; row < rows; row++) {
        for (let i = 0; i < countsPerRow; i++) {
          const z = 18 - (i / (countsPerRow - 1)) * 136 + (Math.random() - 0.5) * 2.5
          const x = side * (6.1 + row * 1.15 + Math.random() * 0.4)
          const y = 0.55 + row * 0.58
          const phase = Math.random() * Math.PI * 2
          const scale = 0.86 + Math.random() * 0.3
          const armUp = Math.random() > 0.38
          this.crowdData.push({ x, y, z, phase, scale, side, row, armUp })
          tint.copy(colors[Math.floor(Math.random() * colors.length)])
          this.crowdBodies.setColorAt(index, tint)
          this.crowdHeads.setColorAt(index, tint.clone().multiplyScalar(1.12))
          this.crowdArms.setColorAt(index * 2, tint.clone().multiplyScalar(1.04))
          this.crowdArms.setColorAt(index * 2 + 1, tint.clone().multiplyScalar(1.04))

          dummy.position.set(x, y, z)
          dummy.scale.setScalar(scale)
          dummy.rotation.set(0, side * -0.22, 0)
          dummy.updateMatrix()
          this.crowdBodies.setMatrixAt(index, dummy.matrix)
          dummy.position.y = y + 0.24 * scale
          dummy.updateMatrix()
          this.crowdHeads.setMatrixAt(index, dummy.matrix)
          index++
        }
      }
    }
    this.crowdBodies.instanceColor.needsUpdate = true
    this.crowdHeads.instanceColor.needsUpdate = true
    this.crowdArms.instanceColor.needsUpdate = true

    // phones / light sticks
    const phoneGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(this.crowdData.length * 3)
    const phoneColors = new Float32Array(this.crowdData.length * 3)
    this.crowdPhones = []
    for (let i = 0; i < this.crowdData.length; i++) {
      const c = this.crowdData[i]
      positions[i * 3] = c.x + c.side * 0.1
      positions[i * 3 + 1] = c.y + 0.45
      positions[i * 3 + 2] = c.z + 0.1
      const col = colors[Math.floor(Math.random() * colors.length)]
      phoneColors[i * 3] = col.r
      phoneColors[i * 3 + 1] = col.g
      phoneColors[i * 3 + 2] = col.b
      this.crowdPhones.push({ i, phase: Math.random() * 9 })
    }
    phoneGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    phoneGeo.setAttribute('color', new THREE.BufferAttribute(phoneColors, 3))
    this.phonePoints = new THREE.Points(
      phoneGeo,
      new THREE.PointsMaterial({
        size: 0.13,
        map: this.dotTex,
        vertexColors: true,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        toneMapped: false,
      }),
    )
    this.phonePoints.frustumCulled = false
    this.scene.add(this.phonePoints)

    // bleacher steps
    const stepMat = new THREE.MeshStandardMaterial({ color: '#0d0612', roughness: 0.46, metalness: 0.4 })
    for (const side of [-1, 1]) {
      for (let row = 0; row < 5; row++) {
        const step = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.5, 148), stepMat)
        step.position.set(side * (6.1 + row * 1.15), 0.22 + row * 0.58, -50)
        this.scene.add(step)
      }
    }
  }

  buildSigns() {
    const data = [
      ['SLAY', '#ff3f98'],
      ['ICON', '#5ff2ff'],
      ['YES ♡', '#ffe36e'],
      ['MIKA', '#ff8ec6'],
      ['REN', '#c3a2ff'],
      ['JULES', '#7ff8f4'],
    ]
    data.forEach(([text, accent], i) => {
      const tex = makeTextTexture(text, {
        width: 512,
        height: 192,
        accent,
        bg: 'rgba(9,2,12,0.76)',
      })
      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(1.7, 0.64),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }),
      )
      const side = i % 2 === 0 ? -1 : 1
      plane.position.set(side * (7.6 + (i % 3) * 0.7), 3.2 + (i % 4) * 0.45, 4 - i * 19)
      plane.rotation.y = side * 0.1
      this.scene.add(plane)
      this.signs.push({ mesh: plane, side })
    })
  }

  buildHeroSet() {
    const group = new THREE.Group()
    this.scene.add(group)
    this.heroSet = group

    // circular hero dais
    const dais = new THREE.Mesh(
      new RoundedBoxGeometry(7.2, 0.36, 5.4, 4, 0.16),
      new THREE.MeshPhysicalMaterial({
        color: '#16081c',
        roughness: 0.18,
        metalness: 0.5,
        clearcoat: 0.8,
        clearcoatRoughness: 0.16,
      }),
    )
    dais.position.set(0, -0.18, 0.1)
    group.add(dais)
    const rim = new THREE.Mesh(new THREE.TorusGeometry(3.28, 0.025, 6, 72), this.neonA)
    rim.rotation.x = Math.PI / 2
    rim.position.y = 0.02
    rim.scale.z = 0.76
    group.add(rim)
    const rim2 = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.014, 5, 64), this.neonB)
    rim2.rotation.x = Math.PI / 2
    rim2.position.y = 0.025
    rim2.scale.z = 0.74
    group.add(rim2)

    // layered ring portal
    for (const [radius, mat, z, rot] of [
      [3.5, this.neonAGlow, -5.4, 0],
      [3.5, this.neonA, -5.3, 0],
      [4.35, this.neonBGlow, -7.7, 0.2],
      [4.35, this.neonB, -7.6, 0.2],
    ]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, radius > 4 ? 0.05 : 0.035, 8, 100), mat)
      ring.position.set(0, 3.2, z)
      ring.rotation.z = rot
      group.add(ring)
    }

    // hanging spot cans
    for (const side of [-1, 1]) {
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 4.4, 4), new THREE.MeshBasicMaterial({ color: '#09040c' }))
      cord.position.set(side * 3.3, 6.5, -2.6)
      group.add(cord)
      const can = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.3, 0.72, 12), new THREE.MeshStandardMaterial({ color: '#1b0a21', roughness: 0.3, metalness: 0.75 }))
      can.position.set(side * 3.3, 4.1, -2.6)
      can.rotation.x = 0.18
      group.add(can)
      const lens = new THREE.Mesh(new THREE.CircleGeometry(0.22, 18), side < 0 ? this.neonA : this.neonB)
      lens.position.set(side * 3.3, 3.74, -2.5)
      lens.rotation.x = -Math.PI / 2
      group.add(lens)
    }

    // floating stars
    this.heroStars = []
    for (let i = 0; i < 6; i++) {
      const star = makeStar(0.16 + Math.random() * 0.1, i % 2 ? this.neonC : this.neonB, 0.04)
      star.position.set((Math.random() - 0.5) * 7.2, 2.8 + Math.random() * 3.2, -3 - Math.random() * 4)
      star.userData = { baseY: star.position.y, phase: Math.random() * 8, rot: Math.random() * 2 }
      group.add(star)
      this.heroStars.push(star)
    }
  }

  buildParticles() {
    const count = this.isMobile ? 180 : 320
    const positions = new Float32Array(count * 3)
    const phases = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 24
      positions[i * 3 + 1] = 0.2 + Math.random() * 9
      positions[i * 3 + 2] = 16 - Math.random() * 130
      phases[i] = Math.random() * Math.PI * 2
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))
    const mat = new THREE.PointsMaterial({
      map: this.dotTex,
      color: '#ffd6ea',
      size: 0.11,
      transparent: true,
      opacity: 0.68,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    })
    this.sparkles = new THREE.Points(geo, mat)
    this.sparkles.frustumCulled = false
    this.scene.add(this.sparkles)
    this.sparklePositions = positions
    this.sparklePhases = phases
  }

  buildConfetti() {
    const count = 240
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = 0
      positions[i * 3 + 1] = -20
      positions[i * 3 + 2] = 0
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const mat = new THREE.PointsMaterial({
      size: 0.16,
      map: this.dotTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      toneMapped: false,
    })
    this.confetti = new THREE.Points(geo, mat)
    this.confetti.frustumCulled = false
    this.scene.add(this.confetti)
    this.confettiPositions = positions
    this.confettiVelocities = velocities
    this.confettiColors = colors
    this.confettiLife = new Float32Array(count)
    this.confettiCount = count
    this.confettiCursor = 0
  }

  // ---------------- interaction / state ----------------

  setMode(mode) {
    this.mode = mode
    const menu = mode === 'menu'
    this.heroSet.visible = menu
    if (this.podium) this.podium.visible = menu
    // clear the runway sightline while selecting
    this.signs.forEach((s) => { s.mesh.visible = !menu })
  }

  setPalette(index, instant = false) {
    this.paletteIndex = index % PALETTES.length
    const palette = PALETTES[this.paletteIndex]
    this.target = this.makePaletteColors(palette)
    if (instant) {
      for (const key of Object.keys(this.target)) this.current[key].copy(this.target[key])
      this.applyPalette()
    }
  }

  applyPalette() {
    this.skyMat.uniforms.uTop.value.copy(this.current.skyTop)
    this.skyMat.uniforms.uBottom.value.copy(this.current.skyBottom)
    this.skyMat.uniforms.uHorizon.value.copy(this.current.horizon)
    this.scene.fog?.color.copy(this.current.fog)
    this.halo.material.color.copy(this.current.sun)
    this.sunRing.material.color.copy(this.current.sun)
    this.sunDisc.material.color.copy(this.current.sunCore)
    this.runwayMat.emissive.copy(this.current.neonA)
    this.ground.material.color.copy(this.current.ground)
    this.neonA.color.copy(this.current.neonA)
    this.neonB.color.copy(this.current.neonB)
    this.neonC.color.copy(this.current.neonC)
    this.neonAGlow.color.copy(this.current.neonA)
    this.neonBGlow.color.copy(this.current.neonB)
    this.beamA.color.copy(this.current.beamA)
    this.beamB.color.copy(this.current.beamB)
    this.pinkPoint.color.copy(this.current.neonA)
    this.cyanPoint.color.copy(this.current.neonB)
    this.playerSpot.color.copy(this.current.neonA).lerp(new THREE.Color('#ffffff'), 0.72)
    this.hemi.color.copy(this.current.horizon).lerp(new THREE.Color('#ffffff'), 0.35)
    this.buildings.forEach(({ mat }) => mat.color.copy(this.current.building))
    this.stars.material.color.copy(this.current.sunCore)
  }

  burstConfetti(count = 90, tint = null) {
    const colors = PALETTES[this.paletteIndex].crowd.map(color)
    for (let n = 0; n < count; n++) {
      const i = this.confettiCursor
      this.confettiCursor = (this.confettiCursor + 1) % this.confettiCount
      this.confettiPositions[i * 3] = (Math.random() - 0.5) * 5
      this.confettiPositions[i * 3 + 1] = 4.2 + Math.random() * 3
      this.confettiPositions[i * 3 + 2] = -1 + Math.random() * 5
      this.confettiVelocities[i * 3] = (Math.random() - 0.5) * 3.2
      this.confettiVelocities[i * 3 + 1] = 1.5 + Math.random() * 3.5
      this.confettiVelocities[i * 3 + 2] = -1.4 + Math.random() * 2
      const c = tint ? color(tint) : colors[Math.floor(Math.random() * colors.length)]
      this.confettiColors[i * 3] = c.r
      this.confettiColors[i * 3 + 1] = c.g
      this.confettiColors[i * 3 + 2] = c.b
      this.confettiLife[i] = 1.8 + Math.random() * 1.2
    }
    this.confetti.geometry.attributes.color.needsUpdate = true
    this.confetti.geometry.attributes.position.needsUpdate = true
  }

  // ---------------- per frame ----------------

  update(dt, elapsed, speed = 12, beatPulse = 0) {
    this.elapsed = elapsed
    this.distance += speed * dt
    const dist = this.distance
    const paletteBlend = Math.min(1, dt * 0.9)
    for (const key of Object.keys(this.target)) {
      this.current[key].lerp(this.target[key], paletteBlend)
    }
    this.applyPalette()
    this.skyMat.uniforms.uTime.value = elapsed

    // Move the texture without seams; speed is a real distance.
    this.runwayTex.offset.y = -(dist / 23.75) % 1
    if (this.podium) this.podium.rotation.y += dt * 0.08

    // hero portal breathing
    if (this.heroSet.visible) {
      this.heroSet.children.forEach((obj) => {
        if (obj.geometry?.type === 'TorusGeometry' && obj.position.z < -5) {
          obj.rotation.z += dt * 0.02
        }
      })
      this.heroStars.forEach((star) => {
        star.position.y = star.userData.baseY + Math.sin(elapsed * 0.8 + star.userData.phase) * 0.22
        star.rotation.y += dt * (0.4 + star.userData.rot)
        star.rotation.z += dt * 0.08
      })
    }

    // arches recycle
    for (const arch of this.arches) {
      arch.group.position.z += speed * dt
      if (arch.group.position.z > 18) arch.group.position.z -= 24 * this.arches.length
    }

    // crowd scroll + bob
    const dummy = new THREE.Object3D()
    const bob = Math.sin(elapsed * 2.1) * 0.015
    const phonePos = this.phonePoints.geometry.attributes.position.array
    const depth = 154
    for (let i = 0; i < this.crowdData.length; i++) {
      const c = this.crowdData[i]
      c.z += speed * dt
      if (c.z > 21) c.z -= depth
      const sway = Math.sin(elapsed * 2.2 + c.phase) * 0.05
      dummy.position.set(c.x + sway, c.y + bob * (1 + (i % 5)), c.z)
      dummy.rotation.set(0, c.side * -0.22, Math.sin(elapsed * 1.4 + c.phase) * 0.02)
      dummy.scale.setScalar(c.scale)
      dummy.updateMatrix()
      this.crowdBodies.setMatrixAt(i, dummy.matrix)
      dummy.position.y = c.y + 0.24 * c.scale + bob * 1.2
      dummy.updateMatrix()
      this.crowdHeads.setMatrixAt(i, dummy.matrix)

      // one or both arms in the air
      for (let arm = 0; arm < 2; arm++) {
        const ai = i * 2 + arm
        const dir = arm === 0 ? -1 : 1
        const raise = c.armUp ? 1 : 0.18
        dummy.position.set(
          c.x + dir * 0.15 * c.scale,
          c.y + 0.17 + raise * 0.17,
          c.z + 0.02,
        )
        dummy.rotation.set(0.18 * raise, c.side * -0.22, dir * (1.1 * raise + 0.1) + Math.sin(elapsed * 2.4 + c.phase + arm) * 0.12)
        dummy.scale.setScalar(c.scale)
        dummy.updateMatrix()
        this.crowdArms.setMatrixAt(ai, dummy.matrix)
      }

      if (i % 1 === 0) {
        phonePos[i * 3] = c.x + Math.sin(elapsed * 2.4 + c.phase) * 0.09
        phonePos[i * 3 + 1] = c.y + 0.45 + bob * 2
        phonePos[i * 3 + 2] = c.z + 0.12
      }
    }
    this.crowdBodies.instanceMatrix.needsUpdate = true
    this.crowdHeads.instanceMatrix.needsUpdate = true
    this.crowdArms.instanceMatrix.needsUpdate = true
    this.phonePoints.geometry.attributes.position.needsUpdate = true

    // crowd sign parallax
    for (const sign of this.signs) {
      sign.mesh.position.z += speed * dt
      if (sign.mesh.position.z > 18) sign.mesh.position.z -= 114
      sign.mesh.position.y = 3.2 + Math.sin(elapsed * 1.6 + sign.mesh.position.z) * 0.08
    }

    // billboards subtle float
    this.billboards.forEach((b, i) => {
      b.position.y += Math.sin(elapsed * 0.5 + i) * 0.0008
    })

    // sparkles drift toward the camera
    const sp = this.sparklePositions
    for (let i = 0; i < this.sparklePhases.length; i++) {
      sp[i * 3 + 2] += speed * dt * 0.7
      if (sp[i * 3 + 2] > 18) {
        sp[i * 3 + 2] = -120
        sp[i * 3] = (Math.random() - 0.5) * 24
      }
      sp[i * 3 + 1] += Math.sin(elapsed * 1.4 + this.sparklePhases[i]) * dt * 0.08
    }
    this.sparkles.geometry.attributes.position.needsUpdate = true

    // confetti
    const pos = this.confettiPositions
    const vel = this.confettiVelocities
    for (let i = 0; i < this.confettiCount; i++) {
      if (this.confettiLife[i] > 0) {
        this.confettiLife[i] -= dt
        vel[i * 3 + 1] -= dt * 3.8
        vel[i * 3] *= 0.995
        vel[i * 3 + 2] *= 0.995
        pos[i * 3] += vel[i * 3] * dt
        pos[i * 3 + 1] += vel[i * 3 + 1] * dt
        pos[i * 3 + 2] += vel[i * 3 + 2] * dt
        if (pos[i * 3 + 1] < -0.2) this.confettiLife[i] = 0
      } else {
        pos[i * 3 + 1] = -20
      }
    }
    this.confetti.geometry.attributes.position.needsUpdate = true

    // ambient light pulse
    this.playerSpot.intensity = 27 + beatPulse * 6
    this.pinkPoint.intensity = 14 + beatPulse * 4
    this.audienceGlow.intensity = 7 + beatPulse * 2
  }
}

// ------------------------------------------------------------
// Obstacles & collectibles
// ------------------------------------------------------------

const boxMat = new THREE.MeshPhysicalMaterial({
  color: '#2a0d31',
  roughness: 0.26,
  metalness: 0.45,
  clearcoat: 0.8,
  clearcoatRoughness: 0.18,
})
const boxTopMat = new THREE.MeshBasicMaterial({ color: '#ff3f98', toneMapped: false })
const crateLightMat = new THREE.MeshBasicMaterial({ color: '#ffe36e', toneMapped: false })
const hurdlePostMat = new THREE.MeshStandardMaterial({ color: '#17101e', roughness: 0.3, metalness: 0.72 })
const hurdleNeonMat = new THREE.MeshBasicMaterial({ color: '#ff3f98', toneMapped: false })
const starMat = new THREE.MeshStandardMaterial({
  color: '#ffe36e',
  emissive: '#ffb52e',
  emissiveIntensity: 1.4,
  roughness: 0.2,
  metalness: 0.5,
})
const starHeartMat = new THREE.MeshBasicMaterial({ color: '#ffe9a2', toneMapped: false })

export function makeStar(radius, mat, depth) {
  const shape = new THREE.Shape()
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2 - Math.PI / 2
    const r = i % 2 === 0 ? radius : radius * 0.46
    if (i === 0) shape.moveTo(Math.cos(angle) * r, Math.sin(angle) * r)
    else shape.lineTo(Math.cos(angle) * r, Math.sin(angle) * r)
  }
  shape.closePath()
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: depth * 0.2,
    bevelThickness: depth * 0.2,
  })
  geo.center()
  return new THREE.Mesh(geo, mat)
}

export function createCrate() {
  const group = new THREE.Group()
  const body = new THREE.Mesh(new RoundedBoxGeometry(0.92, 0.66, 0.72, 3, 0.07), boxMat)
  body.position.y = 0.36
  group.add(body)
  const top = new THREE.Mesh(new RoundedBoxGeometry(0.77, 0.045, 0.58, 2, 0.02), boxTopMat)
  top.position.y = 0.71
  group.add(top)
  for (const side of [-1, 1]) {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.44, 0.045), crateLightMat)
    strip.position.set(side * 0.47, 0.39, 0.37)
    group.add(strip)
  }
  const star = makeStar(0.13, starHeartMat, 0.03)
  star.position.set(0, 0.38, 0.375)
  group.add(star)
  // little hover marker, readable at speed
  const marker = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.1, 0),
    new THREE.MeshBasicMaterial({ color: '#ffe36e', toneMapped: false }),
  )
  marker.position.y = 1.1
  marker.userData.marker = true
  group.add(marker)
  return group
}

export function createHurdle() {
  const group = new THREE.Group()
  for (const side of [-1, 1]) {
    const post = new THREE.Mesh(new RoundedBoxGeometry(0.11, 0.72, 0.11, 2, 0.03), hurdlePostMat)
    post.position.set(side * 2.2, 0.36, 0)
    group.add(post)
    const foot = new THREE.Mesh(new RoundedBoxGeometry(0.45, 0.08, 0.3, 2, 0.02), hurdlePostMat)
    foot.position.set(side * 2.2, 0.04, 0)
    group.add(foot)
  }
  const bar = new THREE.Mesh(new THREE.BoxGeometry(4.35, 0.1, 0.1), hurdleNeonMat)
  bar.position.y = 0.62
  group.add(bar)
  const bar2 = new THREE.Mesh(new THREE.BoxGeometry(4.35, 0.035, 0.035), boxTopMat)
  bar2.position.set(0, 0.5, 0.02)
  group.add(bar2)
  for (const side of [-1, 1]) {
    const light = new THREE.Mesh(new THREE.OctahedronGeometry(0.065, 0), crateLightMat)
    light.position.set(side * 2.2, 0.85, 0)
    group.add(light)
  }
  return group
}

export function createCollectible(big = false) {
  const group = new THREE.Group()
  const star = makeStar(big ? 0.34 : 0.22, starMat, 0.09)
  star.rotation.x = 0.22
  group.add(star)
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(big ? 0.45 : 0.32, 0.01, 4, 28),
    new THREE.MeshBasicMaterial({
      color: '#ffe36e',
      transparent: true,
      opacity: 0.55,
      toneMapped: false,
      depthWrite: false,
    }),
  )
  ring.rotation.x = Math.PI / 2
  group.add(ring)
  const glow = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: makeGlowTexture(96, 'rgba(255,226,115,0.85)', 'rgba(255,226,115,0)'),
      color: '#ffe36e',
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    }),
  )
  glow.scale.set(1.3, 1.3, 1)
  group.add(glow)
  group.userData.spin = { ring, star, glow }
  return group
}

export const ZONES = PALETTES.map((p, index) => ({
  index,
  name: p.name,
  at: [0, 260, 620, 1000][index],
  palette: p,
}))
