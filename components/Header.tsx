import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {}

const left = {
    init: { x: -500, opacity: 0, scale: 0.5 },
    anim: { x: 0, opacity: 1, scale: 1},
    trans: { duration: 1.5 }
}

const right = {
    init: { x: 500, opacity: 0, scale: 0.5 },
    anim: { x: 0, opacity: 1, scale: 1},
    trans: { duration: 1.5 }
}

export const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div initial={left.init} animate={left.anim} transition={left.trans} className='flex flex-row items-center'>
            <SocialIcon url='https://twitter.com/_apwrld' className='socialIconsHover' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url="https://github.com/Alexander-PE" className='socialIconsHover' fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.linkedin.com/in/alexander-perez-encarnacion-b822821b5/" className='socialIconsHover' fgColor='gray' bgColor='transparent' />
        </motion.div>

        <motion.div initial={right.init} animate={right.anim} transition={right.trans} className='flex flex-row items-center text-gray-300'>
            <SocialIcon className='socialIconsHover' url='mailto:alexander.pereze02@gmail.com' network='email' fgColor='gray' bgColor='transparent' />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
        </motion.div>
    </header>
  )
}

