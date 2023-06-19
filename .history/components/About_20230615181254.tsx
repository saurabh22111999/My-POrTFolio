import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
        <SectionTitle title="About Me" titleNo="01."/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                    Hello! My name is Saurabh Jangra and I enjoy creating things that live on internet. My interest in web development started back in 2012
                    when I designed a web page for our group project when I came to know about the vast ocean of designing web my interest forced me to dive deep in the ocean of web.
                </p>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default About