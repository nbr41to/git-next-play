import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className={styles.title}>
        ようこそNextjs
      </h1>
      <footer>フッターだよ</footer>
    </div>
  )
}
