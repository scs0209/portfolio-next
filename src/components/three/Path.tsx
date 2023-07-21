/* eslint-disable */
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import { Line } from '@react-three/drei'

const randomPointOnCircle = (radius: number) => {
  const angle = Math.random() * Math.PI * 2
  return new THREE.Vector3(
    radius * Math.cos(angle),
    radius * Math.sin(angle),
    0,
  )
}

const randomPath = () => {
  const points = []
  const numPoints = Math.floor(Math.random() * 300) + 2

  const radius = Math.random() * 5 + 1
  for (let i = 0; i < numPoints; i++) {
    points.push(randomPointOnCircle(radius))
  }
  return points
}

const Path: React.FC = () => {
  const ref = useRef<any>()
  const points = useMemo(() => randomPath(), [])

  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime()
      ref.current.rotation.set(Math.sin(time / 4), Math.sin(time / 7), 0)
    }
  })

  return (
    <Line
      ref={ref}
      points={points}
      color="white"
      lineWidth={Math.random() * 0.5 + 0.1}
      transparent
      opacity={Math.random()}
      depthTest={false}
    />
  )
}

export default Path
