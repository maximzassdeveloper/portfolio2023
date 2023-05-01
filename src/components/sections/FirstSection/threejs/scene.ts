import {
  Color,
  DefaultLoadingManager,
  DoubleSide,
  LoadingManager,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Vector3,
} from 'three'
import { initScene } from './initScene'
import { initSphere } from './initSphere'
import { gsap, Power1 } from 'gsap'
import { CustomEase } from 'gsap/dist/CustomEase'
import { createNoise3D } from 'simplex-noise'

export function initThreeJsScene(canvas: HTMLCanvasElement) {
  const [scene, renderer, camera] = initScene(canvas)

  const [sphere, uniforms] = initSphere()
  scene.add(sphere)

  const sphereVerticesArray: THREE.Vector3[] = []
  const sphereVerticesNormArray: THREE.Vector3[] = []

  // @ts-ignore
  for (let i = 0; i < sphere.geometry.vertices.length; i += 1) {
    // @ts-ignore
    const vertex = sphere.geometry.vertices[i]
    const vec = new Vector3(vertex.x, vertex.y, vertex.z)
    sphereVerticesArray.push(vec)

    const mag = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z)
    const norm = new Vector3(vertex.x / mag, vertex.y / mag, vertex.z / mag)
    sphereVerticesNormArray.push(norm)
  }

  let startTime = Date.now()
  let time = 1
  let way = 0
  let noiseAmount = 1.2

  let stop = false
  let frameCount = 0
  let fps, fpsInterval: number, now, then: number, elapsed

  // initialize the timer variables and start the animation

  function startAnimating(fps: number) {
    fpsInterval = 1000 / fps
    then = Date.now()
    startTime = then
    animate()
  }

  let car_anim = gsap.timeline()

  // Slide 2

  // car_anim.to(sphere.position, {
  //   x: -3,
  //   scrollTrigger: {
  //     trigger: '#textBlock1',
  //     scrub: true,
  //     start: 'top bottom',
  //     end: 'top top',
  //     markers: true,
  //   },
  //   ease: Power1.easeInOut,
  // })
  // car_anim.to(sphere.material, {
  //   opacity: 0.4,
  //   scrollTrigger: {
  //     trigger: '#textBlock1',
  //     scrub: true,
  //     start: 'top bottom',
  //     end: 'top top',
  //     markers: true,
  //   },
  //   ease: Power1.easeInOut,
  // })
  // car_anim.to(sphere.scale, {
  //   x: 3,
  //   y: 3,
  //   z: 3,
  //   scrollTrigger: {
  //     trigger: '#textBlock1',
  //     scrub: true,
  //     start: 'top bottom',
  //     end: 'top top',
  //     markers: true,
  //   },
  //   ease: Power1.easeInOut,
  // })
  car_anim.to(sphere.rotation, {
    x: -1,
    y: 1,
    scrollTrigger: {
      trigger: '#textBlock1',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
    },
    // onStart: () => sphereToPlane(),
    ease: Power1.easeInOut,
  })

  // car_anim.to(sphere.position, {
  //   x: 0,
  //   immediateRender: false,
  //   scrollTrigger: {
  //     trigger: '#skills',
  //     scrub: true,
  //     start: 'top bottom',
  //     end: 'top top',
  //     // markers: true,
  //   },
  //   ease: Power1.easeInOut,
  // })
  // car_anim.to(sphere.rotation, {
  //   z: 2,
  //   immediateRender: false,
  //   scrollTrigger: {
  //     trigger: '#skills',
  //     scrub: true,
  //     start: 'top bottom',
  //     end: 'top top',
  //     // markers: true,
  //   },
  //   ease: Power1.easeInOut,
  // })
  car_anim.to(sphere.rotation, {
    x: 1,
    z: 0,
    immediateRender: false,
    scrollTrigger: {
      trigger: '#experience',
      start: 'top bottom',
      end: '700px center',
      scrub: true,
    },
    ease: Power1.easeInOut,
  })

  car_anim.to(sphere.scale, {
    x: 0,
    z: 0,
    y: 0,
    scrollTrigger: {
      trigger: '#works',
      start: 'top bottom',
      end: 'top 40%',
      scrub: true,
    },
    // onStart: () => sphereToPlane(),
    ease: Power1.easeInOut,
  })

  car_anim.to(sphere.rotation, {
    x: 0,
    z: -2,
    y: 0,
    immediateRender: false,
    scrollTrigger: {
      trigger: '#works',
      start: 'top bottom',
      end: 'top 40%',
      scrub: true,
    },
    // onStart: () => sphereToPlane(),
    ease: Power1.easeInOut,
  })
  // car_anim.to(
  //   camera.position,
  //   {
  //     x: -0.1,
  //     easing: Power1.easeInOut,
  //     scrollTrigger: {
  //       trigger: '#slide2',
  //       scrub: 1,
  //       start: 'right right',
  //     },
  //   },
  //   0
  // )

  function sphereToPlane() {
    const width = 100
    // @ts-ignore
    for (let i = 0; i < sphere.geometry.vertices.length; i++) {
      // @ts-ignore
      const vertex = sphere.geometry.vertices[i]

      // vertex.x = Math.sin(vertex.x)
      // vertex.y = vertex.y
      // vertex.z = vertex.z
      sphereVerticesArray[i] = new Vector3(
        Math.sin(vertex.x),
        sphereVerticesArray[i].y,
        sphereVerticesArray[i].z
      )
      // if (i % 3 === 0) {
      //   // @ts-ignore
      //   sphere.geometry.vertices[i] = { x: 1, y: i, z: 1 }
      // } else {
      //   // @ts-ignore
      //   sphere.geometry.vertices[i] = { x: 1, y: 1, z: 1 }
      // }
    }
  }

  const noise3D = createNoise3D()
  console.log(noise3D(1, 3, 4))
  console.log(noise3D)

  const cashed: Record<number, number> = {}
  let countCashed = 0
  type VertexMapKey = { vertex: Vector3; time: number }
  const vertexMap = new Map<VertexMapKey, number>()

  function animate() {
    // const currentTime = Date.now()
    // const delta = currentTime - startTime
    // startTime = currentTime

    // uniforms.time.value += delta / 1000
    // time += 0.02
    if (time > 10) {
      way = 1
    }
    if (time <= 0) {
      way = 0
    }
    if (way === 0) {
      time += 0.014
    } else {
      time -= 0.014
    }

    // sphere.rotation.x += 0.002
    // sphere.rotation.y += 0.0005
    // sphere.rotation.z += 0.002

    //@ts-ignore

    for (var i = 0; i < sphere.geometry.vertices.length; i += 1) {
      // @ts-ignore
      const vertex = sphere.geometry.vertices[i]
      vertex.normalize()

      const mapKey: VertexMapKey = { vertex, time }

      // const cashedValue = vertexMap.get(mapKey)

      let value = undefined
      if (value === undefined) {
        value =
          0.75 *
          perlin(
            noiseAmount * vertex.x + time,
            noiseAmount * vertex.y + time,
            noiseAmount * vertex.z + time
          )
        // vertexMap.set(mapKey, value)
      }

      vertex.x = sphereVerticesArray[i].x + sphereVerticesNormArray[i].x * value * noiseAmount
      vertex.y = sphereVerticesArray[i].y + sphereVerticesNormArray[i].y * value * noiseAmount
      vertex.z = sphereVerticesArray[i].z + sphereVerticesNormArray[i].z * value * noiseAmount
    }

    // @ts-ignore
    sphere.geometry.computeFaceNormals()
    // // @ts-ignore
    sphere.geometry.computeVertexNormals()
    // @ts-ignore
    sphere.geometry.verticesNeedUpdate = true

    renderer.render(scene, camera)
    requestAnimationFrame(animate)

    // now = Date.now()
    // elapsed = now - then

    // // if enough time has elapsed, draw the next frame

    // if (elapsed > fpsInterval) {
    //   // Get ready for next frame by setting then=now, but also adjust for your
    //   // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
    //   then = now - (elapsed % fpsInterval)

    //   // Put your drawing code here
    // countCashed++

    // console.log(vertexMap.size)
    // if (countCashed < 2) {
    //   //@ts-ignore
    //   console.log(sphere.geometry.vertices.length)
    //   console.log(vertexMap.size)
    //   console.log(vertexMap)
    // }

    // }
  }

  requestAnimationFrame(animate)
  // startAnimating(60)
}

var p = new Array(512)

var permutation = [
  151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142,
  8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203,
  117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
  71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92,
  41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208,
  89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
  226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58,
  17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155,
  167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
  246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
  239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150,
  254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
]

for (var i = 0; i < 256; i++) p[256 + i] = p[i] = permutation[i]

export default function perlin(x: number, y: number, z: number) {
  var X = Math.floor(x) & 255, // FIND UNIT CUBE THAT
    Y = Math.floor(y) & 255, // CONTAINS POINT.
    Z = Math.floor(z) & 255
  x -= Math.floor(x) // FIND RELATIVE X,Y,Z
  y -= Math.floor(y) // OF POINT IN CUBE.
  z -= Math.floor(z)
  var u = fade(x), // COMPUTE FADE CURVES
    v = fade(y), // FOR EACH OF X,Y,Z.
    w = fade(z)
  var A = p[X] + Y,
    AA = p[A] + Z,
    AB = p[A + 1] + Z, // HASH COORDINATES OF
    B = p[X + 1] + Y,
    BA = p[B] + Z,
    BB = p[B + 1] + Z // THE 8 CUBE CORNERS,

  return scale(
    lerp(
      w,
      lerp(
        v,
        lerp(
          u,
          grad(p[AA], x, y, z), // AND ADD
          grad(p[BA], x - 1, y, z)
        ), // BLENDED
        lerp(
          u,
          grad(p[AB], x, y - 1, z), // RESULTS
          grad(p[BB], x - 1, y - 1, z)
        )
      ), // FROM  8
      lerp(
        v,
        lerp(
          u,
          grad(p[AA + 1], x, y, z - 1), // CORNERS
          grad(p[BA + 1], x - 1, y, z - 1)
        ), // OF CUBE
        lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1))
      )
    )
  )
}

function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10)
}

function lerp(t: number, a: number, b: number) {
  return a + t * (b - a)
}

function grad(hash: number, x: number, y: number, z: number) {
  var h = hash & 15 // CONVERT LO 4 BITS OF HASH CODE
  var u = h < 8 ? x : y, // INTO 12 GRADIENT DIRECTIONS.
    v = h < 4 ? y : h == 12 || h == 14 ? x : z
  return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v)
}

function scale(n: number) {
  return n
}

// function Grad(x: number, y: number, z: number) {
//   // @ts-ignore
//   this.x = x
//   // @ts-ignore
//   this.y = y
//   // @ts-ignore
//   this.z = z
// }

// Grad.prototype.dot2 = function (x: number, y: number) {
//   return this.x * x + this.y * y
// }

// Grad.prototype.dot3 = function (x: number, y: number, z: number) {
//   return this.x * x + this.y * y + this.z * z
// }

// var grad3 = [
//   // @ts-ignore
//   new Grad(1, 1, 0),
//   // @ts-ignore
//   new Grad(-1, 1, 0),
//   // @ts-ignore
//   new Grad(1, -1, 0),
//   // @ts-ignore
//   new Grad(-1, -1, 0),
//   // @ts-ignore
//   new Grad(1, 0, 1),
//   // @ts-ignore
//   new Grad(-1, 0, 1),
//   // @ts-ignore
//   new Grad(1, 0, -1),
//   // @ts-ignore
//   new Grad(-1, 0, -1),
//   // @ts-ignore
//   new Grad(0, 1, 1),
//   // @ts-ignore
//   new Grad(0, -1, 1),
//   // @ts-ignore
//   new Grad(0, 1, -1),
//   // @ts-ignore
//   new Grad(0, -1, -1),
// ]

// var p = [
//   151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142,
//   8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203,
//   117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
//   71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92,
//   41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208,
//   89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
//   226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58,
//   17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155,
//   167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
//   246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
//   239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150,
//   254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
// ]
// var perm = new Array(512)
// var gradP = new Array(512)

// // This isn't a very good seeding function, but it works ok. It supports 2^16
// // different seed values. Write something better if you need more seeds.
// function seed(seed: any) {
//   if (seed > 0 && seed < 1) {
//     // Scale the seed out
//     seed *= 65536
//   }

//   seed = Math.floor(seed)
//   if (seed < 256) {
//     seed |= seed << 8
//   }

//   for (var i = 0; i < 256; i++) {
//     var v
//     if (i & 1) {
//       v = p[i] ^ (seed & 255)
//     } else {
//       v = p[i] ^ ((seed >> 8) & 255)
//     }

//     perm[i] = perm[i + 256] = v
//     gradP[i] = gradP[i + 256] = grad3[v % 12]
//   }
// }

// seed(0)

// function perlin2(x: number, y: number, z: number) {
//   // Find unit grid cell containing point
//   var X = Math.floor(x),
//     Y = Math.floor(y),
//     Z = Math.floor(z)
//   // Get relative xyz coordinates of point within that cell
//   x = x - X
//   y = y - Y
//   z = z - Z
//   // Wrap the integer cells at 255 (smaller integer period can be introduced here)
//   X = X & 255
//   Y = Y & 255
//   Z = Z & 255

//   // Calculate noise contributions from each of the eight corners
//   var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z)
//   var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1)
//   var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z)
//   var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1)
//   var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z)
//   var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1)
//   var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z)
//   var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1)

//   function fade(t: number) {
//     return t * t * t * (t * (t * 6 - 15) + 10)
//   }

//   function lerp(a: number, b: number, t: number) {
//     return (1 - t) * a + t * b
//   }

//   // Compute the fade curve value for x, y, z
//   var u = fade(x)
//   var v = fade(y)
//   var w = fade(z)

//   // Interpolate
//   return lerp(
//     lerp(lerp(n000, n100, u), lerp(n001, n101, u), w),
//     lerp(lerp(n010, n110, u), lerp(n011, n111, u), w),
//     v
//   )
// }
