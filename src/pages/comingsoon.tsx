import Image from 'next/image'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'
import dynamic from 'next/dynamic'

// To prevent it from being ssr rendered
const CustomLayoutComponent = dynamic(
  () =>
    import('../components/CustomLayout/CustomLayout').then(
      mod => mod.CustomLayout
    ),
  {
    ssr: false,
  }
)

export const ComingSoon: NextPageWithLayout = () => {
  return (
    <section className="container px-6 h-[100vh] flex justify-center items-center">
      <div className="grid grid-cols-2 gap-20 items-center justify-center">
        <div>
          <h1 className="text-4xl mb-2">Coming Soon</h1>
          <p className="mt-10 mb-10 text-justify">
            Our team is working hard to get the website setup. Please visit us
            again soon
          </p>
        </div>
        <div>
          <Image
            src="/assets/general/404.png"
            width={580}
            height={550}
            alt="home page artwork"
          />
        </div>
      </div>
    </section>
  )
}

ComingSoon.getLayout = function getLayout(page: ReactElement) {
  return <CustomLayoutComponent>{page}</CustomLayoutComponent>
}

export default ComingSoon
