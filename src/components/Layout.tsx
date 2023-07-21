import AnimationPage from './animation'

const Layout = ({ children }: any) => {
  return (
    <>
      <AnimationPage />
      <div className="h-screen w-full">{children}</div>
    </>
  )
}

export default Layout
