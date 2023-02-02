import { motion } from 'framer-motion'
import {HTML} from '../icons/HTML'
import {CSS} from '../icons/CSS'
import {ReactIcon} from '../icons/ReactIcon'
import {Git} from '../icons/Git'
import {Next} from '../icons/Next'
import {Js} from '../icons/Js'

export const Skills = () => {
    
    return (
        <section id='skills' className='snap-start'>
            <motion.div className='skills' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}}>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>skills</h3>

                <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for information</h3>
            
                <div className='grid grid-cols-4 gap-7'>
                    <HTML />
                    <CSS />
                    <ReactIcon />
                    <Git />
                    <Next />
                    <Js />
                </div>
            </motion.div>
        </section>
    )
}