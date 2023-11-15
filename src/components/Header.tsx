/* eslint-disable */
import Link from 'next/link'
import ToggleBtn from './Toggle-Button'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/legacy/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenuOpen = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const updateHeaderState = useCallback(() => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(true)
    } else {
      setIsMenuOpen(false)
    }
  }, [])

  useEffect(() => {
    updateHeaderState()
    window.addEventListener('resize', updateHeaderState)

    return () => {
      window.removeEventListener('resize', updateHeaderState)
    }
  }, [updateHeaderState])

  return (
    <>
      <header className="bg-transparent text-gray-600 body-font fixed top-0 z-20 w-full">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo2.svg" alt="logo" width={26} height={26} />
            <span className="self-center text-2xl ml-3 font-semibold text-white whitespace-nowrap dark:text-white">
              SCS's Portfolio
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            onClick={toggleMenuOpen}
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 hover:text-rose-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? '' : 'hidden'
            } w-full md:block md:w-auto text-center`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col items-center font-medium mt-4 rounded-lg bg-purple-400 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-blue-400 font-bold rounded hover:bg-gray-100 hover:text-rose-400 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  연락처
                </Link>
              </li>
              <li>
                <span className="block rounded md:hover:bg-transparent md:border-0">
                  <ToggleBtn />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
