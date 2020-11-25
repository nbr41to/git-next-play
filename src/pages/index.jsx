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
        <h1>
          ようこそNextjs
        </h1>
      </header>

      <footer className="footer">
        <small>
          copyright @progLearning
        </small>
      </footer>

    </div>
  )
}
