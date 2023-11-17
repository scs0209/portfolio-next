import { motion } from 'framer-motion'
import React from 'react'
import ProjectSlider from '@/components/projects/ProjectSlider'
import { fadeIn } from '../../variants'
import Bauble from '@/components/projects/Baubble'

const Projects = () => {
  return (
    <>
      <Bauble />
      <div className="absolute mb-[30px] top-[30%] rounded-lg right-[25%] h-[50vh] text-white bg-primary/30 py-36 flex items-center pointer-events-none">
        <div className="mx-auto max-w-screen-lg">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial="initial"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-8"
              >
                My Projects
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial="initial"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                안녕하세요
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="initial"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[60%] pointer-events-auto"
            >
              <ProjectSlider />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
