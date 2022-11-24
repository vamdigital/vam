import Link from 'next/link'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="container flex justify-between items-center pt-12 pb-6 px-6 md:p-6 w-full gap-3">
      <div className="flex">
        <p className="text-xs md:text-sm">Made in England</p>
      </div>

      <div className="flex text-center">
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} VAM Digital Limited.
        </p>
      </div>

      <nav className="flex gap-2 md:gap-4">
        <Link href="/colophon">
          <a className="hover:underline underline-offset-4 text-xs md:text-sm">
            Colophon
          </a>
        </Link>
        <Link href="/credits">
          <a className="hover:underline underline-offset-4 text-xs md:text-sm">
            Credits
          </a>
        </Link>
      </nav>
    </footer>
  )
}
