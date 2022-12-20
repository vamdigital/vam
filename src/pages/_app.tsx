import '../../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from 'context/Theme/contextProvider'

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)
  return (
    <>
      <ThemeContextProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeContextProvider>
    </>
  )
}
// import type { AppProps } from 'next/app'
// import Head from 'next/head'
// import { ThemeContextProvider } from 'context/Theme/contextProvider'
// import dynamic from 'next/dynamic'

// // To prevent it from being ssr rendered
// const LayoutComponent = dynamic(
//   () => import('../components/Layout/Layout').then(mod => mod.Layout),
//   {
//     ssr: false,
//   }
// )

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width" />
//         <title>VAM Digital</title>
//       </Head>
//       <ThemeContextProvider>
//         <LayoutComponent>
//           <Component {...pageProps} />
//         </LayoutComponent>
//       </ThemeContextProvider>
//     </>
//   )
// }

// export default MyApp
