import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const ProjectBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 absolute z-50 right-4 bottom-10">
      <Link
        href={'/projects'}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group"
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt="project button"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  )
}

export default ProjectBtn
