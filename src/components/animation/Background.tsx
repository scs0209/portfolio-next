import { useThree } from 'react-three-fiber'

const Background = ({ image }: any) => {
  const { scene } = useThree()

  if (scene.background !== image) {
    scene.background = image
  }

  return null
}

export default Background
