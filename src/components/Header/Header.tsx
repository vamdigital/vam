import { Navigation } from '@components/Navigation'
import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="flex flex-col container p-8 md:p-6 w-full">
      <h4 className="font-bold text-2xl text-gray-800 dark:text-white md:mb-2">
        <Link href="/">
          <a className="hover:underline underline-offset-8">VAM Digital</a>
        </Link>
      </h4>
      <div className="flex justify-between items-center mb-8 md:mb-0">
        <Navigation />
        {children}
      </div>
    </header>
  )
}
