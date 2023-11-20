import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Modal from '../common/Modal'

const ImageSlider = ({ data, index, positionIndexes }: any) => {
  const [show, setShow] = useState(false)
  const imgSrc = data.cover?.file?.url || data.cover?.external?.url
  const projectTitle = data.properties.name.title[0].plain_text
  const description = data.properties.description.rich_text[0].plain_text

  const positions = ['center', 'left1', 'left', 'right', 'right1']

  const imageVariants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
  }

  const handleImageClick = () => {
    setShow(true)
  }

  return (
    <>
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
        onClick={handleImageClick}
      />
      <Modal showModal={show} setShowModal={setShow}>
        {description}
      </Modal>
    </>
  )
}

export default ImageSlider
