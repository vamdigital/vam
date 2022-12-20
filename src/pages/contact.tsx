import React, { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import dynamic from 'next/dynamic'

// To prevent it from being ssr rendered
const LayoutComponent = dynamic(
  () => import('../components/Layout/Layout').then(mod => mod.Layout),
  {
    ssr: false,
  }
)

export const Contact: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-start min-h-[70vh]">
      <h1 className="text-4xl">Contact</h1>
      <p>would love to interact with you..</p>
    </div>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <LayoutComponent>{page}</LayoutComponent>
}

export default Contact
