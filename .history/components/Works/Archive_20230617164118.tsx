import React, { useState } from 'react'
import ArchiveCard from './ArchiveCard'
import { motion } from 'framer-motion'

const Archive = () => {

  const [showmore,setshowmore] =useState(false)
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
        <div className='w-full flex flex-col items-center'>
            <h2>Other Noteworthy Projects

            </h2>
            <p className='text-sm font-titleFont text-textGreen'>
                View the archive
            </p>
            
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10
        lgl:px-10'>
        <ArchiveCard
        title="Twitter Sentimental Analysis"
        des="lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy"
        listItem={["Reactjs","Tailwind CSS","getform.io"]}
        link="http://twitter.com/"
        />
        <ArchiveCard
        title="comment Sentimental Analysis"
        des="lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy
        lorem ipsum dolor sit amet lorem, sed diam nonumy"
        listItem={["Reactjs","Tailwind CSS","getform.io"]}
        link="http://twitter.com/"
        />
        <ArchiveCard
        title=" Summerizer twitter sentimental analyzer
        "
        des="lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy
        lorem lorem 
        lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy
        lorem lorem "
        listItem={["Reactjs","Tailwind CSS","getform.io"]}
        link="http://twitter.com/"
        />
        <ArchiveCard
        title=" Summerizer twitter sentimental analyzer
        "
        des="lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy
        lorem lorem 
        lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy
        lorem lorem "
        listItem={["Reactjs","Tailwind CSS","getform.io"]}
        link="http://twitter.com/"
        />
        <ArchiveCard
        title=" Summerizer twitter sentimental analyzer
        "
        des="lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy
        lorem lorem 
        lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy
        lorem lorem "
        listItem={["Reactjs","Tailwind CSS","getform.io"]}
        link="http://twitter.com/"
        />
        <ArchiveCard
        title=" Summerizer twitter sentimental analyzer
        "
        des="lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy
        lorem lorem 
        lorem-ipsum dolor sit amet, 
        consectetur adip lorem, sed diam nonumy
        lorem lorem "
        listItem={["Reactjs","Tailwind CSS","getform.io"]}
        link="http://twitter.com/"
        />
        {
          showmore && (
            <>
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{delay:0.1}}
            >
                <ArchiveCard 
                title=" Summerizer twitter sentimental analyzer
                "
                des="lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem 
                lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem "
                listItem={["Reactjs","Tailwind CSS","getform.io"]}
                link="http://twitter.com/"
                />
              </motion.div>
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{delay:0.2}}
            >
                <ArchiveCard 
                title=" Summerizer twitter sentimental analyzer
                "
                des="lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem 
                lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem "
                listItem={["Reactjs","Tailwind CSS","getform.io"]}
                link="http://twitter.com/"
                />
              </motion.div>
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{delay:0.3}}
            >
                <ArchiveCard 
                title=" Summerizer twitter sentimental analyzer
                "
                des="lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem 
                lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem "
                listItem={["Reactjs","Tailwind CSS","getform.io"]}
                link="http://twitter.com/"
                />
              </motion.div>
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{delay:0.4}}
            >
                <ArchiveCard 
                title=" Summerizer twitter sentimental analyzer
                "
                des="lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem 
                lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem "
                listItem={["Reactjs","Tailwind CSS","getform.io"]}
                link="http://twitter.com/"
                />
              </motion.div>
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{delay:0.5}}
            >
                <ArchiveCard 
                title=" Summerizer twitter sentimental analyzer
                "
                des="lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem 
                lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem "
                listItem={["Reactjs","Tailwind CSS","getform.io"]}
                link="http://twitter.com/"
                />
              </motion.div>
              <motion.div
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{delay:0.6}}
            >
                <ArchiveCard 
                title=" Summerizer twitter sentimental analyzer
                "
                des="lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem 
                lorem-ipsum dolor sit amet, 
                consectetur adip lorem, sed diam nonumy
                lorem lorem "
                listItem={["Reactjs","Tailwind CSS","getform.io"]}
                link="http://twitter.com/"
                />
              </motion.div>
            </>
          )
        }
        </div>
        <div className='mt-12 flex items-center justify-center'>
          {
            showmore ? :<button onClick={()=>setshowmore(false)} className='w-36 h-12 rounded-md text-textGreen text-[13px] border
            border-textGreen hover:bg-hoverColor duration-300'>
              Show less
              </button>:<button onClick={()=>setshowmore(true)} className='w-36 h-12 rounded-md text-textGreen text-[13px] border
        border-textGreen hover:bg-hoverColor duration-300'>
          Show more</button>
            
            <
          }
        
        </div>
    </div>
  )
}

export default Archive