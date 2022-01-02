import React from 'react'
import * as THREE from 'three'

class Index extends React.Component {
  mdom: any = React.createRef()
  componentDidMount() {
    //创建一个场景（场景是一个容器，用于保存、跟踪所要渲染的物体和使用的光源）
    var scene = new THREE.Scene()

    //创建一个摄像机对象（摄像机决定了能够在场景里看到什么）
    // var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.9, 100)

    //设置摄像机的位置，并让其指向场景的中心（0,0,0）
    camera.position.x = -30
    camera.position.y = 40
    camera.position.z = 30
    camera.lookAt(scene.position)

    //创建一个WebGL渲染器并设置其大小
    var renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0xeeeeee))
    renderer.setSize(window.innerWidth, window.innerHeight)

    //在场景中添加坐标轴
    var axes = new THREE.AxisHelper(20)
    scene.add(axes)

    //创建一个平面
    var planeGeometry = new THREE.PlaneGeometry(60, 20)
    //平面使用颜色为0xcccccc的基本材质
    var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc })
    var plane = new THREE.Mesh(planeGeometry, planeMaterial)

    //设置屏幕的位置和旋转角度
    plane.rotation.x = -0.5 * Math.PI
    plane.position.x = 15
    plane.position.y = 0
    plane.position.z = 0

    //将平面添加场景中
    scene.add(plane)

    //创建一个立方体
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    //将线框（wireframe）属性设置为true，这样物体就不会被渲染为实物物体
    var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    //设置立方体的位置
    cube.position.x = -4
    cube.position.y = 3
    cube.position.z = 0

    //将立方体添加到场景中
    scene.add(cube)

    //创建一个球体
    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
    //将线框（wireframe）属性设置为true，这样物体就不会被渲染为实物物体
    var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true })
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

    //设置球体的位置
    sphere.position.x = 20
    sphere.position.y = 4
    sphere.position.z = 2

    //将球体添加到场景中
    scene.add(sphere)

    //将渲染的结果输出到指定页面元素中

    this.mdom.current.appendChild(renderer.domElement)

    //渲染场景
    renderer.render(scene, camera)
  }
  render(): React.ReactNode {
    return <div ref = {this.mdom} id='WebGL-output'></div>
  }
}

export default Index