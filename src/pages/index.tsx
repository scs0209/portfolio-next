import Image from 'next/image'
import { useCallback, useState } from 'react'

export default function Home() {
  const [showAboutMe, setShowAboutMe] = useState(false)

  const toggleAboutMe = useCallback(() => {
    setShowAboutMe((prev) => !prev)
  }, [])

  return (
    <section className="bg-gray-200 text-gray-600 body-font dark:text-white">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <p
          className={`${
            !showAboutMe ? 'opacity-100 animate-pulse' : 'opacity-0'
          } text-center font-bold lg:w-2/3 mb-10  w-full transition-opacity duration-500 ease-in-out`}
        >
          저를 클릭해주세요
          <span className="mx-1 inline-block">↓</span>
        </p>
        <Image
          onClick={toggleAboutMe}
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-center rounded-full"
          alt="hero"
          src="/images/이력서사진.jpg"
          width={500}
          height={500}
        />

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
            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg dark:bg-slate-500">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
