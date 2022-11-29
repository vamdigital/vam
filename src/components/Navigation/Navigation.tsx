import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const Navigation: React.FC = () => {
  const router = useRouter()
  return (
    <nav className="mr-2">
      <ul className="flex justify-center items-center gap-2 lg:gap-4">
        <li className="font-medium text-sm md:text-base">
          <Link href="/">
            <a
              className={`hover:underline underline-offset-4 ${
                router.pathname === '/' ? 'underline underline-offset-4' : ''
              }`}
            >
              Home
            </a>
          </Link>
        </li>
        {/* <li className="font-medium text-sm md:text-base">
          <Link href="/journal">
            <a
              className={`hover:underline underline-offset-4 ${
                router.pathname.startsWith('/journal')
                  ? 'underline underline-offset-4'
                  : ''
              }`}
            >
              Journal
            </a>
          </Link>
        </li> */}
        <li className="font-medium text-sm md:text-base">
          <Link href="/about">
            <a
              className={`hover:underline underline-offset-4 ${
                router.pathname == '/about'
                  ? 'underline underline-offset-4'
                  : ''
              }`}
            >
              About
            </a>
          </Link>
        </li>
        <li className="font-medium text-sm md:text-base">
          <Link href="/contact">
            <a
              className={`hover:underline underline-offset-4 ${
                router.pathname === '/contact'
                  ? 'underline underline-offset-4'
                  : ''
              }`}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
