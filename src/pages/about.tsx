import Image from 'next/image'
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

export const About: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-start min-h-[70vh]">
      <section className="grid grid-cols-12 gap-8 w-full place-items-center">
        <article className="col-start-1 col-span-8">
          <h1 className="text-4xl">About</h1>
          <p>an introduction into my space</p>
          <p className="mt-10 mb-4 text-justify">
            Hi, I&apos;m Vaibhav, a Front-end engineer who is passionate about
            the art and science of the web, which connects us through its
            inter-woven network. I began my journey into web development by
            designing UI and building interactive websites using Adobe Photoshop
            and Macromedia Flash in the late 90s&apos; As the years went by I
            embraced the power and potential of Javascript which gave a perfect
            balance of creativity and functionality which is essential to create
            a robust web solution. Then came along the front-end frameworks like
            angular, emberJS, React, NEXTJS with state management tools like
            Redux.{' '}
          </p>
          <p className="text-justify mb-4">
            Currently I am using React, Typescript, NEXTJS, RTK &amp; RTKQ
            within a mono-repo created using NX framework. Testing framework of
            choice is Jest, React Testing library and Cypress.
          </p>
          <p className="text-justify mb-4">
            In my spare time, I love strumming few strings on guitar ( still in
            learning stage ) and playing with my kids. I also like to draw and
            doodle.
          </p>
          <p className="text-justify">
            The goal of this site is to jot down my learning in form of a
            Journal to remind myself time and again where it all began and to
            reflect and ponder upon in retrospect and also to share my
            experience with the wider dev community. I also use this as a
            platform to showcase my humble ventures.
          </p>
        </article>
        <aside className="lg:col-start-10 md:col-span-4 lg:col-span-3 p-4 bg-gray-200 dark:bg-gray-700  rounded-xl mt-1 text-center py-10">
          <div className="flex justify-center">
            <Image
              src="/assets/general/vaibhav.jpg"
              width={125}
              height={125}
              className="rounded-full grayscale"
              alt="Vaibhav"
            />
          </div>
          <p className="font-bold text-gray-700 dark:text-gray-100 text-center mt-4">
            Vaibhav A Shringarpure
          </p>
          <em className="text-xs leading-4 not-italic inline-flex mb-8 text-gray-700 dark:text-gray-300">
            Son / Brother / Husband / Father / Developer
          </em>
          <a
            href="/assets/general/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-4 py-2 dark:bg-gray-200 dark:text-gray-700 bg-gray-700 text-gray-100 hover:bg-gray-300 hover:text-gray-700 hover:dark:bg-gray-500 hover:dark:text-gray-200 transition-all rounded-full text-sm text-center inline-flex"
          >
            Download Resume
          </a>
        </aside>
      </section>
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <LayoutComponent>{page}</LayoutComponent>
}

export default About
