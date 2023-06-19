import React from 'react'
import SectionTitle from './SectionTitle'

const Experience = () => {
  return (
    <section
    id='experience' 
    className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
        <SectionTitle title='Where I have Worked' titleNo='02.'/>
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16 '>
            <ul>
                <li className='border-1-2 border-textGreen'>ReactBD</li>
            </ul>
        </div>
        </section>
  )
}

export default Experience