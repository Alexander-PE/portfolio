import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className='text-white'>
      <Head>
        <title>Alexander's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>



    </div>
  )
} 
