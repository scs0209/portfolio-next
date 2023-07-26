/* eslint-disable */
import AnimationPage from '@/components/animation'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  // 애니메이션 상태를 관리하는 State입니다.
  const [state, setState] = useState({
    show: false,
    key: 'page',
    route: '',
  })

  // 페이지를 로드하는 동안 애니메이션 상태와 키 값을 변경합니다.
  const router = useRouter()

  const minimumDelay = 500 // 페이지 전환 애니메이션 최소 지속 시간
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState({
        ...state,
        show: true,
        key: 'page',
      })
    }
    const handleRouteChangeComplete = async (url: any) => {
      await new Promise((resolve) => setTimeout(resolve, minimumDelay)) // 최소 지속 시간 만큼 대기
      setState({
        ...state,
        show: false,
        key: url.substring(1),
        route: url.substring(1),
      })
    }
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class">
      <AnimationPage>
        <div
          className={`transition duration-500 ease-out-opacity ${
            state.show ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Component {...pageProps} />
        </div>
      </AnimationPage>
    </ThemeProvider>
  )
}
