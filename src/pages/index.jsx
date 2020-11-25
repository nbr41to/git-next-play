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

      <header className="header">
        <h1>
          ようこそNextjs
        </h1>
      </header>
      <nav>
        <h2>MENU</h2>
        <ul>
          <li><Link href="/about"><a>詳細</a></Link></li>
          <li><Link href="/form"><a>お問い合わせ</a></Link></li>
        </ul>
      </nav>

      <footer className="footer">
        <small>
          copyright @progLearning
        </small>
      </footer>

    </div>
  )
}
