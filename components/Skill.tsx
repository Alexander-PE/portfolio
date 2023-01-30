import { motion } from 'framer-motion'

type Props = {
    left?: boolean
}

export const Skill = ({left}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <img className="skillsImg"/>
    </div>
  )
}