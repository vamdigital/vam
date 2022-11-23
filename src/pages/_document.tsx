import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8"></meta>
        <meta name="description" content="VAM Digital" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
