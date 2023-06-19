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
workflows. Dedicated to advancing my career
into a Data Science and Web Development
within a highly recognized, employee-centric
company.
                </p>
                <p>Here are few technologies I have been working with recently:</p>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default About