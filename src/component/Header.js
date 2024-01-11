import React from 'react'
import logo from "../assest/logo.png"

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
        {/* desktop */}
        <div className='flex items-center h-full'>
            <div className='h-12'>
                <img src={logo} className='h-full '></img>
            </div>
        </div>

        {/* mobile */}
    </header>
  )
}

export default Header