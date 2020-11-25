import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
      <h1 className={styles.title}>
        ようこそNextjs
      </h1>
      </header>
      
      <footer>footerです</footer>
      
    </div>
  )
}
