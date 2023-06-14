import { Tag } from '@/types'
import { VFC } from 'react'

interface Props {
  tag: Tag
}

const ProjectTag: VFC<Props> = ({ tag }) => {
  return (
    <div>
      <span className="mr-2 mt-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-rose-200 text-rose-900 rounded-full dark:bg-slate-700 dark:text-white">
        {tag.name}
      </span>
    </div>
  )
}

export default ProjectTag
