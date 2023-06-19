import { useEffect, useState } from 'react'
import axios from 'axios'
import { Transition } from '@headlessui/react'
import HeadInfo from '@/components/common/HeadInfo'
import ProjectsItem from '@/components/porjects/project-item'
import ProjectBtn from '@/components/porjects/porjects-button'
import { DATABASE_ID, NOTION_TOKEN } from '../../config'

const Projects = ({ projects }: any) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [showTransition, setShowTransition] = useState(false)
  const projectsPerPage = 1

  const shownProject = projects.results.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage,
  )

  const prevPage = () => {
    setCurrentPage(currentPage > 0 ? currentPage - 1 : 0)
    setShowTransition(false)
  }

  const nextPage = () => {
    const numberOfPages = Math.ceil(projects.results.length / projectsPerPage)
    setCurrentPage(
      currentPage < numberOfPages - 1 ? currentPage + 1 : numberOfPages - 1,
    )
    setShowTransition(false)
  }

  useEffect(() => {
    setShowTransition(true)
  }, [currentPage])

  console.log(shownProject)

  return (
    <div className="bg-gray-200 dark:bg-slate-700 w-full">
      <h1 className="text-center font-extrabold text-4xl p-4">
        총 프로젝트:{' '}
        <span className="text-purple-400">{projects.results.length}개</span>
      </h1>
      <div className="flex flex-col items-center min-h-screen px-6 justify-center">
        <HeadInfo title="Projects" />
        <div className="flex items-center w-full">
          <div className="flex items-center justify-between w-full mt-2 xs:mt-0">
            {/* <!-- Buttons --> */}
            <ProjectBtn onClick={prevPage}>←</ProjectBtn>

            {/* <div className="flex items-center justify-center w-full"> */}
            {shownProject.map((project: any, index: any) => {
              return (
                <div key={project.id}>
                  <Transition
                    show={showTransition}
                    enter="transform transition ease-in-out duration-1000"
                    enterFrom="translate-x-full opacity-0"
                    enterTo="translate-x-0 opacity-100"
                    leave="transform transition ease-in-out duration-1000"
                    leaveFrom="translate-x-0 opacity-100"
                    leaveTo="translate-x-full opacity-0"
                    className="w-full"
                  >
                    <ProjectsItem data={project} />
                  </Transition>
                </div>
              )
            })}
            {/* </div> */}

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
    data: {
      sorts: [
        {
          property: 'workPeriod',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    },
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
