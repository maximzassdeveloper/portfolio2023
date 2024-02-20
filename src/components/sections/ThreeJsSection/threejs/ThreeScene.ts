import { Scene, WebGLRenderer, PerspectiveCamera, PointLight } from 'three'
import { getWindowSize } from './utils'
import { Lights, Sizes } from './types'

export class ThreeScene {
	protected scene = {} as Scene
	protected renderer = {} as WebGLRenderer
	protected sizes = {} as Sizes
	protected lights = {} as Lights
	protected camera = {} as PerspectiveCamera

	constructor(canvas: HTMLCanvasElement) {
		this.initScene()
		this.setSizes(getWindowSize())
		this.initCamera()
		this.initRenderer(canvas)
		this.initLight()
		this.initListeners()
	}

	public setSizes(value: Partial<Sizes>) {
		this.sizes = { ...this.sizes, ...value }
	}

	private initScene() {
		this.scene = new Scene()
	}

	private initRenderer(canvas: HTMLCanvasElement) {
		const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true })
		renderer.setSize(this.sizes.width, this.sizes.height)
		renderer.setPixelRatio(window.devicePixelRatio)

		this.renderer = renderer
	}

	protected rerender() {
		this.renderer.render(this.scene, this.camera)
	}

	private initCamera() {
		const camera = new PerspectiveCamera(16, this.sizes.width / this.sizes.height, 1, 3500)

		camera.position.z = this.getCameraZ()
		camera.far = 60
		camera.updateProjectionMatrix()

		this.camera = camera
	}

	protected getCameraZ() {
		return window.innerWidth < 800 ? 27 : 20
	}

	private initLight() {
		this.lights.primary = new PointLight(0x2a5ee8, 0, 60) // 2
		this.lights.primary2 = new PointLight(0x7196ff, 0, 40) // 1.5
		this.lights.red = new PointLight(0xff0000, 0, 40) // 0
		this.lights.purple = new PointLight(0x29a22ad, 0, 40) // 0

		this.lights.primary.position.set(0, 4, 1)
		this.lights.primary2.position.set(-2, -4, 1)
		this.lights.red.position.set(0, 0, 6)
		this.lights.purple.position.set(-2, 0, 4)

		Object.values(this.lights).forEach((light) => {
			this.scene.add(light)
		})
	}

	private initListeners() {
		if (typeof window === undefined) return

		window.addEventListener('resize', () => {
			// Update sizes
			this.setSizes(getWindowSize())
			const { width, height } = this.sizes

			// Update camera
			this.camera.aspect = width / height
			this.camera.updateProjectionMatrix()
			this.camera.position.z = this.getCameraZ()

			// Update renderer
			this.renderer.setSize(width, height)
			this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		})
	}
}
