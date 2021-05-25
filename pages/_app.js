import '../styles/globals.scss';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Food Delivery</title>
        <link rel="icon" href="/favicon.icon" />
        </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
