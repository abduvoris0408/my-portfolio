'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Color } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function Globe() {
	const mountRef = useRef<HTMLDivElement>(null)
	const [isHighResLoaded, setIsHighResLoaded] = useState(false)
	const [showHint, setShowHint] = useState(true)

	useEffect(() => {
		if (!mountRef.current) return

		const width = mountRef.current.clientWidth
		const height = mountRef.current.clientHeight

		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(
			75,
			width / height,
			0.1,
			1000
		)
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		})

		renderer.setSize(width, height)
		renderer.setPixelRatio(window.devicePixelRatio)

		// Make sure canvas fits inside parent and behaves properly
		renderer.domElement.style.width = '100%'
		renderer.domElement.style.height = '100%'
		renderer.domElement.style.display = 'block'
		renderer.domElement.style.pointerEvents = 'all'

		mountRef.current.appendChild(renderer.domElement)

		// Stars
		const starsGeometry = new THREE.BufferGeometry()
		const starsCount = 10000
		const positions = new Float32Array(starsCount * 3)
		for (let i = 0; i < starsCount; i++) {
			positions[i * 3] = (Math.random() - 0.5) * 2000
			positions[i * 3 + 1] = (Math.random() - 0.5) * 2000
			positions[i * 3 + 2] = (Math.random() - 0.5) * 2000
		}
		starsGeometry.setAttribute(
			'position',
			new THREE.BufferAttribute(positions, 3)
		)
		const starsMaterial = new THREE.PointsMaterial({
			color: 0xffffff,
			size: 0.7,
			sizeAttenuation: true,
		})
		const stars = new THREE.Points(starsGeometry, starsMaterial)
		scene.add(stars)

		// Atmosphere
		const atmosphereVertexShader = `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `
		const atmosphereFragmentShader = `
      uniform vec3 glowColor;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(glowColor, 1.0) * intensity;
      }
    `
		const atmosphereMaterial = new THREE.ShaderMaterial({
			vertexShader: atmosphereVertexShader,
			fragmentShader: atmosphereFragmentShader,
			blending: THREE.AdditiveBlending,
			side: THREE.BackSide,
			transparent: true,
			uniforms: { glowColor: { value: new Color(0x3a86ff) } },
		})
		const atmosphereMesh = new THREE.Mesh(
			new THREE.SphereGeometry(5.2, 32, 32),
			atmosphereMaterial
		)
		scene.add(atmosphereMesh)

		const wireframeMaterial = new THREE.MeshBasicMaterial({
			color: 0x3a86ff,
			wireframe: true,
			transparent: true,
			opacity: 0.5,
		})
		const wireframeGlobe = new THREE.Mesh(
			new THREE.SphereGeometry(5, 32, 32),
			wireframeMaterial
		)
		scene.add(wireframeGlobe)

		const solidGlobe = new THREE.Mesh(
			new THREE.SphereGeometry(4.9, 64, 64),
			new THREE.MeshPhongMaterial({
				color: 0x1a237e,
				transparent: true,
				opacity: 0,
			})
		)
		scene.add(solidGlobe)

		scene.add(new THREE.AmbientLight(0xffffff, 0.5))
		const pointLight = new THREE.PointLight(0xffffff, 1)
		pointLight.position.set(10, 10, 10)
		scene.add(pointLight)

		camera.position.z = 10

		const controls = new OrbitControls(camera, renderer.domElement)
		controls.enableDamping = true
		controls.dampingFactor = 0.05
		controls.rotateSpeed = 0.5
		controls.enableZoom = false

		const colors = [
			new Color(0x3a86ff),
			new Color(0x8338ec),
			new Color(0xff006e),
			new Color(0xfb5607),
			new Color(0xffbe0b),
		]
		let colorIndex = 0
		let nextColorIndex = 1
		let colorT = 0
		const colorTransitionSpeed = 0.005

		const lerpColor = (a: Color, b: Color, t: number) => {
			return new Color(
				a.r + (b.r - a.r) * t,
				a.g + (b.g - a.g) * t,
				a.b + (b.b - a.b) * t
			)
		}

		let animationId: number

		const animate = () => {
			animationId = requestAnimationFrame(animate)

			colorT += colorTransitionSpeed
			if (colorT >= 1) {
				colorT = 0
				colorIndex = nextColorIndex
				nextColorIndex = (nextColorIndex + 1) % colors.length
			}
			const currentColor = lerpColor(
				colors[colorIndex],
				colors[nextColorIndex],
				colorT
			)

			if (wireframeGlobe.material instanceof THREE.MeshBasicMaterial)
				wireframeGlobe.material.color = currentColor
			if (solidGlobe.material instanceof THREE.MeshPhongMaterial)
				solidGlobe.material.color = currentColor
			if (atmosphereMesh.material instanceof THREE.ShaderMaterial)
				atmosphereMesh.material.uniforms.glowColor.value = currentColor

			wireframeGlobe.rotation.y += 0.001
			solidGlobe.rotation.y += 0.001
			atmosphereMesh.rotation.y += 0.0005
			stars.rotation.y += 0.0001

			controls.update()
			renderer.render(scene, camera)
		}
		animate()

		const textureLoader = new THREE.TextureLoader()
		Promise.all([
			textureLoader.loadAsync('/earth-texture-compressed.jpg'),
			textureLoader.loadAsync('/earth-bump-compressed.jpg'),
			textureLoader.loadAsync('/earth-specular-compressed.jpg'),
		]).then(([texture, bumpMap, specularMap]) => {
			const highResMaterial = new THREE.MeshPhongMaterial({
				map: texture,
				bumpMap,
				bumpScale: 0.05,
				specularMap,
				specular: new THREE.Color('grey'),
			})

			const transitionDuration = 1 // seconds
			const startTime = Date.now()

			const transitionToHighRes = () => {
				const elapsed = (Date.now() - startTime) / 1000
				const progress = Math.min(elapsed / transitionDuration, 1)

				solidGlobe.material = highResMaterial
				solidGlobe.material.opacity = progress
				wireframeMaterial.opacity = 0.5 * (1 - progress)

				if (progress < 1) {
					requestAnimationFrame(transitionToHighRes)
				} else {
					setIsHighResLoaded(true)
					scene.remove(wireframeGlobe)
				}
				renderer.render(scene, camera)
			}

			transitionToHighRes()
		})

		const handleResize = () => {
			const w = mountRef.current?.clientWidth ?? window.innerWidth
			const h = mountRef.current?.clientHeight ?? window.innerHeight
			camera.aspect = w / h
			camera.updateProjectionMatrix()
			renderer.setSize(w, h)
		}
		window.addEventListener('resize', handleResize)

		const hintTimer = setTimeout(() => {
			setShowHint(false)
		}, 3000)

		return () => {
			window.removeEventListener('resize', handleResize)
			cancelAnimationFrame(animationId)
			mountRef.current?.removeChild(renderer.domElement)
			controls.dispose()
			clearTimeout(hintTimer)
		}
	}, [])

	return (
		<div
			ref={mountRef}
			className='relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg z-10 border '
		>
			{showHint && (
				<div className='absolute bottom-4 right-4 bg-black bg-opacity-30 text-white text-sm px-3 py-1 rounded-full transition-opacity duration-1000 opacity-80 hover:opacity-100 pointer-events-none'></div>
			)}
		</div>
	)
}
