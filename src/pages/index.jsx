import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <h1 className={styles.title}>
        ようこそNextjs
      </h1>
      <Link href="/about"><a>詳細</a></Link>
      <Link href="/form"><a>お問い合わせ</a></Link>
      <footer></footer>
      {/* 戻るボタン */}
    </div>
  )
}
