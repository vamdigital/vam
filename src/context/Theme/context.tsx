import { createContext, useContext } from 'react'
import { ContextType } from './type'

export const ThemeContext = createContext<ContextType | null>(null)

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('ThemeContext must be wrapped in the Theme')
  }
  return ctx
}
