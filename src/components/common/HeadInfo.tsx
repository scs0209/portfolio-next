import Head from 'next/head'
import React, { VFC } from 'react'

type HeaderProps = {
  title: string
  content: string
  keyword: string
}

const HeadInfo: VFC<HeaderProps> = ({ title, content, keyword }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="keyword" content={keyword} />
    </Head>
  )
}

export default HeadInfo
