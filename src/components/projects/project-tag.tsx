import { VFC } from 'react'
import { Tag } from '@/types'

interface Props {
  tag: Tag
}

const ProjectTag: VFC<Props> = ({ tag }) => {
  return (
    <div>
      <span className="mr-2 mt-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-rose-900 rounded-full dark:bg-slate-700 dark:text-white">
        {tag.name}
      </span>
    </div>
  )
}

export default ProjectTag