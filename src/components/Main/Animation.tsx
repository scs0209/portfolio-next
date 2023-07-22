import Lottie from 'react-lottie-player'
import lottieJson from '../../../public/animation.json'

const Animation = () => {
  return <Lottie loop={false} animationData={lottieJson} play />
}

export default Animation
