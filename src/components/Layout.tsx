import Header from './Header'
import AnimationPage from './animation'

const Layout = ({ children }: any) => {
  return (
    <>
      <AnimationPage />
      <Header />
      <div className="h-screen w-full">{children}</div>
    </>
  )
}

export default Layout
