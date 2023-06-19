import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import  tesladeploy from '@/public/assets/images/tesladeploy.jpg'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TbBrandGithub } from 'react-icons/tb'
import {RxOpenInNewWindow} from 'react-icons/rx'

const Projects = () => {
  return (
    <section
    id='project'
    className='max-w-container mx-auto lgl:px-20 py-24'>
      <SectionTitle title='Some Things I have Built' titleNo='03.'/>
{/* project 1 */}


      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'> 
        <a 
        className='w-full xl:w-1/2 h-auto relative group'
        href='https://648c6a1dce5abc177fea83a3--cute-pasca-4b3b30.netlify.app/' target='_blank'>
        <div>
          <Image className='w-full h-full object-contain'
          src={tesladeploy} 
          alt='amazonimg'/>
        </div>
        </a>
        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right xl:-ml-16 z-10'>
          <p
          className='font-titleFont text-textGreen text-sm tracking-wide'
          >
            Feature Project
            </p>
            <h3 className='text-2xl font-bold'>Tesla Clone</h3>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            A Responsive real-like Tesla Clone 
            created with ReactJs,React-router, 
            <span className='text-textGreen'> Firebase for authentication</span>, Redux for state management,
             AOS, <span className='text-textGreen'> Styled-components</span> and Material-UI.
            </p>
            <ul className=' text-xs md:text-sm font-titleFont tracking-wide flex gap-2
            md:gap-5 justify-between text-textDark'>
              <li>Responsive</li>
              <li>React-router</li>
              <li>Firebase</li>
              <li>Styled-components</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a href=""
              className='hover:text-textGreen duration-300'
              target='_blank'> 
              <TbBrandGithub/>
              </a>
              <a href=""
              className='hover:text-textGreen duration-300'
              target='_blank'> 
              <AiOutlineYoutube/>
              </a>
              <a href=""
              className='hover:text-textGreen duration-300'
              target='_blank'> 
              <RxOpenInNewWindow/>
              </a>
            </div>
        </div>
        </div>

      </div>
      {/* project 2 */}
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'> 
        <a 
        className='w-full xl:w-1/2 h-auto relative group'
        href='https://648c6a1dce5abc177fea83a3--cute-pasca-4b3b30.netlify.app/' target='_blank'>
        <div>
          <Image className='w-full h-full object-contain'
          src={tesladeploy} 
          alt='amazonimg'/>
        </div>
        </a>
        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right xl:-ml-16 z-10'>
          <p
          className='font-titleFont text-textGreen text-sm tracking-wide'
          >
            Feature Project
            </p>
            <h3 className='text-2xl font-bold'>Tesla Clone</h3>
            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
            A Responsive real-like Tesla Clone 
            created with ReactJs,React-router, 
            <span className='text-textGreen'> Firebase for authentication</span>, Redux for state management,
             AOS, <span className='text-textGreen'> Styled-components</span> and Material-UI.
            </p>
            <ul className=' text-xs md:text-sm font-titleFont tracking-wide flex gap-2
            md:gap-5 justify-between text-textDark'>
              <li>Responsive</li>
              <li>React-router</li>
              <li>Firebase</li>
              <li>Styled-components</li>
            </ul>
            <div className='text-2xl flex gap-4'>
              <a href=""
              className='hover:text-textGreen duration-300'
              target='_blank'> 
              <TbBrandGithub/>
              </a>
              <a href=""
              className='hover:text-textGreen duration-300'
              target='_blank'> 
              <AiOutlineYoutube/>
              </a>
              <a href=""
              className='hover:text-textGreen duration-300'
              target='_blank'> 
              <RxOpenInNewWindow/>
              </a>
            </div>
        </div>
        </div>

      </div>
{/* project 3 */}

      </section>
  )
}

export default Projects