import React from 'react'

interface Props {
  children: React.ReactNode
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<
  Props &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ children, clickHandler, ...rest }) => {
  return (
    <button
      className="p-6 py-4 rounded-full bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-gray-800"
      onClick={clickHandler}
      {...rest}
    >
      {children}
    </button>
  )
}
