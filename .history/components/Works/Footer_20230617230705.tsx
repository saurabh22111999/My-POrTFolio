import React from 'react'
import {TbBrandGithub} from 'react-icons/tb'
import {SlSocialYoutube} from 'react-icons/sl'
import {SlSocialLinkedin, SlSocialFacebook,SlSocialInstagram} from 'react-icons/sl'

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center
    w-full py-6 gap-4' >
        <a href='https://github.com/saurabh22111999' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-2 transition-all duration-300'><TbBrandGithub/></span>
            </a>
            <a href='https://www.youtube.com/@gam3rpi302/featured' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-2 transition-all duration-300'><SlSocialYoutube/></span>
            </a>
            <a href='https://www.linkedin.com/in/saurabh-jangra-84a092202/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-2 transition-all duration-300'><SlSocialLinkedin/></span>
            </a>
            <a href='https://github.com/saurabh22111999' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-2 transition-all duration-300'><SlSocialFacebook/></span>
            </a>
            <a href='https://www.instagram.com/saurabh_j__/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-2 transition-all duration-300'><SlSocialInstagram/></span>
            </a>
        </div>
  )
}

export default Footer