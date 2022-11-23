import Link from 'next/link'
import React from 'react'

export const Navigation: React.FC = () => {
  return (
    <nav className="mr-2">
      <ul className="flex justify-center items-center gap-2 lg:gap-4">
        <li className="font-medium text-base">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
        </li>
        <li className="font-medium text-base">
          <Link href="/journal" className="hover:underline underline-offset-4">
            Journal
          </Link>
        </li>
        <li className="font-medium text-base">
          <Link href="/about" className="hover:underline underline-offset-4">
            About
          </Link>
        </li>
        <li className="font-medium text-base">
          <Link href="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
