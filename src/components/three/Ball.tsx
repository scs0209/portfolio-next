/* eslint-disable */
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, Quaternion } from 'three'
import useKeyboard from '@/hooks/useKeyboard'

export default function Ball({ floor }: any) {
  const ref = useRef<any>()
  const keyMap = useKeyboard()

  const v = useMemo(() => new Vector3(), [])
  const q = useMemo(() => new Quaternion(), [])
  const angularVelocity = useMemo(() => new Vector3(), [])

  useFrame((_, delta) => {
    keyMap.KeyW && (angularVelocity.x -= delta * 5)
    keyMap.KeyS && (angularVelocity.x += delta * 5)
    keyMap.KeyA && (angularVelocity.z += delta * 5)
    keyMap.KeyD && (angularVelocity.z -= delta * 5)

    q.setFromAxisAngle(angularVelocity, delta).normalize()
    ref.current.applyQuaternion(q)

    angularVelocity.lerp(v, 0.01) // slow down the roll

    floor.current.position.x += angularVelocity.z * delta
    floor.current.position.z -= angularVelocity.x * delta

    floor.current.position.x = floor.current.position.x % 10
    floor.current.position.z = floor.current.position.z % 10
  })

  return (
    <mesh ref={ref} position-y={1.0}>
      <sphereGeometry />
      <meshNormalMaterial wireframe />
    </mesh>
  )
}
