import { VFC } from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../../../public/animation.json'

interface Props {
  toggle: () => void
}

const Animation: VFC<Props> = ({ toggle }) => {
  return (
    <Lottie
      onClick={toggle}
      loop={false}
      animationData={lottieJson}
      play
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-center rounded-full"
    />
  )
}

export default Animation
