/* eslint-disable */
import { useCallback, useState } from 'react'
import Image from 'next/legacy/image'
import ProjectTag from './project-tag'
import { Tag } from '@/types'
import { Button, Card, CustomFlowbiteTheme, Timeline } from 'flowbite-react'
import { Transition } from '@headlessui/react'
import { HiCalendar } from 'react-icons/hi'

const customTheme: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'rounded-lg bg-slate-200 text-slate-400',
  },
}

const ProjectsItem = ({ data }: any) => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = useCallback(() => {
    setShowMore((prev) => !prev)
  }, [])

  const projectTitle = data.properties.name.title[0].plain_text
  const githubLink = data.properties.github.url
  const description = data.properties.description.rich_text[0].plain_text
  const imgSrc = data.cover?.file?.url || data.cover?.external?.url
  const tags: Tag[] = data.properties.tag.multi_select
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
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time className="text-gray-700">
            {`${start} ~ ${end}`} (총: {diffDate(start, end)})
          </Timeline.Time>
          <Timeline.Title className="text-xl text-gold items-center mb-3">
            {projectTitle}{' '}
            <a href={githubLink} target="_blank" className="mt-3 mb-2">
              <span className="px-3 py-0.5 text-sm fond-medium rounded-lg text-white border bg-gray-500 border-gray-500 hover:bg-pink-400 dark:border-gray-500 dark:bg-gray-500 dark:hover:text-black dark:hover:border-black">
                Github
              </span>
            </a>
          </Timeline.Title>
          <Timeline.Body>
            <div>{description} </div>
            <Button
              color="light"
              size="xs"
              className="mt-2"
              onClick={toggleShowMore}
            >
              {showMore ? '닫기' : '더보기'}
            </Button>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Transition
        show={showMore}
        enter="transform transition duration-700"
        enterFrom="translate-x-3 opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transform transition duration-700"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-3 opacity-0"
        className="max-w-sm min-h-full m-3"
      >
        <Card className="max-w-sm min-h-full" theme={customTheme}>
          <div className="flex flex-row flex-wrap">
            {tags.map((tag: Tag) => {
              return <ProjectTag key={tag.id} tag={tag} />
            })}
          </div>
        </Card>
      </Transition>
    </>
  )
}

export default ProjectsItem
