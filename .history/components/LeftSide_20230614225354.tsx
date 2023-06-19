import React from 'react'
import {TbBrandGithub} from 'react-icons/tb'
import {SlSocialYoutube} from 'react-icons/sl'
import {SlSocialLinkedin, SlSocialFacebook,SlSocialInstagram} from 'react-icons/sl'
const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4
    text-textLight'>
        <div className='flex flex-col gap-4'>
            <a href='https://github.com/saurabh22111999' target='_blank'>
                <span className=''><TbBrandGithub/></span>
            </a>
        </div>
    </div>
  )
}

export default LeftSide