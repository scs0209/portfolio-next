import { useThree } from '@react-three/fiber'

import { CubeTextureLoader } from 'three'

const SkyBox = () => {
  const { scene } = useThree()
  const loader = new CubeTextureLoader()
  const texture = loader.load([
    './Yokohama3/right.png',
    './Yokohama3/left.png',
    './Yokohama3/top.png',
    './Yokohama3/bottom.png',
    './Yokohama3/front.png',
    './Yokohama3/back.png',
  ])
  scene.background = texture
  return null
}

export default SkyBox
