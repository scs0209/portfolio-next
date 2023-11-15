import { useRef, Suspense } from 'react'
import {
  Text3D,
  OrbitControls,
  Center,
  Stars,
  Float,
  Sparkles,
  useMatcapTexture,
} from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import ProjectBtn from '@/components/Main/ProjectBtn'

function Hero() {
  const [matcapTexture] = useMatcapTexture('CB4E88_F99AD6_F384C3_ED75B9')
  const ref = useRef<any>()

  const { width: w, height: h } = useThree((state) => state.viewport)

  return (
    <Center scale={[0.9, 1, 1]}>
      <Physics>
        <Float speed={1}>
          <Text3D
            position={[0, 0, -10]}
            scale={[-1, 1, 1]}
            ref={ref}
            size={w / 20}
            font="/gt.json"
            curveSegments={24}
            bevelSegments={1}
            bevelEnabled
            bevelSize={0.08}
            bevelThickness={0.03}
            height={1}
            lineHeight={0.9}
            letterSpacing={0.3}
          >
            {`HELLO THIS IS \n SCS's WORLD`}
            <meshMatcapMaterial color="white" matcap={matcapTexture} />
          </Text3D>
        </Float>
      </Physics>
    </Center>
  )
}

export default function Example() {
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 0, -10], fov: 60 }}>
        <OrbitControls
          enableZoom
          autoRotate
          autoRotateSpeed={-0.1}
          enablePan
          zoomSpeed={0.15}
          dampingFactor={0.05}
        />

        <Suspense fallback="Loading">
          <Stars
            radius={100}
            depth={100}
            count={4000}
            factor={4}
            saturation={0}
            fade
            speed={0.2}
          />
          <Sparkles
            count={300}
            size={3}
            speed={0.02}
            opacity={1}
            scale={10}
            color="#fff3b0"
          />
          <Hero />
        </Suspense>
        <ambientLight intensity={1} color="#dee2ff" />
      </Canvas>
      <div className="flex justify-center relative">
        <ProjectBtn />
      </div>
    </div>
  )
}
