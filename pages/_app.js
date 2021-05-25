import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Food Delivery</title>
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
