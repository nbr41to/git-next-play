import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Link href="/"><a>戻る</a></Link>
    </>
  )
}

export default MyApp
