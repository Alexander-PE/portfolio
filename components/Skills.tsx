import { motion } from 'framer-motion'
import {HTML} from '../icons/HTML.jsx'
import {CSS} from '../icons/CSS.jsx'
import {ReactIcon} from '../icons/React.jsx'
import {Git} from '../icons/Git.jsx'
import {Next} from '../icons/Next.jsx'
import {Js} from '../icons/Js.jsx'



type Props = {}

export const Skills = (props: Props) => {
    
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
            {/* <div className='skills'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={`${HTML}`} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={`${CSS}`} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={`${JavaScript}`} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={`${ReactImg}`} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={`${GitHub}`} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={`${Node}`} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={`${Tailwind}`} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
          </div>
      </div> */}
        </section>
    )
}