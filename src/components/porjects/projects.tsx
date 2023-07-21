/* eslint-disable */
import { VFC } from 'react'
import { Timeline } from 'flowbite-react'
import Link from 'next/link'
import { HiCalendar } from 'react-icons/hi'
import ProjectsItem from '@/components/porjects/project-item'

interface Props {
  projects: any
}

const Projects: VFC<Props> = ({ projects }) => {
  return (
    <div className="dark:bg-slate-700 w-full">
      <h1 className="text-center font-extrabold text-4xl p-4">
        총 프로젝트:{' '}
        <span className="text-purple-400">{projects.results.length}개</span>
      </h1>
      <div className="max-w-screen-xl bg-gray-400 bg-opacity-50 mx-auto border-solid border-[1px] border-gray-300 rounded-xl px-6">
        <Timeline className="m-3">
          {projects.results.map((project: any) => {
            return (
              <div key={project.id}>
                <ProjectsItem data={project} />
              </div>
            )
          })}
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Body>
            <Link
              href="/contact"
              className="ml-8 block py-2 pl-3 pr-4 text-white font-bold rounded hover:bg-gray-100 hover:text-rose-400 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Contact Me
            </Link>
          </Timeline.Body>
        </Timeline>
      </div>
    </div>
  )
}

export default Projects
