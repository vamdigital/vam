import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from './_app'
import { server } from 'config'

// To Prevent it from being ssr rendered
const LayoutComponent = dynamic(() => import('../components/Layout/Layout').then(mod => mod.Layout), { ssr: false })

export const IllustrationPage: NextPageWithLayout = ({ fileNames }) => {
  return (
    <div>
      Hello world
      <pre>{JSON.stringify(fileNames, null, 2)}</pre>
    </div>
  )
}

IllustrationPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutComponent>{page}</LayoutComponent>
}

IllustrationPage.getInitialProps = async function() {

  const res = await fetch(`${server}/api/fileNames`)
  const result = await res.json()
  const { fileNames } = result
  return { fileNames }
}

export default IllustrationPage
