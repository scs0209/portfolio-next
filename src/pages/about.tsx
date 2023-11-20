/* eslint-disable */
import React, { useState } from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiRedux,
  SiThreedotjs,
} from 'react-icons/si'
import { motion } from 'framer-motion'
import ParticlesContainer from '@/components/About/ParticlesContainer'
import Animation from '@/components/Main/Animation'
import { fadeIn } from '../../variants'

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <SiRedux />,
          <SiThreedotjs />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'educations',
    info: [
      {
        title: 'Chemistry - Soon Chun Hyang univ, Asan',
        stage: '2015.03 - 2022.08',
      },
      {
        title: 'pre onboarding education - Wanted Platform',
        stage: '2023.06 - 2023.08',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Frontend Developer - Procyan.co',
        stage: '2023.10 - current',
      },
    ],
  },
  {
    title: 'qualifications',
    info: [
      {
        title: '정보처리기사',
        stage: '2022.11',
      },
      {
        title: 'TOEIC - 755',
        stage: '2022.05',
      },
      {
        title: 'TOEIC Speaking Test - 140(IH)',
        stage: '2023.11',
      },
    ],
  },
]

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="bg-[#12131D] text-white text-center xl:text-left h-screen w-full">
      <ParticlesContainer />
      <div className="p-[15px] max-w-screen-lg mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center"
        >
          <Animation />
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl font-bold"
          >
            Where technology meets creativity, I am a frontend developer
            innovating the <span className="text-accent">user experience.</span>
          </motion.h2>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[800px] p-4 bg-white bg-opacity-25 rounded-xl border border-gray-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] border-opacity-18 filter[blur-4px] backdrop-filter[blur-4px] overflow-y-auto"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    index === i &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                  } cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(i)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col justify-center xl:items-start">
            {aboutData[index].info.map((item, i) => {
              return (
                <ul
                  key={i}
                  className="flex-1 flex md:flex-row max-w-max gap-x-2 text-white/60"
                >
                  <li className=" flex items-baseline gap-6 pb-5 relative">
                    <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        className="bi bi-circle-fill fill-gray-400"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-light mb-2 md:mb-0">{item.title}</p>
                      {/* @ts-ignore */}
                      <p className="mt-2">{item?.stage}</p>
                      <div className="flex gap-x-4">
                        {/* @ts-ignore */}
                        {item.icons?.map((icon, iconIndex) => {
                          return (
                            <div
                              key={iconIndex}
                              className="text-2xl text-white mt-2"
                            >
                              {icon}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </li>
                </ul>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
