/* eslint-disable */
import Link from 'next/link'
import ToggleBtn from './Toggle-Button'

const Header = () => {
  return (
    <>
      <header className="bg-purple-400 text-gray-600 body-font dark:bg-slate-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-white ml-3 text-xl">SCS's Portfolio</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/projects"
              className="text-white mr-5 hover:text-pink-900 font-bold"
            >
              내 프로젝트
            </Link>
            <Link
              href="/contact"
              className="text-white mr-5 hover:text-pink-900 font-bold"
            >
              연락처
            </Link>
          </nav>
          <ToggleBtn />
        </div>
      </header>
    </>
  )
}

export default Header
