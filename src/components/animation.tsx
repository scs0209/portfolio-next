/* eslint-disable */
import { EffectComposer, N8AO, SSAO } from '@react-three/postprocessing'
import { Physics } from '@react-three/rapier'
import { Canvas } from 'react-three-fiber'
import { Environment } from '@react-three/drei'
import { TextureLoader } from 'three'
import { FC, ReactNode, useEffect, useState } from 'react'
import Background from './animation/Background'
import Bauble from '@/components/animation/Bauble'
import Pointer from '@/components/animation/Poniter'
import Header from './Header'

interface Props {
  children: ReactNode
}

const baubles = [...Array(30)].map(() => ({
  scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
}))

const AnimationPage: FC<Props> = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(null)

  useEffect(() => {
    const textureLoader = new TextureLoader()
    const texture: any = textureLoader.load('/home-background.png')
    setBackgroundImage(texture)
  }, [])

  return (
    <>
      <Header />
      <div
        style={{
          height: '100vh',
          position: 'fixed',
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        >
          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.2}
            color="white"
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, 5, -4]} intensity={4} />
          <directionalLight position={[0, -15, -0]} intensity={4} color="red" />
          <Physics gravity={[0, 0, 0]}>
            <Pointer />
            {
              baubles.map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */
            }
          </Physics>
          <Environment files="/lake_pier_2k.hdr" />
          <Background image={backgroundImage} />
          <EffectComposer multisampling={0}>
            <N8AO color="red" aoRadius={2} intensity={1} />
            {/* @ts-ignore */}
            <SSAO />
          </EffectComposer>
        </Canvas>
      </div>
      <main className="h-screen relative z-[2]">{children}</main>
    </>
  )
}

export default AnimationPage
