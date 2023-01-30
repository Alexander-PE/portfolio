import React from 'react'

type Props = {}

export const Projects = ({}: Props) => {

  const projects = [1,2,3,4,5]

  return (
    <section id='projects' className='snap-start'>
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
              {
                projects.map(project => (
                  <div className='w-screen flex-shrink-0 snap-center flex flex-col'>
                    <img src="" alt="" />
                    <div>
                      <h4>Case</h4>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[320px] -skew-y-[-12deg]'></div>
        </div>
    </section>
  )
}