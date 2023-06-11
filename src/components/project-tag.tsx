const ProjectTag = ({ tag }: any) => {
  return (
    <div>
      <span
        className={`mr-2 mt-2 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-rose-200 text-rose-900 rounded-full`}
      >
        {tag.name}
      </span>
    </div>
  )
}

export default ProjectTag
