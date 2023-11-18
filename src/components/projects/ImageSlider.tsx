import { motion } from 'framer-motion'
import React from 'react'

const ImageSlider = ({ data, index, positionIndexes }: any) => {
  const imgSrc = data.cover?.file?.url || data.cover?.external?.url
  const projectTitle = data.properties.name.title[0].plain_text

  const positions = ['center', 'left1', 'left', 'right', 'right1']

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
  }

  return (
    <motion.img
      key={index}
      src={imgSrc}
      alt={projectTitle}
      className="rounded-[12px]"
      initial="center"
      animate={positions[positionIndexes[index]]}
      variants={imageVariants}
      transition={{ duration: 0.5 }}
      style={{ width: '20%', position: 'absolute', height: '40%' }}
    />
  )
}

export default ImageSlider
