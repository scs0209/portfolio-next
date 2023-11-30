import { useThree } from '@react-three/fiber'

import { CubeTextureLoader } from 'three'

const SkyBox = () => {
  const { scene } = useThree()
  const loader = new CubeTextureLoader()
  const texture = loader.load([
    './Yokohama3/material_emissive.png',
    './Yokohama3/material_emissive.png',
    './Yokohama3/material_emissive.png',
    './Yokohama3/material_emissive.png',
    './Yokohama3/material_emissive.png',
    './Yokohama3/material_emissive.png',
  ])
  scene.background = texture
  return null
}

export default SkyBox
