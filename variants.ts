type Direction = 'up' | 'down' | 'left' | 'right'
export const fadeIn = (direction: Direction, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}

export const imageVariants = {
  center: { x: '0%', scale: 1, zIndex: 5 },
  left1: { x: '-50%', scale: 0.7, zIndex: 3 },
  left: { x: '-90%', scale: 0.5, zIndex: 2 },
  right: { x: '90%', scale: 0.5, zIndex: 1 },
  right1: { x: '50%', scale: 0.7, zIndex: 3 },
}
