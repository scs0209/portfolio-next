import axios from 'axios'
import { DATABASE_ID, NOTION_TOKEN } from '../../config'

const Projects = ({ projectNames }: any) => {
  console.log(projectNames)

  return (
    <div>
      <h1>프로젝트 페이지</h1>
    </div>
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
    data: { page_size: 100 },
  }

  let projectNames

  try {
    const response = await axios.request(options)
    const projects = await response.data

    projectNames = projects.results.map((project: any) => {
      return project.properties.name.title[0].plain_text
    })
  } catch (error) {
    console.error(error)
  }

  return {
    props: { projectNames },
  }
}

export default Projects
