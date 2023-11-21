import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Modal from '../common/Modal'
import { Tag } from '@/types'
import ProjectTag from './project-tag'

const ImageSlider = ({ data, index, positionIndexes }: any) => {
  console.log(data)
  const [show, setShow] = useState(false)
  const imgSrc = data.cover?.file?.url || data.cover?.external?.url
  const githubLink = data.properties.github.url
  const projectTitle = data.properties.name.title[0].plain_text
  const description = data.properties.description.rich_text[0].plain_text
  const tags: Tag[] = data.properties.tag.multi_select
  const { start } = data.properties.workPeriod.date
  let { end } = data.properties.workPeriod.date
  if (!end) {
    end = '작업 중'
  }

  const diffDate = (start: any, end: any) => {
    const startDateStringArray = start.split('-')
    const endDateStringArray = end.split('-')

    const startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2],
    )
    const endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2],
    )

    const diffInMs = Math.abs(Number(endDate) - Number(startDate))
    const result = diffInMs / (1000 * 60 * 60 * 24)
    if (Number.isNaN(result)) {
      return '작업 중'
    }

    return `${result}일`
  }

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

  const renderPageContent = () => {
    return data.pageContent.results.map((block: any) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <div className="mb-2 leading-normal tracking-wide p-3">
              {block.paragraph.rich_text[0]?.plain_text || ''}
            </div>
          )
        case 'heading_1':
          return (
            <h1 className="text-3xl font-bold mb-2">
              {block.heading_1.text[0]?.plain_text || ''}
            </h1>
          )
        case 'heading_2':
          return (
            <h2 className="text-2xl font-bold mb-2">
              {block.heading_2.rich_text[0]?.plain_text || ''}
            </h2>
          )
        case 'heading_3':
          return (
            <h3 className="text-xl font-bold mb-2">
              {block.heading_3.rich_text[0]?.plain_text || ''}
            </h3>
          )
        case 'bulleted_list_item':
          return (
            <li className="pl-4 mb-2">
              {block.bulleted_list_item.rich_text[0]?.plain_text || ''}
            </li>
          )
        case 'divider':
          return <hr className="mb-2" />
        default:
          return null
      }
    })
  }

  return (
    <>
      <motion.div
        animate={positions[positionIndexes[index]]}
        initial="center"
        variants={imageVariants}
        transition={{ duration: 0.5 }}
        className="overflow-hidden absolute bg-[#343444] rounded-[12px] p-4"
        style={{ width: '20%', height: '40%' }}
        onClick={handleImageClick}
      >
        <motion.img
          key={index}
          src={imgSrc}
          alt={projectTitle}
          className="rounded-[12px] overflow-hidden"
          style={{ width: '100%', height: '70%', objectFit: 'cover' }}
        />
        <span className="text-sm">
          {`${start} ~ ${end}`} (총: {diffDate(start, end)})
        </span>
        <div>{projectTitle}</div>
        <div className="text-sm">{description}</div>
        <a href={githubLink} target="_blank" className="mt-3 mb-2">
          <span className="px-3 py-0.5 text-sm fond-medium rounded-lg text-white border bg-gray-500 border-gray-500 hover:bg-pink-400 dark:border-gray-500 dark:bg-gray-500 dark:hover:text-black dark:hover:border-black">
            Github
          </span>
        </a>
        <div className="flex flex-row flex-wrap">
          {tags.map((tag: Tag) => {
            return <ProjectTag key={tag.id} tag={tag} />
          })}
        </div>
      </motion.div>
      <Modal showModal={show} setShowModal={setShow}>
        {renderPageContent()}
      </Modal>
    </>
  )
}

export default ImageSlider
