import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeScene extends Component {

    componentDidMount() {

        // Loader
        const textureLoader = new THREE.TextureLoader()
        const normalTexture = textureLoader.load('./static/textures/normal-map.png')

        //scene
        this.scene = new THREE.Scene()

        // Objects
        const geometry = new THREE.ConeGeometry(6, 10, 4, 1, false, 0, 6.283185307179586);

        // Materials
        const material = new THREE.MeshStandardMaterial();
        material.color = new THREE.Color(0xffffff);
        material.roughness = 0.15;
        material.metalness = 0.9;
        material.normalMap = normalTexture
        // material.transparent = true;
        // material.opacity = 0.75;

        // Mesh 
        // Top diamond
        this.diamond = new THREE.Mesh(geometry, material)
        this.diamond.position.y = 5.5
        // bottom diamond
        this.diamond2 = new THREE.Mesh(geometry, material)
        this.diamond2.rotation.x = Math.PI * 1
        this.diamond2.position.y = -5.5
        this.scene.add(this.diamond, this.diamond2)

        // Lights
        // main light
        const pointLight = new THREE.PointLight(0xffffff, 5)
        pointLight.position.set(2, 5, 40)
        this.scene.add(pointLight)

        // red light
        const pointLight2 = new THREE.PointLight(0xff0000, 20)
        pointLight2.position.set(-10, 10, 21)
        this.scene.add(pointLight2)

        // blue light
        const pointLight3 = new THREE.PointLight(0x0000ff, 20)
        pointLight3.position.set(10, -10, 21)
        this.scene.add(pointLight3)

        // sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };


        // Window resize:
        window.addEventListener('resize', () => {
            // update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            // updated camera
            this.camera.aspect = sizes.width / sizes.height
            this.camera.updateProjectionMatrix()
            // update renderer
            this.renderer.setSize(sizes.width, sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })


        //camera
        this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
        this.camera.position.x = 0
        this.camera.position.y = -5
        this.camera.position.z = 30
        this.scene.add(this.camera)


        //renderer
        this.renderer = new THREE.WebGLRenderer({
            alpha: true
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.mount.appendChild(this.renderer.domElement)

        // Animate
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const onDocumentMouseMove = (event) => {
            mouseX = (event.clientX - windowHalfX)
            mouseY = (event.clientY - windowHalfY)
        }

        const moveDiamond = () => {
            this.diamond.position.y = 5.5 + (window.screenY * .2)
            console.log(this.diamond.position.y)
            this.diamond2.position.y = - 5.5 + (window.screenY * .2)
        }

        document.addEventListener('mousemove', onDocumentMouseMove)
        document.addEventListener('scroll', moveDiamond)


        // Clock
        const clock = new THREE.Clock()
        const tick = () => {
            targetX = mouseX * .001


            const elapsedTime = clock.getElapsedTime()

            // Update objects
            this.diamond.rotation.y = 0.4 * elapsedTime
            this.diamond2.rotation.y = 0.4 * elapsedTime

            this.diamond.rotation.y += .5 * (targetX - this.diamond.rotation.y)
            this.diamond2.rotation.y += .5 * (targetX - this.diamond2.rotation.y)

            // Render
            this.renderer.render(this.scene, this.camera)
            window.requestAnimationFrame(tick)

        }
        tick()

    }


    render() {
        return (
            <div ref={mount => {
                this.mount = mount
            }} />

        )
    }
}


export default ThreeScene;