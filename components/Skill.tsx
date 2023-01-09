import { motion } from 'framer-motion'

type Props = {
    left?: boolean
}

export const Skill = ({left}: Props) => {
    const init = left ? -200 : 200
  return (
    <div className='group relative flex cursor-pointer'>
        <img  className="skillsImg"/>
    </div>
  )
}