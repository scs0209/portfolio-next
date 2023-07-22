import { VFC } from 'react'
import Animation from './Main/Animation'

interface Props {
  openQualification: () => void
  openSkill: () => void
}

const Hero: VFC<Props> = ({ openQualification, openSkill }) => {
  return (
    <section className="bg-transparent">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            About Me
          </h1>
          <p className="max-w-2xl mb-6 font-bold text-slate-400 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            웹 개발자로서 제가 만든 블로그 사이트를 통해 제가 가진 프론트엔드
            개발 능력과 UI/UX 디자인을 해봤습니다.
            <br />
            저는 항상 적극적이고 긍정적인 마인드로 일을 처리하며, 사용자가
            좋아할 만한 웹사이트를 만드는 데에 열정을 가지고 있습니다. 또한,
            사용자의 편의성과 만족도를 고려하여 디자인과 기능을 개선해 나가는
            것을 목표로 하고 있습니다.
          </p>
          <button
            onClick={openQualification}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-rose-400 hover:bg-rose-600 focus:ring-4 focus:ring-rose-300"
          >
            Qualification
          </button>
          <button
            onClick={openSkill}
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Skills
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Animation />
        </div>
      </div>
    </section>
  )
}

export default Hero
