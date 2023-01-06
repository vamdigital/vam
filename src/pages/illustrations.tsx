import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from './_app'
import fs from 'fs'
import getConfig from 'next/config'
import path from 'path'

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
  const assetsDir = 'assets/journal' // change this to assets/illustrations when we start putting illustration 
  const { serverRuntimeConfig } = getConfig()
  const dir = path.join(serverRuntimeConfig.PROJECT_ROOT, './public', assetsDir)
  const fileNames = fs.readdirSync(dir)

  return { fileNames }
}

export default IllustrationPage
