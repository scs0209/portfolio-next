import React, { FC, useState } from 'react'
import ImageSlider from './ImageSlider'

interface Props {
  projects: any
}

const ProjectItem: FC<Props> = ({ projects }) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5)
      return updatedIndexes
    })
  }

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 4) % 5)

      return updatedIndexes
    })
  }

  return (
    <div className="flex items-center flex-col justify-center h-screen relative z-10">
      {projects.results.map((project: any, index: number) => {
        return (
          <ImageSlider
            data={project}
            index={index}
            key={index}
            positionIndexes={positionIndexes}
          />
        )
      })}
      <div className="flex flex-row gap-3 mt-40">
        <button
          type="button"
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          type="button"
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ProjectItem
