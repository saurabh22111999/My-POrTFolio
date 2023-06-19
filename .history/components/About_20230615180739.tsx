import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
        <SectionTitle title="About Me" titleNo="01."/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div></div>
            <div></div>
        </div>
    </section>
  )
}

export default About