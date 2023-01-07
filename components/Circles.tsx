import { motion } from 'framer-motion' 

type Props = {}

const circle = {
    init: { opacity: 0},
    anim: { 
        scale: [1, 2, 2, 3, 1], 
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1], 
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    },
    trans: { duration: 2.5 }
}

export const Circles = ({}: Props) => {
  return (
    <motion.div initial={circle.init} animate={circle.anim} transition={circle.trans} className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className='absolute border border-[#f7ab0a] opacity-10 rounded-full h-[500px] w-[500px] mt-52 animate animate-pulse'/>
        <div className='absolute border border-[#333333 ] opacity-10 rounded-full h-[650px] w-[650px] mt-52'/>
    </motion.div>
  )
}
