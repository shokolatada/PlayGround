import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

// ------------------------------------------------------------
// FEMBOYS — cast, clothes and rigs
// Every icon is built from primitives so the whole show travels
// in a single tiny bundle.
// ------------------------------------------------------------

export const LOOKS = {
  mika: {
    id: 'mika',
    name: 'MIKA',
    role: 'THE DAYDREAM',
    look: 'CANDY FLASH',
    color: '#ff4f9d',
    accent: '#ffe36e',
    skin: '#d78c66',
    blush: '#f35b82',
    hair: '#29101d',
    hairHi: '#ff7fba',
    eye: '#2a0b1b',
    top: '#ff4f9d',
    top2: '#fff1e8',
    bottom: '#fff1e8',
    boot: '#fff1e8',
    sole: '#2b0922',
    metal: '#ffd86f',
    title: 'You are the moment.',
    style: 'skirt',
    hairStyle: 'buns',
  },
  jules: {
    id: 'jules',
    name: 'JULES',
    role: 'THE WILDCARD',
    look: 'AQUA HOUR',
    color: '#57f4ef',
    accent: '#d9ff64',
    skin: '#8d553b',
    blush: '#d66b68',
    hair: '#d8d1c8',
    hairHi: '#fff8ee',
    eye: '#21201e',
    top: '#46dfe0',
    top2: '#162438',
    bottom: '#172033',
    boot: '#17131f',
    sole: '#c8ff51',
    metal: '#d8e6e8',
    title: 'Rules are a suggestion.',
    style: 'pants',
    hairStyle: 'wolf',
  },
  ren: {
    id: 'ren',
    name: 'REN',
    role: 'THE NIGHTBLOOM',
    look: 'NIGHTBLOOM',
    color: '#b78cff',
    accent: '#ff5ca8',
    skin: '#efc6ad',
    blush: '#e68595',
    hair: '#241a3e',
    hairHi: '#8d79c7',
    eye: '#171022',
    top: '#a986f2',
    top2: '#1a1029',
    bottom: '#23152f',
    boot: '#1a1024',
    sole: '#8d6bce',
    metal: '#e5d5ff',
    title: 'The afterparty is inside.',
    style: 'skirt',
    hairStyle: 'bob',
  },
}

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1)
  return t * t * (3 - 2 * t)
}

function material(color, roughness = 0.56, metalness = 0.02, extra = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness,
    ...extra,
  })
}

function shineMaterial(color, roughness = 0.22, clearcoat = 0.9) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness,
    metalness: 0.12,
    clearcoat,
    clearcoatRoughness: 0.22,
  })
}

function attach(parent, object, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
  object.position.set(...position)
  object.rotation.set(...rotation)
  object.scale.set(...scale)
  parent.add(object)
  return object
}

function add(parent, geometry, mat, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1]) {
  const mesh = new THREE.Mesh(geometry, mat)
  mesh.position.set(...position)
  mesh.rotation.set(...rotation)
  mesh.scale.set(...scale)
  parent.add(mesh)
  return mesh
}

function capsule(radius, length, mat, radialSegments = 10) {
  return new THREE.Mesh(new THREE.CapsuleGeometry(radius, length, 5, radialSegments), mat)
}

function ellipsoid(radius, mat, scale = [1, 1, 1], segments = 18) {
  return new THREE.Mesh(new THREE.SphereGeometry(radius, segments, Math.max(10, segments - 4)), mat)
}

function setEllipsoid(mesh, scale) {
  mesh.scale.set(...scale)
  return mesh
}

function hairMaterial(color) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.62,
    metalness: 0.04,
  })
}

function makeStar(radius, mat, depth = 0.06) {
  const shape = new THREE.Shape()
  const spikes = 5
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2
    const r = i % 2 === 0 ? radius : radius * 0.45
    const x = Math.cos(angle) * r
    const y = Math.sin(angle) * r
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSegments: 1,
    steps: 1,
    bevelSize: depth * 0.22,
    bevelThickness: depth * 0.22,
  })
  geo.center()
  return new THREE.Mesh(geo, mat)
}

export class Character {
  constructor(lookId = 'mika', { scale = 1 } = {}) {
    this.look = LOOKS[lookId] || LOOKS.mika
    this.root = new THREE.Group()
    this.root.scale.setScalar(scale)
    this.time = Math.random() * 10
    this.walkPhase = Math.random() * Math.PI * 2
    this.poseTimer = 0
    this.hitTimer = 0
    this.jumpBlend = 0
    this.menuBlend = 1
    this.anim = {
      hipsY: 1.3,
      hipsRotX: 0,
      hipsRotY: 0,
      hipsRotZ: 0,
      torsoRotX: 0,
      torsoRotY: 0,
      torsoRotZ: 0,
      headRotX: 0,
      headRotY: 0,
      headRotZ: 0,
      armLX: 0,
      armLY: 0,
      armLZ: 0,
      armRX: 0,
      armRY: 0,
      armRZ: 0,
      elbowLX: 0,
      elbowLZ: 0,
      elbowRX: 0,
      elbowRZ: 0,
      legLX: 0,
      legLZ: 0,
      legRX: 0,
      legRZ: 0,
      kneeLX: 0,
      kneeRX: 0,
      hairRot: 0,
    }
    this.build()
  }

  build() {
    const L = this.look
    const skin = material(L.skin, 0.68, 0.01)
    const skinSoft = material(L.skin, 0.8, 0.0)
    const top = material(L.top, 0.5, 0.04)
    const topShine = shineMaterial(L.top, 0.27)
    const top2 = material(L.top2, 0.62, 0.02)
    const bottom = material(L.bottom, 0.58, 0.02)
    const boot = shineMaterial(L.boot, 0.26, 0.75)
    const sole = material(L.sole, 0.48, 0.1)
    const metal = shineMaterial(L.metal, 0.16, 1)
    const hair = hairMaterial(L.hair)
    const hairHi = hairMaterial(L.hairHi)
    const eyeMat = material(L.eye, 0.3, 0.1)
    const white = new THREE.MeshBasicMaterial({ color: '#fff8f2' })
    const lipMat = material('#7c173d', 0.35, 0)
    const blushMat = new THREE.MeshBasicMaterial({
      color: L.blush,
      transparent: true,
      opacity: 0.35,
      depthWrite: false,
    })
    const shadowMat = new THREE.MeshBasicMaterial({
      color: '#060008',
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    })

    const root = this.root
    const body = new THREE.Group()
    root.add(body)
    this.body = body

    const hips = new THREE.Group()
    hips.position.y = 1.3
    body.add(hips)
    this.rig = { hips }

    // Contact shadow keeps every icon grounded on the glossy runway.
    const blob = add(
      root,
      new THREE.CircleGeometry(0.37, 30),
      shadowMat,
      [0, 0.012, 0],
      [-Math.PI / 2, 0, 0],
      [1, 1, 1],
    )
    blob.renderOrder = -1

    // ---------- torso ----------
    const torso = new THREE.Group()
    hips.add(torso)
    this.rig.torso = torso

    const torsoGeo = new THREE.LatheGeometry(
      [
        new THREE.Vector2(0.235, 0.0),
        new THREE.Vector2(0.255, 0.07),
        new THREE.Vector2(0.22, 0.23),
        new THREE.Vector2(0.255, 0.43),
        new THREE.Vector2(0.305, 0.58),
        new THREE.Vector2(0.285, 0.68),
        new THREE.Vector2(0.115, 0.73),
      ],
      20,
    )
    const torsoMesh = add(torso, torsoGeo, top2, [0, 0, 0], [0, 0, 0], [1, 1, 0.74])
    torsoMesh.castShadow = true

    // Wah! a little waist.
    add(torso, new THREE.TorusGeometry(0.225, 0.018, 6, 20), metal, [0, 0.1, 0], [Math.PI / 2, 0, 0], [1, 0.75, 1])

    if (L.style === 'pants') {
      // cropped tank + open mesh overshirt
      const tankGeo = new THREE.LatheGeometry(
        [
          new THREE.Vector2(0.24, 0.24),
          new THREE.Vector2(0.245, 0.4),
          new THREE.Vector2(0.27, 0.58),
          new THREE.Vector2(0.15, 0.7),
        ],
        16,
      )
      add(torso, tankGeo, material(L.top2, 0.7, 0), [0, 0, 0], [0, 0, 0], [1, 1, 0.76])

      for (const side of [-1, 1]) {
        add(
          torso,
          new THREE.BoxGeometry(0.095, 0.6, 0.045),
          new THREE.MeshStandardMaterial({
            color: L.top,
            roughness: 0.7,
            transparent: true,
            opacity: 0.42,
            depthWrite: false,
            side: THREE.DoubleSide,
          }),
          [side * 0.265, 0.46, 0.105],
          [0, 0, side * -0.08],
        )
        add(
          torso,
          new THREE.BoxGeometry(0.07, 0.06, 0.03),
          material(L.accent, 0.4, 0.1),
          [side * 0.265, 0.72, 0.115],
        )
      }
      // silver zipper
      add(torso, new THREE.BoxGeometry(0.012, 0.29, 0.012), metal, [0, 0.34, 0.225])
      // layered chain necklace
      for (const [r, y] of [[0.16, 0.62], [0.12, 0.57]]) {
        add(
          torso,
          new THREE.TorusGeometry(r, 0.011, 5, 22, Math.PI * 0.95),
          metal,
          [0, y, 0.06],
          [Math.PI / 2, 0, 0],
          [1, 0.72, 1],
        )
      }
      attach(torso, makeStar(0.042, metal, 0.025), [0, 0.59, 0.24])
    } else if (L.id === 'ren') {
      // corset vest over a sheer poet blouse
      const blouse = new THREE.LatheGeometry(
        [
          new THREE.Vector2(0.235, 0.14),
          new THREE.Vector2(0.25, 0.36),
          new THREE.Vector2(0.285, 0.57),
          new THREE.Vector2(0.15, 0.7),
        ],
        16,
      )
      add(torso, blouse, material('#f1e8f5', 0.74, 0), [0, 0, 0], [0, 0, 0], [1, 1, 0.74])

      const vestGeo = new THREE.LatheGeometry(
        [
          new THREE.Vector2(0.245, 0.17),
          new THREE.Vector2(0.25, 0.3),
          new THREE.Vector2(0.27, 0.47),
          new THREE.Vector2(0.29, 0.6),
          new THREE.Vector2(0.2, 0.66),
        ],
        18,
        Math.PI * 0.08,
        Math.PI * 0.84,
      )
      add(torso, vestGeo, topShine, [0, 0, 0], [0, 0, 0], [1, 1, 0.8])
      // corset boning and lacing
      for (const x of [-0.12, -0.06, 0.06, 0.12]) {
        add(torso, new THREE.BoxGeometry(0.008, 0.4, 0.012), metal, [x, 0.38, 0.205], [0, 0, x * 0.6])
      }
      for (let i = 0; i < 3; i++) {
        add(torso, new THREE.BoxGeometry(0.17 - i * 0.025, 0.008, 0.01), metal, [0, 0.25 + i * 0.11, 0.23], [0, 0, 0.15])
        add(torso, new THREE.BoxGeometry(0.17 - i * 0.025, 0.008, 0.01), metal, [0, 0.25 + i * 0.11, 0.23], [0, 0, -0.15])
      }
      // shoulder frills
      for (const side of [-1, 1]) {
        for (let i = 0; i < 3; i++) {
          add(
            torso,
            new THREE.SphereGeometry(0.085, 10, 8),
            material('#f1e8f5', 0.7, 0),
            [side * (0.22 + i * 0.035), 0.6 + i * 0.03, -0.03],
            [0, 0, side * i * 0.4],
            [1, 0.55, 0.9],
          )
        }
      }
    } else {
      // candy cropped varsity jacket
      const jacketGeo = new THREE.LatheGeometry(
        [
          new THREE.Vector2(0.255, 0.16),
          new THREE.Vector2(0.27, 0.28),
          new THREE.Vector2(0.29, 0.48),
          new THREE.Vector2(0.318, 0.62),
          new THREE.Vector2(0.3, 0.69),
        ],
        20,
      )
      add(torso, jacketGeo, top, [0, 0, 0], [0, 0, 0], [1, 1, 0.79])
      // cream ribbed hem and zip
      add(torso, new THREE.TorusGeometry(0.266, 0.022, 7, 22), top2, [0, 0.17, 0], [Math.PI / 2, 0, 0], [1, 0.78, 1])
      add(torso, new THREE.BoxGeometry(0.012, 0.5, 0.012), metal, [0, 0.4, 0.232])
      attach(torso, makeStar(0.048, metal, 0.02), [0.16, 0.43, 0.235])
      add(torso, new THREE.CircleGeometry(0.053, 18), top2, [0.16, 0.43, 0.247])
      attach(torso, makeStar(0.038, top, 0.015), [0.16, 0.43, 0.255])
      // collar
      for (const side of [-1, 1]) {
        add(
          torso,
          new THREE.BoxGeometry(0.17, 0.07, 0.035),
          top2,
          [side * 0.11, 0.69, 0.04],
          [0.05, 0, side * 0.34],
        )
      }
    }

    // neck
    add(torso, new THREE.CylinderGeometry(0.075, 0.086, 0.16, 12), skin, [0, 0.76, 0])
    // choker
    add(torso, new THREE.TorusGeometry(0.085, 0.012, 5, 18), metal, [0, 0.79, 0], [Math.PI / 2, 0, 0], [1, 0.82, 1])
    if (L.id === 'mika') {
      add(torso, new THREE.OctahedronGeometry(0.028, 0), metal, [0, 0.765, 0.093], [0, 0, 0])
    }

    // ---------- head ----------
    const head = new THREE.Group()
    head.position.y = 0.96
    torso.add(head)
    this.rig.head = head

    const skull = setEllipsoid(
      add(head, new THREE.SphereGeometry(0.3, 22, 18), skinSoft, [0, 0, 0]),
      [0.9, 1.02, 0.93],
    )
    skull.castShadow = true

    // ears
    for (const side of [-1, 1]) {
      setEllipsoid(
        add(head, new THREE.SphereGeometry(0.07, 12, 10), skinSoft, [side * 0.27, -0.005, 0]),
        [0.5, 1, 0.5],
      )
    }

    // eyes, brows, blush — simple graphic features read best at runway distance
    for (const side of [-1, 1]) {
      const eyeY = 0.035
      setEllipsoid(
        add(head, new THREE.SphereGeometry(0.06, 14, 12), eyeMat, [side * 0.105, eyeY, 0.253]),
        [1.02, 0.8, 0.28],
      )
      setEllipsoid(
        add(head, new THREE.SphereGeometry(0.016, 9, 8), white, [side * 0.09, eyeY + 0.021, 0.272]),
        [1, 1, 0.5],
      )
      // lashes / liner
      add(
        head,
        new THREE.BoxGeometry(0.075, 0.011, 0.008),
        eyeMat,
        [side * 0.108, eyeY + 0.052, 0.267],
        [0, 0, side * 0.08],
      )
      add(
        head,
        new THREE.BoxGeometry(0.068, 0.015, 0.01),
        hair,
        [side * 0.105, eyeY + 0.105, 0.252],
        [0, 0, side * -0.12],
      )
      // blush
      add(
        head,
        new THREE.CircleGeometry(0.056, 15),
        blushMat,
        [side * 0.177, -0.04, 0.242],
        [0, side * 0.24, 0],
        [1, 0.55, 1],
      )
    }
    // nose
    add(
      head,
      new THREE.ConeGeometry(0.032, 0.055, 8),
      skinSoft,
      [0, -0.012, 0.282],
      [Math.PI / 2, 0, 0],
      [1, 1, 0.72],
    )
    // lips
    setEllipsoid(
      add(head, new THREE.SphereGeometry(0.05, 14, 8), lipMat, [0, -0.105, 0.269]),
      [1.15, 0.38, 0.24],
    )
    add(head, new THREE.BoxGeometry(0.018, 0.006, 0.008), material('#3b0c20', 0.4), [0, -0.091, 0.286])
    // tiny highlight
    add(head, new THREE.SphereGeometry(0.012, 8, 6), white, [0.026, 0.035, 0.281]).material.transparent = true

    // earrings
    for (const side of [-1, 1]) {
      if (L.id === 'jules') {
        add(head, new THREE.TorusGeometry(0.055, 0.009, 5, 18), metal, [side * 0.295, -0.075, 0], [0, Math.PI / 2, 0])
      } else {
        attach(head, makeStar(0.055, metal, 0.018), [side * 0.295, -0.1, 0], [0, Math.PI / 2, 0])
      }
    }

    this.buildHair(head, hair, hairHi, metal)

    // ---------- arms ----------
    const makeArm = (side) => {
      const arm = new THREE.Group()
      arm.position.set(side * 0.32, 0.6, 0)
      torso.add(arm)
      const isBare = L.id === 'ren'
      const upperMat = isBare ? material('#f1e8f5', 0.74, 0) : top
      const upper = capsule(0.077, 0.24, upperMat, 10)
      upper.position.y = -0.17
      upper.castShadow = true
      arm.add(upper)

      // cuff / sleeve trim
      add(arm, new THREE.TorusGeometry(0.078, 0.014, 5, 14), isBare ? metal : top2, [0, -0.37, 0], [Math.PI / 2, 0, 0])

      const elbow = new THREE.Group()
      elbow.position.y = -0.38
      arm.add(elbow)
      const forearm = capsule(0.065, 0.22, isBare ? material('#f1e8f5', 0.7, 0) : skin, 10)
      forearm.position.y = -0.15
      forearm.castShadow = true
      elbow.add(forearm)
      const hand = setEllipsoid(
        add(elbow, new THREE.SphereGeometry(0.075, 12, 10), skin, [0, -0.33, 0]),
        [0.9, 1.05, 0.75],
      )
      // thumb
      add(elbow, new THREE.SphereGeometry(0.028, 8, 6), skin, [side * 0.05, -0.32, 0.045], [0, 0, 0], [1, 1.4, 0.8])

      if (L.id === 'jules') {
        // fingerless glove + wrist cuff
        add(elbow, new THREE.CylinderGeometry(0.07, 0.075, 0.1, 10), material('#111722', 0.5, 0.1), [0, -0.27, 0])
        add(elbow, new THREE.TorusGeometry(0.073, 0.012, 5, 14), metal, [0, -0.31, 0], [Math.PI / 2, 0, 0])
      }
      if (L.id === 'mika') {
        add(elbow, new THREE.TorusGeometry(0.068, 0.012, 5, 14), metal, [0, -0.27, 0], [Math.PI / 2, 0, 0])
      }
      if (L.id === 'ren') {
        // opera glove
        add(elbow, new THREE.CylinderGeometry(0.063, 0.068, 0.18, 10), material('#f1e8f5', 0.5, 0.02), [0, -0.21, 0])
      }
      hand.castShadow = true
      return { arm, elbow }
    }

    const left = makeArm(-1)
    const right = makeArm(1)
    this.rig.armL = left.arm
    this.rig.elbowL = left.elbow
    this.rig.armR = right.arm
    this.rig.elbowR = right.elbow

    // ---------- skirt / trousers ----------
    if (L.style === 'skirt') {
      const skirt = new THREE.Group()
      skirt.position.y = 0.02
      hips.add(skirt)
      this.rig.skirt = skirt
      const skirtMat = L.id === 'ren'
        ? new THREE.MeshStandardMaterial({
            color: L.bottom,
            roughness: 0.75,
            transparent: true,
            opacity: 0.92,
            side: THREE.DoubleSide,
          })
        : bottom
      const skirtGeo = new THREE.CylinderGeometry(0.24, 0.47, L.id === 'ren' ? 0.62 : 0.46, L.id === 'ren' ? 24 : 16, 1, true)
      const skirtMesh = add(skirt, skirtGeo, skirtMat, [0, -0.19, 0], [0, 0, 0], [1, 1, 0.86])
      skirtMesh.castShadow = true
      if (L.id === 'ren') {
        // layered tulle + a little bustle
        const layer = add(
          skirt,
          new THREE.CylinderGeometry(0.31, 0.55, 0.55, 22, 1, true),
          new THREE.MeshStandardMaterial({
            color: '#130b1e',
            roughness: 0.8,
            transparent: true,
            opacity: 0.62,
            side: THREE.DoubleSide,
          }),
          [0, -0.15, 0.015],
          [0, 0, 0],
          [1, 1, 0.92],
        )
        layer.renderOrder = 2
        add(skirt, new THREE.TorusGeometry(0.24, 0.023, 6, 20), metal, [0, 0.08, 0], [Math.PI / 2, 0, 0], [1, 0.84, 1])
        // bow at the back
        const bowMat = material(L.accent, 0.5, 0.05)
        add(skirt, new THREE.BoxGeometry(0.15, 0.06, 0.02), bowMat, [0.08, 0.03, -0.22], [0, 0.2, 0.4])
        add(skirt, new THREE.BoxGeometry(0.15, 0.06, 0.02), bowMat, [-0.08, 0.03, -0.22], [0, -0.2, -0.4])
        add(skirt, new THREE.SphereGeometry(0.045, 8, 6), bowMat, [0, 0.03, -0.23])
      } else {
        // pleat lines + hem
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2
          add(
            skirt,
            new THREE.BoxGeometry(0.015, 0.44, 0.012),
            top,
            [Math.sin(angle) * 0.35, -0.19, Math.cos(angle) * 0.3],
            [0, angle, 0],
          )
        }
        add(skirt, new THREE.TorusGeometry(0.465, 0.016, 5, 26), top, [0, -0.42, 0], [Math.PI / 2, 0, 0], [1, 0.86, 1])
        add(skirt, new THREE.TorusGeometry(0.248, 0.025, 6, 20), top2, [0, 0.055, 0], [Math.PI / 2, 0, 0], [1, 0.84, 1])
      }
    }

    // ---------- legs ----------
    const makeLeg = (side) => {
      const leg = new THREE.Group()
      leg.position.set(side * 0.145, -0.04, 0)
      hips.add(leg)
      const isPants = L.style === 'pants'
      const thighMat = isPants ? bottom : skinSoft
      const thigh = capsule(isPants ? 0.135 : 0.105, 0.35, thighMat, 10)
      thigh.position.y = -0.29
      thigh.castShadow = true
      leg.add(thigh)

      if (!isPants) {
        // thigh-high sock, a fashion staple
        add(
          leg,
          new THREE.CylinderGeometry(0.113, 0.096, 0.34, 12),
          material(L.id === 'mika' ? '#f5e4eb' : '#17101f', 0.75, 0.01),
          [0, -0.4, 0],
        )
        add(leg, new THREE.TorusGeometry(0.111, 0.012, 5, 14), L.id === 'mika' ? top : metal, [0, -0.23, 0], [Math.PI / 2, 0, 0])
      } else {
        // cargo pocket
        add(leg, new THREE.BoxGeometry(0.085, 0.11, 0.035), material(L.bottom, 0.7, 0.01), [side * 0.085, -0.36, 0.08])
        add(leg, new THREE.BoxGeometry(0.09, 0.016, 0.04), metal, [side * 0.085, -0.31, 0.086])
      }

      const knee = new THREE.Group()
      knee.position.y = -0.6
      leg.add(knee)
      const calfMat = isPants ? bottom : skinSoft
      const calf = capsule(isPants ? 0.11 : 0.085, 0.3, calfMat, 10)
      calf.position.y = -0.21
      calf.castShadow = true
      knee.add(calf)

      // boots
      const bootGroup = new THREE.Group()
      bootGroup.position.y = -0.49
      knee.add(bootGroup)
      const shaft = add(
        bootGroup,
        new THREE.CylinderGeometry(isPants ? 0.105 : 0.09, isPants ? 0.11 : 0.095, 0.28, 12),
        boot,
        [0, -0.04, 0],
      )
      shaft.castShadow = true
      add(bootGroup, new THREE.TorusGeometry(0.1, 0.011, 5, 15), metal, [0, 0.1, 0], [Math.PI / 2, 0, 0])
      add(bootGroup, new THREE.BoxGeometry(0.22, 0.17, 0.36), boot, [0, -0.285, 0.055])
      add(
        bootGroup,
        new RoundedBoxGeometry(0.245, 0.1, 0.4, 3, 0.035),
        sole,
        [0, -0.39, 0.055],
      )
      add(bootGroup, new THREE.BoxGeometry(0.2, 0.025, 0.06), metal, [0, -0.3, 0.235])
      return { leg, knee }
    }

    const leftLeg = makeLeg(-1)
    const rightLeg = makeLeg(1)
    this.rig.legL = leftLeg.leg
    this.rig.kneeL = leftLeg.knee
    this.rig.legR = rightLeg.leg
    this.rig.kneeR = rightLeg.knee

    // Keep root origin at the feet and set a sensible scale.
    root.traverse((obj) => {
      if (obj.isMesh) {
        obj.frustumCulled = true
      }
    })
  }

  buildHair(head, hair, hairHi, metal) {
    const style = this.look.hairStyle

    // skull cap
    const cap = add(
      head,
      new THREE.SphereGeometry(0.318, 22, 16, 0, Math.PI * 2, 0, Math.PI * 0.66),
      hair,
      [0, 0.047, -0.014],
      [0, 0, 0],
      [0.96, 1.02, 0.98],
    )
    cap.castShadow = true

    // back mass
    setEllipsoid(
      add(head, new THREE.SphereGeometry(0.305, 20, 16), hair, [0, 0.015, -0.085]),
      [0.95, 1.05, 0.72],
    )

    if (style === 'buns') {
      for (const side of [-1, 1]) {
        setEllipsoid(
          add(head, new THREE.SphereGeometry(0.145, 16, 12), hair, [side * 0.245, 0.31, -0.035]),
          [1, 1, 1],
        )
        add(head, new THREE.TorusGeometry(0.078, 0.018, 6, 14), hairHi, [side * 0.235, 0.25, -0.025], [0.2, side * 0.3, 0])
      }
      // swoopy fringe
      for (let i = 0; i < 6; i++) {
        const ang = -0.65 + i * 0.26
        setEllipsoid(
          add(
            head,
            new THREE.SphereGeometry(0.085, 12, 10),
            i % 2 ? hairHi : hair,
            [Math.sin(ang) * 0.23, 0.18 - Math.abs(ang) * 0.055, 0.218],
            [0, 0, -ang * 0.4],
          ),
          [0.95, 1.2, 0.55],
        )
      }
      // long face-framing pieces
      for (const side of [-1, 1]) {
        setEllipsoid(
          add(head, new THREE.SphereGeometry(0.095, 10, 10), hair, [side * 0.26, -0.12, 0.075], [0, 0, side * 0.12]),
          [0.65, 1.55, 0.65],
        )
        add(head, new THREE.BoxGeometry(0.025, 0.21, 0.012), hairHi, [side * 0.305, -0.11, 0.11], [0, 0, side * 0.1])
      }
      // tiny glitter clips
      for (const side of [-1, 1]) {
        attach(head, makeStar(0.035, metal, 0.012), [side * 0.33, 0.19, 0.12])
      }
    } else if (style === 'wolf') {
      // choppy wolf cut
      for (let i = 0; i < 7; i++) {
        const angle = -Math.PI * 0.78 + (i / 6) * Math.PI * 1.56
        const back = angle < -0.4 || angle > 0.4
        const len = back ? 0.34 : 0.24
        const mesh = add(
          head,
          new THREE.ConeGeometry(0.085, len, 6),
          i % 3 === 0 ? hairHi : hair,
          [Math.sin(angle) * 0.255, 0.06 - (back ? 0.08 : 0), Math.cos(angle) * 0.23 - 0.05],
          [0.3, angle, (angle / Math.PI) * 0.4],
        )
        mesh.scale.z = 0.6
      }
      // swept fringe
      for (let i = 0; i < 5; i++) {
        const t = i / 4
        setEllipsoid(
          add(
            head,
            new THREE.SphereGeometry(0.08, 12, 10),
            i === 3 ? hairHi : hair,
            [-0.2 + t * 0.42, 0.16 - t * 0.02, 0.205],
            [0, 0.2, -0.3 + t * 0.4],
          ),
          [1.1, 1.3 - t * 0.25, 0.48],
        )
      }
      // undercut panel
      add(head, new THREE.BoxGeometry(0.055, 0.17, 0.02), hairHi, [0.29, -0.015, 0.04], [0, 0.7, 0.18])
      // sunglasses on head
      this.makeShades(head, metal)
    } else {
      // sculpted bob + micro fringe
      add(head, new THREE.SphereGeometry(0.325, 20, 16), hair, [0, -0.015, -0.03], [0, 0, 0], [1, 1.1, 0.96])
      for (const side of [-1, 1]) {
        setEllipsoid(
          add(head, new THREE.SphereGeometry(0.13, 14, 12), hair, [side * 0.235, -0.15, 0.03], [0, 0, side * 0.12]),
          [0.8, 1.5, 0.75],
        )
        add(head, new THREE.BoxGeometry(0.03, 0.31, 0.012), hairHi, [side * 0.286, -0.13, 0.105], [0, 0, side * 0.15])
      }
      for (let i = 0; i < 7; i++) {
        const t = i / 6
        setEllipsoid(
          add(
            head,
            new THREE.SphereGeometry(0.075, 12, 9),
            i % 2 ? hairHi : hair,
            [-0.24 + t * 0.48, 0.15 - Math.abs(t - 0.5) * 0.03, 0.235],
            [0, 0, -0.2 + t * 0.4],
          ),
          [0.85, 1.1, 0.42],
        )
      }
      // tiny tiara
      for (let i = -2; i <= 2; i++) {
        const h = i === 0 ? 0.13 : 0.075
        add(head, new THREE.ConeGeometry(0.022, h, 5), metal, [i * 0.055, 0.34, 0.13], [0, 0, 0])
      }
      add(head, new THREE.TorusGeometry(0.17, 0.009, 4, 20, Math.PI), metal, [0, 0.27, 0.12], [0, 0, 0], [1, 0.5, 1])
    }
  }

  makeShades(head, metal) {
    const shadeMat = shineMaterial('#111520', 0.14, 1)
    const group = new THREE.Group()
    group.position.set(0, 0.21, 0.12)
    group.rotation.x = -0.14
    for (const side of [-1, 1]) {
      add(group, new THREE.BoxGeometry(0.13, 0.07, 0.025), shadeMat, [side * 0.075, 0, 0], [0, side * 0.16, 0])
      add(group, new THREE.BoxGeometry(0.095, 0.018, 0.012), metal, [side * 0.075, 0.02, 0.017])
    }
    add(group, new THREE.BoxGeometry(0.035, 0.02, 0.015), shadeMat, [0, 0, 0])
    head.add(group)
  }

  setMenu(isMenu) {
    this.menu = isMenu
  }

  triggerPose() {
    this.poseTimer = 1.2
  }

  triggerHit() {
    this.hitTimer = 0.55
  }

  resetRun() {
    this.poseTimer = 0
    this.hitTimer = 0
    this.jumpBlend = 0
    this.walkPhase = Math.random() * Math.PI * 2
  }

  update(dt, mode = 'run', opts = {}) {
    this.time += dt
    const t = this.time
    const rig = this.rig
    const a = this.anim
    const damage = clamp(this.hitTimer / 0.55, 0, 1)
    const pose = clamp(this.poseTimer / 1.2, 0, 1)
    this.poseTimer = Math.max(0, this.poseTimer - dt)
    this.hitTimer = Math.max(0, this.hitTimer - dt)
    const jump = opts.jumpY || 0
    this.jumpBlend += (clamp(jump / 0.9, 0, 1) - this.jumpBlend) * Math.min(1, dt * 12)
    this.menuBlend += ((mode === 'menu' ? 1 : 0) - this.menuBlend) * Math.min(1, dt * 5)

    const speed = opts.speed || 1
    if (mode === 'run' || mode === 'pose') {
      this.walkPhase += dt * 8.2 * clamp(0.75 + speed * 0.08, 0.8, 1.65)
    } else if (mode === 'menu') {
      this.walkPhase += dt * 1.9
    }

    // Defaults
    let target = {
      hipsY: 1.3,
      hipsRotX: 0,
      hipsRotY: 0,
      hipsRotZ: Math.sin(this.walkPhase * 0.5) * 0.02,
      torsoRotX: 0.035,
      torsoRotY: Math.sin(this.walkPhase * 0.5) * 0.055,
      torsoRotZ: Math.sin(this.walkPhase * 0.5) * 0.025,
      headRotX: -0.01,
      headRotY: -Math.sin(this.walkPhase * 0.5) * 0.05,
      headRotZ: 0,
      armLX: 0,
      armLY: 0,
      armLZ: -0.1,
      armRX: 0,
      armRY: 0,
      armRZ: 0.1,
      elbowLX: -0.14,
      elbowLZ: 0,
      elbowRX: -0.14,
      elbowRZ: 0,
      legLX: 0,
      legLZ: 0,
      legRX: 0,
      legRZ: 0,
      kneeLX: 0.04,
      kneeRX: 0.04,
      hairRot: 0,
    }

    if (mode === 'run' || mode === 'pose') {
      const swing = Math.sin(this.walkPhase)
      const swing2 = Math.sin(this.walkPhase + Math.PI)
      const bounce = Math.abs(Math.sin(this.walkPhase)) * 0.028
      target.hipsY = 1.3 + bounce
      target.hipsRotY = swing * 0.12
      target.hipsRotZ = Math.sin(this.walkPhase * 0.5) * 0.028
      target.torsoRotX = 0.075
      target.torsoRotY = -swing * 0.1
      target.torsoRotZ = -swing * 0.03
      target.headRotX = -0.055
      target.headRotY = swing * 0.035
      target.legLX = swing * 0.72
      target.legRX = swing2 * 0.72
      target.kneeLX = 0.06 + Math.max(0, -swing) * 0.7
      target.kneeRX = 0.06 + Math.max(0, -swing2) * 0.7
      target.legLZ = 0.028
      target.legRZ = -0.028
      target.armLX = -swing * 0.55
      target.armRX = -swing2 * 0.55
      target.armLZ = -0.13
      target.armRZ = 0.13
      target.elbowLX = -0.28 - Math.max(0, swing) * 0.18
      target.elbowRX = -0.28 - Math.max(0, swing2) * 0.18
      target.hairRot = -swing * 0.03
    }

    if (mode === 'menu') {
      const sway = Math.sin(t * 0.85)
      const breathe = Math.sin(t * 1.7)
      target.hipsRotZ = sway * 0.025 + 0.018
      target.hipsY = 1.3 + breathe * 0.004
      target.torsoRotX = 0.02
      target.torsoRotY = Math.sin(t * 0.38) * 0.12
      target.torsoRotZ = sway * 0.02
      target.headRotY = Math.sin(t * 0.38) * 0.22
      target.headRotZ = -sway * 0.05
      target.headRotX = -0.02
      target.legLX = -0.04
      target.legRX = 0.09
      target.kneeLX = 0.06
      target.kneeRX = 0.12
      target.legLZ = 0.035
      target.legRZ = -0.035
      target.armLX = 0.05 + breathe * 0.02
      target.armLZ = -0.16
      target.armRX = -0.04
      target.armRZ = 0.2
      target.elbowLX = -0.25
      target.elbowRX = -0.13

      // Every few seconds, give the camera a little pose.
      const cycle = (t + 1.2) % 8
      if (cycle > 4.3 && cycle < 7.2) {
        const p = smoothstep(4.3, 4.8, cycle) * (1 - smoothstep(6.7, 7.2, cycle))
        target.armLZ = -0.16 - p * 2.3
        target.armLX = 0.05 + p * 0.18
        target.elbowLX = -0.25 - p * 0.22
        target.armRZ = 0.2 + p * 0.16
        target.armRX = -0.04 - p * 0.1
        target.headRotZ += p * 0.08
        target.hipsRotZ += p * 0.05
        target.legRX += p * 0.12
      }
    }

    if (jump > 0.01) {
      const air = this.jumpBlend
      target.hipsY += air * 0.06
      target.torsoRotX = 0.04 + air * 0.16
      target.legLX = -0.25 - air * 0.55
      target.legRX = 0.35 + air * 0.4
      target.kneeLX = 0.65 + air * 0.7
      target.kneeRX = 0.28 + air * 0.28
      target.armLZ = -0.18 - air * 1.1
      target.armRZ = 0.18 + air * 1.1
      target.armLX = -air * 0.25
      target.armRX = -air * 0.1
      target.elbowLX = -0.1
      target.elbowRX = -0.1
      target.headRotX = -0.06
    }

    // Pose on the beat: show-stopping silhouette.
    if (pose > 0) {
      const p = Math.sin(pose * Math.PI) * (pose > 0.82 ? 0.7 : 1)
      target.armRZ += p * 1.95
      target.armRX += p * 0.32
      target.elbowRZ = p * 0.0
      target.elbowRX = -0.18 - p * 0.1
      target.armLZ -= p * 0.38
      target.armLX = 0.18 * p
      target.elbowLX = -0.5 - p * 0.9
      target.elbowLZ = p * 0.8
      target.hipsRotZ += p * 0.1
      target.hipsRotY -= p * 0.14
      target.torsoRotZ -= p * 0.12
      target.torsoRotX -= p * 0.05
      target.headRotZ += p * 0.14
      target.headRotY += p * 0.1
      target.legLX = -0.22 * p
      target.kneeLX = 0.25 + p * 0.35
      target.legRX = 0.08 * p
      target.kneeRX = 0.1
      target.legLZ = 0.09 * p
    }

    if (damage > 0) {
      const d = Math.sin(damage * Math.PI)
      target.torsoRotX -= d * 0.45
      target.headRotX -= d * 0.22
      target.armLZ -= d * 0.8
      target.armRZ += d * 0.9
      target.armLX -= d * 0.45
      target.armRX -= d * 0.45
      target.hipsRotZ += d * 0.16
      target.legLX -= d * 0.2
      target.legRX += d * 0.2
    }

    // Apply damped transforms.
    const damping = Math.min(1, dt * (mode === 'menu' ? 7 : 15))
    for (const key of Object.keys(target)) {
      a[key] += (target[key] - a[key]) * damping
    }

    rig.hips.position.y = a.hipsY
    rig.hips.rotation.set(a.hipsRotX, a.hipsRotY, a.hipsRotZ)
    rig.torso.rotation.set(a.torsoRotX, a.torsoRotY, a.torsoRotZ)
    rig.head.rotation.set(a.headRotX, a.headRotY, a.headRotZ)
    rig.armL.rotation.set(a.armLX, a.armLY, a.armLZ)
    rig.armR.rotation.set(a.armRX, a.armRY, a.armRZ)
    rig.elbowL.rotation.set(a.elbowLX, -0.04, a.elbowLZ)
    rig.elbowR.rotation.set(a.elbowRX, 0.04, a.elbowRZ)
    rig.legL.rotation.set(a.legLX, 0.02, a.legLZ)
    rig.legR.rotation.set(a.legRX, -0.02, a.legRZ)
    rig.kneeL.rotation.x = a.kneeLX
    rig.kneeR.rotation.x = a.kneeRX

    if (rig.skirt) {
      rig.skirt.rotation.z = -a.hipsRotZ * 0.4
      rig.skirt.rotation.x = -a.legLX * 0.035
    }
  }

  dispose() {
    this.root.traverse((obj) => {
      if (obj.isMesh) {
        obj.geometry?.dispose()
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
        else obj.material?.dispose()
      }
    })
    this.root.removeFromParent()
  }
}
