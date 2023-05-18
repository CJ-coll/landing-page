import React from 'react'

const Layer2 = () => {
  return (
    <div className='w-full min-h-[250px] p-10
     sm:flex-col md:flex-row sm:gap-7
      md:gap-0 flex  items-center'
      >
        <div className='sm:w-full md:w-1/2 h-full '>
          <div>
            <div className=' text-white font-bold sm:text-2xl md:text-2xl'>
                Want tips & tricks to optimize your flow?
            </div>
            <div className='text-white font-bold text-xs'>
              Sign up to our newsletter and stay up to date
            </div>
          </div>
        </div>
        <div className='sm:w-full md:w-1/2 h-full ' >
            <div className='md:ml-10 sm:flex-col bal:flex-row flex'>
                <input 
                type="Email"
                className='w-[190px] h-10 rounded text-sm p-3'
                placeholder='Enter your email'
                />
                <button type='submit' className='text-black w-36 h-10
                    rounded-md hover:transition hover:scale-[1.02] 
                    hover:shadow-lg
                    hover:font-semibold
                    bg-LightGreen
                    bal:ml-3
                    sm:mt-3
                    bal:mt-0
                    '>
                      Notify me
                </button>
            </div>
            <div  className='md:ml-10 mt-3 text-white font-bold text-xs'>
                We can bout the protection of your data. Read our <br></br>
                <a 
                href="#"
                className='text-LightGreen underline'
                >Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Layer2