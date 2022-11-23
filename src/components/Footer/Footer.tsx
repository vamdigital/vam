import Link from 'next/link'
import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="container flex justify-between items-center p-6 w-full">
      <div className="flex">
        <p className="text-sm">Made in England</p>
      </div>

      <div className="flex">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} VAM Digital Limited.
        </p>
      </div>

      <nav className="flex gap-4">
        <Link href="/colophon">
          <a className="hover:underline underline-offset-4 text-sm">Colophon</a>
        </Link>
        <Link href="/credits">
          <a className="hover:underline underline-offset-4 text-sm">Credits</a>
        </Link>
      </nav>
    </footer>
  )
}
