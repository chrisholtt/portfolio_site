import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeScene extends Component {

    componentDidMount() {
        //scene
        this.scene = new THREE.Scene()

        //renderer
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.mount.appendChild(this.renderer.domElement)

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
        this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        this.camera.position.x = 0
        this.camera.position.y = 0
        this.camera.position.z = 30

        // Objects
        const geometry = new THREE.TorusKnotGeometry(8.55, 3.7917, 139, 11, 2, 3);


        // Materials
        const material = new THREE.MeshStandardMaterial();
        material.color = new THREE.Color(0x0000ff);


        // Mesh 
        this.diamond = new THREE.Mesh(geometry, material)
        this.scene.add(this.diamond)

        // Lights
        const pointLight = new THREE.PointLight(0xffffff, 5)
        pointLight.position.set(2, 5, 40)
        this.scene.add(pointLight)

        this.renderer.render(this.scene, this.camera)

        // Clock
        const clock = new THREE.Clock()
        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            this.diamond.rotation.y = 0.2 * elapsedTime
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