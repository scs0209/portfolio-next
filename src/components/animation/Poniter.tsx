import * as THREE from 'three'
import { BallCollider, RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

const Pointer = ({ vec = new THREE.Vector3() }: any) => {
  const ref = useRef<any>()
  useFrame(({ mouse, viewport }) => {
    vec.lerp(
      {
        x: (mouse.x * viewport.width) / 2,
        y: (mouse.y * viewport.height) / 2,
        z: 0,
      },
      0.2,
    )
    ref.current?.setNextKinematicTranslation(vec)
  })
  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

export default Pointer
