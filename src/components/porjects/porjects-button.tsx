import { FC, ReactNode } from 'react'

interface Props {
  onClick: () => void
  children: ReactNode
}

const ProjectBtn: FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="items-center px-4 py-2 text-sm font-medium text-white bg-purple-800 rounded-full hover:bg-purple-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      onClick={onClick}
    >
      <span className="w-5 h-5 text-base font-bold">{children}</span>
    </button>
  )
}

export default ProjectBtn
