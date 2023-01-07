import Head from 'next/head'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen overflow-x-hidden snap-y snap-mandatory overflow-y-scroll z-0'>
      <Head>
        <title>Alexander's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />

 
    </div>
  )
} 
