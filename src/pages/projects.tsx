import { useState } from 'react'
import axios from 'axios'
import { DATABASE_ID, NOTION_TOKEN } from '../../config'
import HeadInfo from '@/components/common/HeadInfo'
import ProjectsItem from '@/components/porjects/project-item'
import ProjectBtn from '@/components/porjects/porjects-button'

const Projects = ({ projects }: any) => {
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 1

  const shownProject = projects.results.slice(
    currentPage === 0 ? currentPage : currentPage - 1,
    currentPage + projectsPerPage + 1,
  )

  const prevPage = () => {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : 0)
  }

  const nextPage = () => {
    const numberOfPages = Math.ceil(projects.results.length / projectsPerPage)
    setCurrentPage(
      currentPage < numberOfPages - 1 ? currentPage + 1 : numberOfPages - 1,
    )
  }

  console.log(projects)

  return (
    <div className="bg-gray-200 dark:bg-slate-700">
      <div className="flex flex-col items-center min-h-screen px-6 justify-center">
        <HeadInfo title="Projects" />
        <h1 className="text-center font-extrabold text-4xl mb-4 mt-4">
          총 프로젝트:{' '}
          <span className="text-purple-400">{projects.results.length}개</span>
        </h1>

        <div className="flex flex-col items-center w-full">
          <div className="flex items-center justify-between w-full mt-2 xs:mt-0">
            {/* <!-- Buttons --> */}
            <ProjectBtn onClick={prevPage}>←</ProjectBtn>

            <div className="flex items-center justify-center">
              {shownProject.map((project: any, index: any) => {
                const isCurrent = index === (currentPage === 0 ? 0 : 1)
                const opacity = isCurrent ? 1 : 0.5
                const scale = isCurrent ? 1 : 0.8

                return (
                  <div
                    key={project.id}
                    style={{ opacity, transform: `scale(${scale})` }}
                  >
                    <ProjectsItem key={project.id} data={project} />
                  </div>
                )
              })}
            </div>

            <ProjectBtn onClick={nextPage}>→</ProjectBtn>
          </div>
        </div>
      </div>
    </div>
  )
}

// 빌드 타임에 호출되서 데이터를 가져온 다음에 화면에 렌더링이 됨
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
    data: { page_size: 100 },
  }

  let projects

  try {
    const response = await axios.request(options)
    projects = await response.data
    console.log(projects)
  } catch (error) {
    console.error(error)
  }

  return {
    props: { projects },
  }
}

export default Projects
