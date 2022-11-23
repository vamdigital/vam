import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { ThemeSwitch } from '@components/ThemeSwitch'
import { useThemeContext } from 'context/Theme/context'
import { ActionType } from 'context/Theme/type'
import React, { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { state, dispatch } = useThemeContext()

  useEffect(() => {
    const themeClasses = ['dark', 'light']
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      document.documentElement.classList.remove(...themeClasses)
      document.documentElement.classList.add(state.theme)
    }
  }, [state.theme])

  const clickHandler = () => () => {
    if (state.theme === ActionType.DARK) {
      dispatch(ActionType.LIGHT)
    } else {
      dispatch(ActionType.DARK)
    }
  }

  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <Header>
        <ThemeSwitch theme={state.theme} clickHandler={clickHandler()} />
      </Header>
      <main className="flex container w-full">
        <section className="px-6 w-full">{children}</section>
      </main>
      <Footer />
    </div>
  )
}
