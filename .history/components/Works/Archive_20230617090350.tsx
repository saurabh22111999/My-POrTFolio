import React from 'react'
import ArchiveCard from './ArchiveCard'

const Archive = () => {
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
        </div>
    </div>
  )
}

export default Archive