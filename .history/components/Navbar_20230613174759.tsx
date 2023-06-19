import logo  from '
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor 
    px-4">
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center
        justify-between'>
        <div>
          <Image src={logo} alt="logo"/>
        </div>
        <div></div>
      </div>
    </div>
  )
}
 
export default Navbar