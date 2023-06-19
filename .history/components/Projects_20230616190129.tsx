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

      <div className='w-full flex flex-col items-center just'>
        <div>
          <Image className='w-full h-full object-contain'
          src={amazonImg} 
          alt='amazonimg'/>
        </div>
        <div></div>
      </div>

      </section>
  )
}

export default Projects