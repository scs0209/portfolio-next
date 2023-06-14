/* eslint-disable */
import Image from 'next/legacy/image'
import ProjectTag from './project-tag'
import { Tag } from '@/types'
import HeadInfo from '../common/HeadInfo'

const ProjectsItem = ({ data }: any) => {
  const projectTitle = data.properties.name.title[0].plain_text
  const githubLink = data.properties.github.url
  const description = data.properties.description.rich_text[0].plain_text
  const imgSrc = data.cover.file?.url || data.cover.external?.url
  const tags: Tag[] = data.properties.tag.multi_select
  console.log(tags)
  const start = data.properties.workPeriod.date.start
  let end = data.properties.workPeriod.date.end
  if (!end) {
    end = '작업 중'
  }

  const diffDate = (start: any, end: any) => {
    const startDateStringArray = start.split('-')
    const endDateStringArray = end.split('-')

    const startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2],
    )
    const endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2],
    )

    const diffInMs = Math.abs(Number(endDate) - Number(startDate))
    const result = diffInMs / (1000 * 60 * 60 * 24)
    if (isNaN(result)) {
      return '작업 중'
    }

    return `${result}일`
  }

  return (
    <>
      <HeadInfo title="Projects" />
      <div className="flex flex-col m-3 bg-purple-400 rounded-xl transform hover:scale-105 transition duration-300 ease-in-out shadow hover:shadow-lg dark:bg-slate-500 dark:border-gray-200/50 dark:hover:shadow-gray-400/50">
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          width="100"
          height="60"
          layout="responsive"
          objectFit="none"
          quality={100}
          alt="cover-image"
        />
        <div className="p-6 flex flex-col">
          <h1 className="font-bold text-xl text-pink-950 dark:text-black">
            {projectTitle}
          </h1>
          <h3 className="text-xs mt-2 text-white">{description}</h3>
          <a href={githubLink} className="mt-3 mb-3">
            <span className="px-4 py-0.5 inline-flex items-center text-sm rounded-full text-rose-500 border border-rose-500 hover:text-pink-400 hover:border-pink-400 undefined dark:text-gray-700 dark:border-gray-700 dark:hover:text-black dark:hover:border-black">
              Github
            </span>
          </a>
          <h3 className="text-xs mt-2 text-white">
            작업기간: {`${start} ~ ${end}`} (총: {diffDate(start, end)})
          </h3>
          <div className="flex flex-row flex-wrap">
            {tags.map((tag: Tag) => {
              return <ProjectTag key={tag.id} tag={tag} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsItem
