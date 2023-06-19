import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import  amazonImg  from '@/public/assets/images/amazonlogo.png'

const Projects = () => {
  return (
    <section
    id='project'
    className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I have Built' titleNo='03.'/>

      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <a href='' target='_blank'>
        <div>
          <Image className='w-full h-full object-contain'
          src={amazonImg} 
          alt='amazonimg'/>
        </div>
        </a>
        <div></div>
      </div>

      </section>
  )
}

export default Projects