import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VAM Digital - Home </title>
        <meta name="description" content="A digital dwelling of VAM Digital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-2 gap-20 items-center justify-center">
        <div>
          <h1 className="text-4xl mb-2">Hello, I&apos;m Vaibhav </h1>
          <p>Welcome to my digital landscape.</p>
          <p className="mt-10 mb-10 text-justify">
            I’m a Front-End Developer, working under the brand of VAM Digital. I
            have been working in the digital space for almost a decade now and
            been part of various projects and industries from healthcare patient
            engagement agencies to digital advertising agencies to famous
            fashion labels to name a few. Over the years, I have gained
            experience designing and developing user-centric UI solutions to the
            most complex user journies.
          </p>
          <Link href="/journal">
            <a
              className="inline-flex p-6 py-4 rounded-full
               hover:bg-gray-300 hover:text-gray-800
               dark:hover:bg-gray-600 dark:hover:text-gray-100
              bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800 transition-all"
            >
              Read my journal
            </a>
          </Link>
        </div>

        <div>
          <Image
            src="/assets/general/home-hero.png"
            width={580}
            height={550}
            alt="home page artwork"
          />
        </div>
      </div>
    </>
  )
}

export default Home
