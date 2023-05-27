import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {
  return (
    <main>
      <Head>
        <title>Drel The V</title>
        <meta name="keywords" content='v, Drel, Genius'/>
      </Head>
    </main>
  )
}
