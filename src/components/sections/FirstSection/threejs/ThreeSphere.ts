import { Mesh, MeshStandardMaterial, SphereGeometry, Color } from 'three'

export class ThreeSphere {
  private geometry = {} as SphereGeometry
  private material = {} as MeshStandardMaterial
  public sphere = {} as Mesh

  constructor() {
    this.initGeometry()
    this.initMaterial()
    this.initMesh()
    this.initListeners()
  }

  private initGeometry() {
    this.geometry = new SphereGeometry(2, this.getCountSegments(), this.getCountSegments())
  }

  private initMaterial() {
    this.material = new MeshStandardMaterial({
      // color: new Color(0xffffff),
      wireframe: true,
    })
  }

  private initMesh() {
    this.sphere = new Mesh(this.geometry, this.material)
    this.initialSpherePosition()
  }

  private getCountSegments() {
    return window.innerWidth < 800 ? 35 : 40
  }

  private initialSpherePosition() {
    this.sphere.position.y = window.innerWidth < 800 ? -0.5 : 0
  }

  private initListeners() {
    if (typeof window === undefined) return

    window.addEventListener('resize', () => {
      this.initialSpherePosition()
    })
  }
}
