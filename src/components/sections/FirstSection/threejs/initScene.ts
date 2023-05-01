import {
  Scene,
  WebGLRenderer,
  Color,
  PerspectiveCamera,
  AmbientLight,
  PointLight,
  PointLightHelper,
} from 'three'
import { gsap, Power1 } from 'gsap'

export function initScene(canvas: HTMLCanvasElement): [Scene, WebGLRenderer, PerspectiveCamera] {
  // SIZES
  const sizes = {
    width: getWidth(),
    height: getHeight(),
  }

  // SCENE
  const scene = new Scene()

  function getCameraZ() {
    return window.innerWidth < 800 ? 27 : 20
  }

  function getWidth() {
    return window.innerWidth < 600 ? 600 : window.innerWidth
  }

  function getHeight() {
    return window.innerHeight < 400 ? 400 : window.innerHeight
  }
  // scene.background = new Color(0x111111)

  // CAMERA
  const camera = new PerspectiveCamera(16, sizes.width / sizes.height, 1, 3500)
  camera.position.z = getCameraZ()

  // LIGHT
  const pointLight3 = new PointLight(0x2a5ee8, 0, 60) // 2
  const pointLight4 = new PointLight(0x7196ff, 0, 40) // 1.5
  const pointLight5 = new PointLight(0xff0000, 0, 40) // 0
  const pointLight6 = new PointLight(0x29ce6b, 0, 40) // 0
  pointLight3.position.set(0, 4, 1)
  pointLight4.position.set(-2, -4, 1)
  pointLight5.position.set(0, 0, 6)
  pointLight6.position.set(-2, 0, 4)
  scene.add(pointLight3)
  scene.add(pointLight4)
  scene.add(pointLight5)
  scene.add(pointLight6)

  camera.far = 60
  camera.updateProjectionMatrix()
  console.log(camera.far)

  gsap.to(pointLight3, {
    intensity: 2,
    duration: 2,
    ease: Power1.easeInOut,
    delay: 0.5,
  })

  gsap.to(pointLight4, {
    intensity: 1.5,
    duration: 1.5,
    ease: Power1.easeInOut,
    delay: 0.8,
  })

  let car_anim = gsap.timeline()

  car_anim.to(
    pointLight5,
    {
      intensity: 0.9,
      scrollTrigger: {
        trigger: '#textBlock1',
        scrub: 1,
        start: 'top bottom',
        end: 'bottom bottom',
        // markers: true,
      },
      ease: Power1.easeInOut,
    },
    0
  )

  car_anim.to(
    camera.position,
    {
      z: 5,
      x: 1,
      scrollTrigger: {
        trigger: '#textBlock1',
        scrub: true,
        start: 'top bottom',
        end: 'bottom bottom',
        // markers: true,
      },
      ease: Power1.easeInOut,
    },
    0
  )

  car_anim.to(
    camera.position,
    {
      z: 20,
      x: -2.5,
      immediateRender: false,
      scrollTrigger: {
        trigger: '#experience',
        scrub: true,
        start: 'top bottom',
        end: '700px bottom',
        // markers: true,
      },
      ease: Power1.easeInOut,
    },
    0
  )

  car_anim.to(
    pointLight6,
    {
      intensity: 0.9,
      scrollTrigger: {
        trigger: '#experience',
        scrub: true,
        start: 'top bottom',
        end: 'bottom bottom',
        // markers: true,
      },
      ease: Power1.easeInOut,
    },
    0
  )

  // car_anim.to(
  //   [pointLight3.position, pointLight4.position],
  //   {
  //     z: 7,
  //     scrollTrigger: {
  //       trigger: '#textBlock1',
  //       scrub: 1,
  //       start: 'top bottom',
  //       end: 'bottom bottom',
  //       // markers: true,
  //     },
  //     ease: Power1.easeInOut,
  //   },
  //   0
  // )

  let car_anim2 = gsap.timeline()

  // car_anim.to(
  //   [pointLight5, pointLight4, pointLight3],
  //   {
  //     intensity: 0,
  //     scrollTrigger: {
  //       trigger: '#skills',
  //       start: 'top 60%',
  //       end: 'top bottom',
  //       scrub: 1,
  //     },
  //     ease: Power1.easeInOut,
  //   },
  //   0
  // )

  // RENDERER
  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(window.devicePixelRatio)
  // renderer.shadowMap.enabled = true

  // Listeners
  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = getWidth()
    sizes.height = getHeight()

    camera.position.z = getCameraZ()

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  return [scene, renderer, camera]
}
