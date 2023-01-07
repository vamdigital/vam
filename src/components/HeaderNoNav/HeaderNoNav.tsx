import Link from 'next/link'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export const HeaderNoNav: React.FC<Props> = ({ children }) => {
  return (
    <header className="flex container p-8 md:p-6 w-full justify-between">
      <h4 className="font-bold text-2xl py-1 text-gray-800 dark:text-white">
        <Link href="/">
          <a className="hover:underline underline-offset-8">VAM Digital</a>
        </Link>
      </h4>
      {children}
    </header>
  )
}
