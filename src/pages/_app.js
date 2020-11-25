import '../styles/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(router)
  return (
    <>
      <Component {...pageProps} />
      <button onClick={() => router.push('/')}>戻る</button>
    </>
  )
}

export default MyApp
