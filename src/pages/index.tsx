/* eslint-disable */
import { useCallback, useState } from 'react'
import axios from 'axios'
import HeadInfo from '@/components/common/HeadInfo'
import Qualification from '@/components/Main/Qualification'
import Skill from '@/components/Main/Skill'
import useToggle from '@/hooks/useToggle'
import { DATABASE_ID, NOTION_TOKEN } from '../../config'
import Projects from '@/components/porjects/projects'
import Footer from '@/components/Footer'
import ToggleBtn from '@/components/Toggle-Button'

export default function Home({ projects }: any) {
  const [showAboutMe, setShowAboutMe] = useState(false)
  const [showQualification, openQualification, closeQualification] =
    useToggle(false)
  const [showSkill, openSkill, closeSkill] = useToggle(false)

  const toggleAboutMe = useCallback(() => {
    setShowAboutMe((prev) => !prev)
  }, [])

  return (
    <>
      <HeadInfo title="Home" />
      <section className="text-gray-600 body-font dark:text-white dark:bg-slate-700">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <p
            onClick={toggleAboutMe}
            className="text-4xl opacity-100 animate-pulse text-center text-gold font-bold lg:w-2/3 mb-10 w-full transition-opacity duration-500 ease-in-out"
          >
            창수의 포트폴리오
            <span className="mx-1 inline-block">↓</span>
          </p>
          <div className="relative -top-20 -right-80">
            <ToggleBtn />
          </div>
          <div
            className={`${
              showAboutMe ? 'opacity-100' : 'opacity-0'
            } text-center lg:w-2/3 w-full transition-opacity duration-500 ease-in-out`}
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              웹 개발자로서 제가 만든 블로그 사이트를 통해 제가 가진 프론트엔드
              개발 능력과 UI/UX 디자인을 해봤습니다.
              <br />
              저는 항상 적극적이고 긍정적인 마인드로 일을 처리하며, 사용자가
              좋아할 만한 웹사이트를 만드는 데에 열정을 가지고 있습니다. 또한,
              사용자의 편의성과 만족도를 고려하여 디자인과 기능을 개선해 나가는
              것을 목표로 하고 있습니다.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={openQualification}
                className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg dark:bg-slate-500"
              >
                Qualification
              </button>
              <button
                type="button"
                onClick={openSkill}
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Skills
              </button>
            </div>
          </div>
        </div>
        {showQualification && <Qualification onClose={closeQualification} />}
        {showSkill && <Skill onClose={closeSkill} />}
      </section>
      <Projects projects={projects} />
      <Footer />
    </>
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
  } catch (error) {
    console.error(error)
  }

  return {
    props: { projects },
  }
}
