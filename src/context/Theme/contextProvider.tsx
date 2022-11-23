import React, { useReducer } from 'react'
import { ThemeContext } from './context'
import { contextReducer } from './contextReducer'
import { defaultTheme } from './type'

interface Props {
  children: React.ReactNode
}

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, defaultTheme)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
