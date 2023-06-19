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
        <div>
        <ArchiveCard/>
        </div>
    </div>
  )
}

export default Archive