/* eslint-disable */
import { VFC } from 'react'
import { Timeline } from 'flowbite-react'
import ProjectsItem from '@/components/porjects/project-item'

interface Props {
  projects: any
}

const Projects: VFC<Props> = ({ projects }) => {
  return (
    <div className="w-full">
      <h1 className="text-center font-extrabold text-4xl p-4">
        총 프로젝트:{' '}
        <span className="text-rose-400">{projects.results.length}개</span>
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
        </Timeline>
      </div>
    </div>
  )
}

export default Projects
