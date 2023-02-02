import Head from 'next/head'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid';
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export default function Home() {
  return (
    
    <div className='bg-[rgb(36,36,36)] text-white h-screen overflow-x-hidden snap-y snap-mandatory overflow-y-scroll z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40'>
      <Head>
        <title>Alexander's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact/>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <HomeIcon className='h-8 w-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'/>
          </div>
        </footer>
      </Link>
 
    </div>
  )
} 
