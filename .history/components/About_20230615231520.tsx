import React from 'react'
import SectionTitle from './SectionTitle'
import {AiFillThunderbolt} from 'react-icons/ai'
import Image from 'next/image'
import  profileImg from '@/public/assets/images/profile.jpg'

const About = () => {
  return (
    <section id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
        <SectionTitle title="About Me" titleNo="01."/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                    Hello! My name is Saurabh Jangra and I enjoy creating things that live on internet. My interest in web development started during my graduation course
                    when I designed a web page for our group project when I came to know about the vast ocean of designing web my interest forced me to dive deep in the ocean of web.
                </p>
                <p>
                    Fast-forward to today, as I have worked on different projects which includes
                    different technologies , I have enough knowledge about react and other technologies 
                   now I am <span className='text-textGreen'>looking for opportunities to work in corporate sector.</span>
                </p>
                <p>
                Results-driven, adaptable, Computer Science
engineer with a highly analytical mindset,
passion for innovation, and documented
success in hands-on roles. Expert at working
in collaboration with cross-functional teams
in the development and execution of critical
projects, including planning, budgets, and
workflows. <span className='text-textGreen'>Dedicated to advancing my career
into Web Development </span> 
 within a highly recognized, employee-centric
company.
                </p>
                <p>Here are few technologies I have been working with recently:</p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 
                mt-6'>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt/></span>Javascript(ES6+)</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt/></span>Next.js</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt/></span>React</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt/></span>Node.js</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt/></span>Express.js</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt/></span>MongoDB</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt/></span>TailwindCSS</li>
                    <li className='flex items-center gap-2'><span className='text-textGreen'><AiFillThunderbolt/></span>TypeScript</li>
                </ul>
            </div>
            <div className='w-full lgl:w-1/3 h-80 relative group'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                        <Image 
                        className='rounded-lg h-full object-cover'
                        src={profileImg}
                        alt="profileImg"
                         />
                         <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'> 
                         <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'>

</div>
                         </div>
                         
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About