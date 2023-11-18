import React, { Suspense, useState } from 'react'
import axios from 'axios'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { DATABASE_ID, NOTION_TOKEN } from '../../config'
import ImageSlider from '@/components/projects/ImageSlider'
import Blob from '@/components/projects/Blob/Blob'
import CanvasLoader from '@/components/Loader'

const Projects = ({ projects }: any) => {
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

  console.log(projects)
  return (
    <>
      <Canvas
        style={{ width: '100%', height: '100vh', position: 'fixed' }}
        camera={{ position: [0.0, 0.0, 8.0] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Blob />
          <Stars
            radius={100}
            depth={100}
            count={4000}
            factor={4}
            saturation={0}
            fade
            speed={0.2}
          />
        </Suspense>
      </Canvas>
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
    </>
  )
}

export default Projects

export async function getStaticProps() {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `${NOTION_TOKEN}`,
    },
    data: {
      sorts: [
        {
          property: 'workPeriod',
          direction: 'descending',
        },
      ],
      page_size: 100,
    },
  }

  let projects

  try {
    const response = await axios.request(options)
    projects = await response.data
  } catch (error) {
    console.error(error)
  }

  return {
    props: { projects },
  }
}
