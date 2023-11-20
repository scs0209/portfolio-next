/* eslint-disable */
import axios from 'axios'
import HeadInfo from '@/components/common/HeadInfo'
import useToggle from '@/hooks/useToggle'
import { DATABASE_ID, NOTION_TOKEN } from '../../config'
import Projects from '@/components/projects/projects'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Home({ projects }: any) {
  const [showQualification, openQualification, closeQualification] =
    useToggle(false)
  const [showSkill, openSkill, closeSkill] = useToggle(false)

  return (
    <>
      <HeadInfo title="Home" />
      <section className="text-gray-600 body-font dark:text-white">
        <Hero openQualification={openQualification} openSkill={openSkill} />
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
          direction: 'descending',
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
