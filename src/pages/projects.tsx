/* eslint-disable */
import React, { Suspense } from 'react'
import axios from 'axios'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { DATABASE_ID, NOTION_TOKEN } from '../../config'
import Blob from '@/components/projects/Blob/Blob'
import CanvasLoader from '@/components/Loader'
import ProjectItem from '@/components/projects/ProjectItem'

const Projects = ({ projects }: any) => {
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
      <ProjectItem projects={projects} />
    </>
  )
}

export default Projects

export async function getStaticProps() {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
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
    projects = response.data.results
  } catch (error) {
    console.error(error)
  }

  const fetchPageContents = projects.map(async (project: any) => {
    const pageId = project.id
    const pageOptions = {
      method: 'GET',
      url: `https://api.notion.com/v1/blocks/${pageId}/children`,
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
      },
    }

    try {
      const pageResponse = await axios.request(pageOptions)
      project.pageContent = pageResponse.data
    } catch (error) {
      console.error(error)
    }
  })

  await Promise.all(fetchPageContents)

  return {
    props: { projects },
  }
}
