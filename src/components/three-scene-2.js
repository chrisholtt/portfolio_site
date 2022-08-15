import React, { Component } from 'react';
import * as THREE from 'three';
import * as dat from 'dat.gui';

class ThreeScene2 extends Component {

    componentDidMount() {
        // Loader
        const normalTexture = new THREE.TextureLoader().load('../textures/normal-map2.png22')
        // const displaceTexture = new THREE.TextureLoader().load('../textures/displace-map3.jpg')

        // Debug
        const gui = new dat.GUI();

        //scene
        this.scene = new THREE.Scene()

        // Objects
        const geometry = new THREE.BoxGeometry(1, 1, 1);

        // Materials
        const material = new THREE.MeshStandardMaterial();
        material.color = new THREE.Color(0x000000);
        material.roughness = 0.3;
        material.metalness = 0.85;
        material.normalMap = normalTexture
        // material.displacementMap = displaceTexture
        // material.transparent = true
        // material.opacity = 0.85;

        // Mesh 
        this.diamond = new THREE.Mesh(geometry, material)
        this.diamond.position.y = 8
        this.diamond.position.x = -8
        this.scene.add(this.diamond)

        this.diamond2 = new THREE.Mesh(geometry, material)
        this.diamond2.position.y = 3
        this.diamond2.position.x = 10
        this.scene.add(this.diamond2)

        this.diamond3 = new THREE.Mesh(geometry, material)
        this.diamond3.position.y = 0
        this.diamond3.position.x = -8
        this.diamond3.position.z = -2
        this.scene.add(this.diamond3)

        this.diamond4 = new THREE.Mesh(geometry, material)
        this.diamond4.position.y = -4
        this.diamond4.position.x = 4
        this.diamond4.position.z = 4
        this.scene.add(this.diamond4)

        this.diamond5 = new THREE.Mesh(geometry, material)
        this.diamond5.position.y = -7
        this.diamond5.position.x = -13
        this.diamond5.position.z = -5
        this.scene.add(this.diamond5)


        // Lights
        // main light
        const pointLight = new THREE.PointLight(0xffffff, 30)
        pointLight.position.set(2, 5, 30)
        this.scene.add(pointLight)

        // red light
        const pointLight2 = new THREE.PointLight(0xd30cb8, 80)
        pointLight2.position.set(-10, 10, -9)
        this.scene.add(pointLight2)

        const light2 = gui.addFolder('light2')
        light2.add(pointLight2.position, 'y').min(-10).max(10)
        light2.add(pointLight2.position, 'x').min(-10).max(10)
        light2.add(pointLight2.position, 'z').min(-100).max(100)
        light2.add(pointLight2, 'intensity').min(0).max(100)
        const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 1)
        // this.scene.add(pointLightHelper2)

        const light2Color = {
            color: 0xff0000
        }

        light2.addColor(light2Color, 'color').onChange(() => {
            pointLight2.color.set(light2Color.color)
        })


        // blue light
        const pointLight3 = new THREE.PointLight(0x6df1d8, 80)
        pointLight3.position.set(10, 10, -10)
        this.scene.add(pointLight3)

        const light3 = gui.addFolder('light3')
        light3.add(pointLight3.position, 'y').min(-10).max(10)
        light3.add(pointLight3.position, 'x').min(-10).max(10)
        light3.add(pointLight3.position, 'z').min(-100).max(100)
        light3.add(pointLight3, 'intensity').min(0).max(100)

        const light3Color = {
            color: 0x0000ff
        }

        light3.addColor(light3Color, 'color').onChange(() => {
            pointLight3.color.set(light3Color.color)
        })
        const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1)
        // this.scene.add(pointLightHelper3)

        // bluelight 2
        const pointLight4 = new THREE.PointLight(0x6df1d8, 80)
        pointLight4.position.set(-10, -10, -10)
        this.scene.add(pointLight4)
        const pointLightHelper4 = new THREE.PointLightHelper(pointLight4, 1)
        // this.scene.add(pointLightHelper4)

        // redlight 2
        const pointLight5 = new THREE.PointLight(0xd30cb8, 80)
        pointLight5.position.set(10, -10, -10)
        this.scene.add(pointLight5)
        const pointLightHelper5 = new THREE.PointLightHelper(pointLight5, 1)
        // this.scene.add(pointLightHelper5)

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
            // this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            // Tried setting the pixel ratio lower to improve preformance
            this.renderer.setPixelRatio(1)
        })


        //camera
        this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
        this.camera.position.x = 0
        this.camera.position.y = 0
        this.camera.position.z = 15
        this.scene.add(this.camera)


        //renderer
        this.renderer = new THREE.WebGLRenderer({
            alpha: true
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        // this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.setPixelRatio(1)

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

        const moveDiamond = (element) => {
            // this.diamond.position.x = (window.scrollY * 0.002)
            this.camera.position.z = (window.scrollY * 0.02)


            return () => window.removeEventListener('scroll', moveDiamond)
        }

        document.addEventListener('mousemove', onDocumentMouseMove)
        document.addEventListener('scroll', moveDiamond)


        // Clock
        const clock = new THREE.Clock()
        const tick = () => {
            targetX = mouseX * .001
            targetY = mouseY * .001

            const elapsedTime = clock.getElapsedTime()
            // Update objects
            this.diamond.rotation.y = 0.4 * elapsedTime
            this.diamond.rotation.x = 0.4 * elapsedTime
            this.diamond.rotation.y += .5 * (targetX - this.diamond.rotation.y)
            this.diamond.rotation.x += 2 * (targetY - this.diamond.rotation.x)
            // this.diamond.position.x = (targetX * 2)


            this.diamond2.rotation.y = 0.3 * elapsedTime
            this.diamond2.rotation.x = 0.3 * elapsedTime
            this.diamond2.rotation.y += 2 * (targetX - this.diamond2.rotation.y)
            this.diamond2.rotation.x += 2 * (targetY - this.diamond2.rotation.x)

            this.diamond3.rotation.y = 0.4 * elapsedTime
            this.diamond3.rotation.x = 0.4 * elapsedTime
            this.diamond3.rotation.y += 2 * (targetX - this.diamond3.rotation.y)
            this.diamond3.rotation.x += 2 * (targetY - this.diamond3.rotation.x)

            this.diamond4.rotation.y = - 0.1 * elapsedTime
            this.diamond4.rotation.x = - 0.4 * elapsedTime
            this.diamond4.rotation.y += 2 * (targetX - this.diamond4.rotation.y)
            this.diamond4.rotation.x += 2 * (targetY - this.diamond4.rotation.x)

            this.diamond5.rotation.y = - 0.1 * elapsedTime
            this.diamond5.rotation.x = - 0.4 * elapsedTime
            this.diamond5.rotation.y += 2 * (targetX - this.diamond5.rotation.y)
            this.diamond5.rotation.x += 2 * (targetY - this.diamond5.rotation.x)


            //  Render
            this.renderer.render(this.scene, this.camera)
            window.requestAnimationFrame(tick)

        }
        tick()

    }


    render() {
        return (
            <div className='webgl2' ref={mount => {
                this.mount = mount
            }} />

        )
    }
}


export default ThreeScene2;