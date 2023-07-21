import Lottie from 'react-lottie-player'
import lottieJson from '../../../public/animation.json'

const Animation = () => {
  return (
    <Lottie
      loop={false}
      animationData={lottieJson}
      play
      className="lg:w-48 md:w-36 w-32 mb-10 object-center rounded-full"
    />
  )
}

export default Animation
