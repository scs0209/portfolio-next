import axios from 'axios'
import { DATABASE_ID, NOTION_TOKEN } from '../../config'
import HeadInfo from '@/components/common/HeadInfo'
import ProjectsItem from '@/components/project-item'

const Projects = ({ projects }: any) => {
  console.log(projects)

  return (
    <div className="bg-gray-200 dark:bg-black">
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
        <HeadInfo title="Projects" />
        <h1 className="text-center font-extrabold text-4xl mb-4 mt-4">
          총 프로젝트:{' '}
          <span className="text-purple-400">{projects.results.length}개</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-5 sm:w-full">
          {projects.results.map((project: any) => {
            return <ProjectsItem key={project.id} data={project} />
          })}
        </div>
      </div>
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

  let projects

  try {
    const response = await axios.request(options)
    projects = await response.data
    console.log(projects)
  } catch (error) {
    console.error(error)
  }

  return {
    props: { projects },
  }
}

export default Projects
