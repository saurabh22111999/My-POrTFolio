import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import HighRadius from './Works/HighRadius'
import Feynn from './Works/Feynn';
import Dev from './Works/Dev';

const Experience = () => {
    const[workHighRadius,setWorkHighRadius] =useState(true);
    const[workFeynn,setWorkFeynn] =useState(false);
    const[workDev,setWorkDev] =useState(false);
    
    const handleFeynn = () => { 
        setWorkFeynn(true);
        setWorkDev(false);
        setWorkHighRadius(false);
    }
    const handleHighRadius = () => { 
        setWorkFeynn(false);
        setWorkDev(false);
        setWorkHighRadius(true);
    }
    const handleDev = () => { 
        setWorkDev(true);
        setWorkFeynn(false);
        setWorkHighRadius(false);
    }
  return (
    <section
    id='experience' 
    className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
        <SectionTitle title='Where I have Worked' titleNo='02.'/>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16 '>
            <ul className='md:w-32 flex flex-col'>
                <li onClick={handleHighRadius} className=`{${workHighRadius ? :}}border-l-2 border-l-hoverColor text-textDark bg-transparent
                hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8
                font-medium`>HighRadius</li>
                <li onClick={handleFeynn}  className='border-l-2 border-l-hoverColor text-textDark bg-transparent
                hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8
                font-medium'>FeynnLabs</li>
                <li onClick={handleDev}  className='border-l-2 border-l-hoverColor text-textDark bg-transparent
                hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8
                font-medium'>DevIncept</li>
                
            </ul>
            {workHighRadius && <HighRadius/>}
            {workFeynn && <Feynn/>}
            {workDev && <Dev/>}
        </div>
        </section>
  )
}

export default Experience