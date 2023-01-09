import { motion } from 'framer-motion'
import { Skill } from './Skill'

type Props = {}

export const Skills = (props: Props) => {
    
    return (
        <section id='skills' className='snap-start'>
            <motion.div className='skills' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}}>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>skills</h3>

                <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for information</h3>
            
                <div className='grid grid-cols-4 gap-5'>
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </motion.div>
        </section>
    )
}