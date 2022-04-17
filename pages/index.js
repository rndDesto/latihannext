import Heading from '@/elements/Heading'
import Head from 'next/head'
import Link from 'next/link'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Heading title='Home Page'/>
    <Link href="/about">about page</Link>
    </div>
  )
}
