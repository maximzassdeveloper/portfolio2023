import { Mesh, Vector3 } from 'three'
import { Power1, gsap } from 'gsap'
import { ThreeScene } from './ThreeScene'
import { ThreeSphere } from './ThreeSphere'
import { isSimpleGeometry } from './utils'
import { perlin } from './perlin'
import { AnimationOptions, FpsOptions } from './types'

export class ThreeInit extends ThreeScene {
	private sphere: Mesh
	private fpsOptions = {} as FpsOptions
	private animationOptions = {} as AnimationOptions

	constructor(canvas: HTMLCanvasElement) {
		super(canvas)

		const { sphere } = new ThreeSphere()
		this.sphere = sphere
		this.scene.add(this.sphere)

		this.main()
	}

	public main() {
		this.startAnimating(60)
		this.gsapAnimations()
	}

	private startAnimating(fps: number) {
		this.fpsOptions.fpsInterval = 1000 / fps
		this.fpsOptions.then = Date.now()
		this.fpsOptions.startTime = this.fpsOptions.then

		this.animationOptions = {
			time: 1,
			noiseAmount: 1.2,
			sphereVerticesArray: [],
			sphereVerticesNormArray: [],
		}

		const geometry = this.sphere.geometry
		if (!isSimpleGeometry(geometry)) return

		for (let i = 0; i < geometry.vertices.length; i += 1) {
			const vertex = geometry.vertices[i]
			const vec = new Vector3(vertex.x, vertex.y, vertex.z)
			this.animationOptions.sphereVerticesArray.push(vec)

			const mag = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z)
			const norm = new Vector3(vertex.x / mag, vertex.y / mag, vertex.z / mag)
			this.animationOptions.sphereVerticesNormArray.push(norm)
		}

		this.animate()
	}

	private animate() {
		requestAnimationFrame(this.animate.bind(this))

		this.fpsOptions.now = Date.now()
		this.fpsOptions.elapsed = this.fpsOptions.now - this.fpsOptions.then

		if (this.fpsOptions.elapsed > this.fpsOptions.fpsInterval) {
			this.fpsOptions.then =
				this.fpsOptions.now - (this.fpsOptions.elapsed % this.fpsOptions.fpsInterval)

			this.sphereAnimation()
		}
	}

	private sphereAnimation() {
		if (this.sphere.visible) {
			this.animationOptions.time += 0.01

			const geometry = this.sphere.geometry
			if (!isSimpleGeometry(geometry)) return

			for (let i = 0; i < geometry.vertices.length; i += 1) {
				const { noiseAmount, time, sphereVerticesArray, sphereVerticesNormArray } =
					this.animationOptions

				const vertex = geometry.vertices[i]
				vertex.normalize()

				const value =
					0.75 *
					perlin(
						noiseAmount * vertex.x + time,
						noiseAmount * vertex.y + time,
						noiseAmount * vertex.z + time
					)

				vertex.x = sphereVerticesArray[i].x + sphereVerticesNormArray[i].x * value * noiseAmount
				vertex.y = sphereVerticesArray[i].y + sphereVerticesNormArray[i].y * value * noiseAmount
				vertex.z = sphereVerticesArray[i].z + sphereVerticesNormArray[i].z * value * noiseAmount
			}

			geometry.computeFaceNormals()
			geometry.computeVertexNormals()
			geometry.verticesNeedUpdate = true
			this.rerender()
		}
	}

	public resetGsapAnimations() {
		gsap.to(this.camera.position, {
			x: 0,
			y: 0,
			z: this.getCameraZ(),
			duration: 0,
		})

		gsap.to(this.sphere.rotation, {
			x: 0,
			y: 0,
			z: 0,
			duration: 0,
		})

		Object.values(this.lights).forEach((light) => {
			gsap.to(light, {
				intensity: 0,
				duration: 0,
			})
		})
	}

	public gsapAnimations() {
		// to correct work if resize page
		this.resetGsapAnimations()

		const timeline = gsap.timeline()

		/* --------- Fade primary lights on Home block --------- */
		gsap.to(this.lights.primary, {
			intensity: 2,
			duration: 2,
			ease: Power1.easeInOut,
			delay: 0.5,
		})

		gsap.to(this.lights.primary2, {
			intensity: 1.5,
			duration: 1.5,
			ease: Power1.easeInOut,
			delay: 0.8,
		})

		/* --------- About block --------- */
		timeline.to(this.lights.red, {
			intensity: 0.9,
			scrollTrigger: {
				trigger: '#textBlock1',
				scrub: 1,
				start: 'top bottom',
				end: 'bottom bottom',
			},
			ease: Power1.easeInOut,
		})

		timeline.to(this.camera.position, {
			z: 5,
			x: 1,
			scrollTrigger: {
				trigger: '#textBlock1',
				scrub: true,
				start: 'top bottom',
				end: 'bottom bottom',
			},
			ease: Power1.easeInOut,
		})

		timeline.to(this.sphere.rotation, {
			x: -1,
			y: 1,
			scrollTrigger: {
				trigger: '#textBlock1',
				start: 'top bottom',
				end: 'top top',
				scrub: true,
			},
			ease: Power1.easeInOut,
		})

		/* --------- Experience block --------- */
		timeline.to(this.lights.red, {
			intensity: 0.4,
			immediateRender: false,
			scrollTrigger: {
				trigger: '#experience',
				scrub: true,
				start: 'top bottom',
				end: '700px bottom',
			},
			ease: Power1.easeInOut,
		})

		timeline.to(this.camera.position, {
			z: 20,
			x: -2.5,
			immediateRender: false,
			scrollTrigger: {
				trigger: '#experience',
				scrub: true,
				start: 'top bottom',
				end: '700px bottom',
			},
			ease: Power1.easeInOut,
		})

		timeline.to(this.sphere.rotation, {
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

		timeline.to(this.sphere.rotation, {
			x: 2,
			z: 1,
			immediateRender: false,
			scrollTrigger: {
				trigger: '#experience',
				start: '700px center',
				end: 'bottom top',
				scrub: true,
			},
			ease: Power1.easeInOut,
		})

		/* --------- Contact block --------- */
		timeline.to(this.sphere.rotation, {
			x: 0,
			z: 0,
			y: 0,
			immediateRender: false,
			scrollTrigger: {
				trigger: '#contact',
				scrub: true,
				start: 'top bottom',
				end: 'bottom bottom',
			},
			ease: Power1.easeInOut,
		})

		timeline.to(this.lights.purple, {
			intensity: 1,
			immediateRender: false,
			scrollTrigger: {
				trigger: '#contact',
				scrub: true,
				start: '20% bottom',
				end: 'bottom bottom',
			},
			ease: Power1.easeInOut,
		})

		timeline.to(this.lights.primary, {
			intensity: 0,
			immediateRender: false,
			scrollTrigger: {
				trigger: '#contact',
				scrub: true,
				start: '20% bottom',
				end: 'bottom bottom',
			},
			ease: Power1.easeInOut,
		})

		timeline.to(this.lights.red, {
			intensity: 0,
			immediateRender: false,
			scrollTrigger: {
				trigger: '#contact',
				scrub: true,
				start: '30% bottom',
				end: 'bottom bottom',
			},
			ease: Power1.easeInOut,
		})

		timeline.to(this.camera.position, {
			immediateRender: false,
			y: '-7',
			scrollTrigger: {
				start: '70% 80%',
				scrub: true,
				trigger: '#contact',
			},
			ease: Power1.easeInOut,
		})
	}
}
