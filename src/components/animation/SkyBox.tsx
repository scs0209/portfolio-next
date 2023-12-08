import { useThree } from '@react-three/fiber'

import { CubeTextureLoader } from 'three'

const SkyBox = () => {
  const { scene } = useThree()
  const loader = new CubeTextureLoader()
  const texture = loader.load([
    './Yokohama3/1.jpg',
    './Yokohama3/2.jpg',
    './Yokohama3/3.jpg',
    './Yokohama3/4.jpg',
    './Yokohama3/5.jpg',
    './Yokohama3/6.jpg',
  ])
  scene.background = texture
  return null
}

export default SkyBox
