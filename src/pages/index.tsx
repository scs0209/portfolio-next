import { useRef, Suspense } from 'react'
import {
  Text3D,
  OrbitControls,
  Center,
  Stars,
  Sparkles,
  useMatcapTexture,
  Preload,
} from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Vector3 } from 'three'
import ProjectBtn from '@/components/Main/ProjectBtn'
import Earth from '@/components/animation/Earth'
import CanvasLoader from '@/components/Loader'
import SkyBox from '@/components/animation/SkyBox'

function CircularText({ text, radius, rotationSpeed, matcapTexture }: any) {
  const groupRef = useRef<any>()

  const { width: w, height: h } = useThree((state) => state.viewport)

  // 텍스트를 각 글자로 분리합니다.
  const characters = text.split('')

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // 각 글자를 원형 경로에 배치합니다.
      characters.forEach((char: string, i: number) => {
        const radian =
          ((Math.PI * 2) / characters.length) * i -
          clock.getElapsedTime() * rotationSpeed
        const xPos = Math.cos(radian) * radius
        const zPos = Math.sin(radian) * radius

        const textMesh = groupRef.current.children[i]
        textMesh.position.set(xPos, 0, zPos)
        textMesh.lookAt(new Vector3(0, 0, 0))
      })
    }
  })

  return (
    <group ref={groupRef} position={[-1, 0, 0]}>
      {characters.map((char: string, i: number) => (
        <Text3D
          key={i}
          position={[0, 0, 0]}
          scale={[-1, 1, 1]}
          size={w / 50}
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
          {char}
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      ))}
    </group>
  )
}

function Hero() {
  const [matcapTexture] = useMatcapTexture('7877EE_D87FC5_75D9C7_1C78C0')

  return (
    <Center scale={[0.9, 1, 1]}>
      <Physics>
        <CircularText
          text={`HELLO THIS IS SCS's WORLD `}
          radius={7}
          rotationSpeed={1}
          matcapTexture={matcapTexture}
        />
      </Physics>
    </Center>
  )
}

export default function Home() {
  return (
    <div className="dark:bg-none scene-wrapper">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, -15], fov: 60 }}
      >
        <OrbitControls
          enableZoom
          autoRotate
          autoRotateSpeed={1}
          enablePan
          zoomSpeed={0.15}
          dampingFactor={0.05}
        />

        <Suspense fallback={<CanvasLoader />}>
          <Earth />
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
          <Preload all />
        </Suspense>

        <SkyBox />
        <ambientLight intensity={1} color="#dee2ff" />
      </Canvas>

      <div className="flex justify-center relative">
        <ProjectBtn />
      </div>
    </div>
  )
}
