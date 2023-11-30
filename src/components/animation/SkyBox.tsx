import { useThree } from '@react-three/fiber'

import { CubeTextureLoader } from 'three'

const SkyBox = () => {
  const { scene } = useThree()
  const loader = new CubeTextureLoader()
  const texture = loader.load([
    './Yokohama3/px.jpg',
    './Yokohama3/nx.jpg',
    './Yokohama3/py.jpg',
    './Yokohama3/ny.jpg',
    './Yokohama3/pz.jpg',
    './Yokohama3/nz.jpg',
  ])
  scene.background = texture
  return null
}

export default SkyBox
