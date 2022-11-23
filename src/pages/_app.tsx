import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeContextProvider } from 'context/Theme/contextProvider'
import dynamic from 'next/dynamic'

// To prevent it from being ssr rendered
const LayoutComponent = dynamic(
  () => import('../components/Layout/Layout').then(mod => mod.Layout),
  {
    ssr: false,
  }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>VAM Digital</title>
      </Head>
      <ThemeContextProvider>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </ThemeContextProvider>
    </>
  )
}

export default MyApp
