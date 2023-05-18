import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-[85%] mx-auto pt-10 lg:px-20  flex 
     items-center justify-between text-white
    '>
        <button className='text-2xl font-bold text-LightGreen'>
            REACT.
        </button>
        
        <ul className='text-white md:flex gap-5 items-center sm:hidden '>

            <li className='sm:hidden md:flex cursor-pointer'>Home</li>
            <li className='sm:hidden md:flex cursor-pointer'>Account</li>
            <li className='sm:hidden md:flex cursor-pointer'>Sign in</li>


            <button className='text-black w-28 h-9
             bg-white rounded-md hover:transition hover:scale-[1.03] 
             hover:shadow-lg hover:shadow-slate-900
             hover:font-semibold
             hover:bg-LightGreen
             '>
                Get started
            </button> 

        </ul>
        <div onClick={handleNav} className='md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
          </div>

          <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#000c01] z-10 md:hidden ease-in-outs duration-700' : 'fixed left-[-100%]'}>
          <button className='text-2xl font-bold text-LightGreen p-2'>
            REACT.
        </button>
            <ul className='uppercase p-4 '>
            <li className='p-3 border-b border-b-gray-600 cursor-pointer'>Home</li>
            <li className='p-3 border-b border-b-gray-600 cursor-pointer'>Account</li>
            <li className='p-3 border-b border-b-gray-600 cursor-pointer'>Sign in</li>
            <li className='p-3 cursor-pointer'>About</li>
            </ul>
          </div>
    </div>
    
  )
}

export default Header