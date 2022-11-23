import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Custom404: React.FC = () => {
  return (
    <section className="container px-6">
      <div className="grid grid-cols-2 gap-20 items-center justify-center">
        <div>
          <h1 className="text-4xl mb-2">404</h1>
          <p className="mt-10 mb-10 text-justify">
            Something went wrong! Looks like you have reached a page which does
            not exist. Please click the link below to navigate back to home page
          </p>
          <Link href="/">
            <a
              className="inline-flex p-6 py-4 rounded-full
           hover:bg-gray-300 hover:text-gray-800
           dark:hover:bg-gray-600 dark:hover:text-gray-100
          bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800 transition-all"
            >
              Visit Home page
            </a>
          </Link>
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

export default Custom404
