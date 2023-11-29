import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

const SkyBox = () => {
  const { scene } = useThree()
  const gltf = useGLTF('./background/scene.gltf', true)
  const ref = useRef<any>()

  useEffect(() => {
    if (gltf.scene) {
      scene.background = null
      ref.current.add(gltf.scene)
    }
  }, [gltf, scene])

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.rotation.copy(camera.rotation)
    }
  })

  return <group ref={ref} />
}

export default SkyBox
