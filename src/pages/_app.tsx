/* eslint-disable */
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Transition from '@/components/Transition'
import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ThemeProvider attribute="class">
      {/* <AnimationPage> */}
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Header />
          <Nav />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      {/* </AnimationPage> */}
    </ThemeProvider>
  )
}
