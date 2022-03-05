import React, { FC, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function Index2() {
  const mRef: any = useRef()
  const [step, setStep] = useState(0)
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
  renderer.autoClear = true

  useEffect((): void => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    if (mRef.current.childNodes && mRef.current.childNodes.length > 0) {
      mRef.current.innerHTML = ''
      mRef.current.appendChild(renderer.domElement)
    } else {
      mRef.current.appendChild(renderer.domElement)
    }

    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 500)
    camera.position.set(0, 0, 50)
    camera.lookAt(0, 0, 0)

    const scene = new THREE.Scene()
    const material = new THREE.LineBasicMaterial({ color: 0x104e6d })
    const material2 = new THREE.MeshBasicMaterial({ color: 0x104e6d })

    {
      // const geometry = new THREE.CircleGeometry(5, 64)
      // const geometry = new THREE.DodecahedronGeometry(5, 0)
      const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
      // const geometry = new THREE.DodecahedronGeometry(5, 0)
      const circle = new THREE.Mesh(geometry, material2)
      scene.add(circle)

      circle.rotation.x += 0.5;
      circle.rotation.y += 0.5;

      function animate() {
        // renderer.clear();
        circle.rotation.x += 0.01;
        circle.rotation.y += 0.01;
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    }
    {
      // const points = []
      // points.push(new THREE.Vector3(-6, 0, 0))
      // points.push(new THREE.Vector3(0, 10, 0))
      // points.push(new THREE.Vector3(6, 0, 0))
      // points.push(new THREE.Vector3(-6, 0, 0))
      // const geometry = new THREE.BufferGeometry().setFromPoints(points)
      // const line = new THREE.Line(geometry, material)
      // scene.add(line)
      // const points2 = []
      // points2.push(new THREE.Vector3(6, 6, 0))
      // points2.push(new THREE.Vector3(0, -4, 0))
      // points2.push(new THREE.Vector3(-6, 6, 0))
      // points2.push(new THREE.Vector3(6, 6, 0))
      // const geometry2 = new THREE.BufferGeometry().setFromPoints(points2)
      // const line2 = new THREE.Line(geometry2, material)
      // scene.add(line2)
    }
    renderer.render(scene, camera)

    function animate() {
      // renderer.clear();
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    // animate()
    // window.addEventListener('resize', animate, false)
  }, [1])
  return <div ref={mRef} />
}

export default Index2
