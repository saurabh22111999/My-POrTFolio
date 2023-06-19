import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import  tesladeploy from '@/public/assets/images/tesladeploy.jpg'

const Projects = () => {
  return (
    <section
    id='project'
    className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I have Built' titleNo='03.'/>

      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <a 
        className='w-full xl:w-1/2 h-auto relative group'
        href='https://648c6a1dce5abc177fea83a3--cute-pasca-4b3b30.netlify.app/' target='_blank'>
        <div>
          <Image className='w-full h-full object-contain'
          src={tesladeploy} 
          alt='amazonimg'/>
        </div>
        </a>
        <div></div>
      </div>

      </section>
  )
}

export default Projects