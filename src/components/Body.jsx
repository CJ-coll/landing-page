import React from 'react'
import Layer1 from './Layer1'
import Layer2 from './Layer2'
import Typed from 'react-typed'
const Body = () => {
  return (
    <div className='min-h-[500px] w-full flex flex-col 
     items-center
     '>
        <div className='gap-3 flex flex-col sm:w-full md:w-[455px] items-center my-40'>
            <div className='text-LightGreen font-bold text-xs'>
                GROWING WITH DATA ANALYTICS
            </div>

            <div className=' text-white font-extrabold sm:text-3xl md:text-4xl'>
                Grow with data.
            </div>

            <div className='text-white font-bold sm:text-lg md:text-xl'>
                <p>Fast, flexible financing for
            <Typed className='text-xl text-zinc-700 font-bold pl-2'
            strings={['BTB', 'BTC', 'SaaS']}
            typeSpeed={120}
            backSpeed={140}
            loop>
           </Typed>
           </p>
            </div>
          
            <div className='text-zinc-800 font-bold text-sm text-center'>
           <p>Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platform.</p>  
            </div>

            <button className='text-black w-36 h-10
                rounded-md hover:transition hover:scale-[1.02] 
                hover:shadow-lg
                hover:font-semibold
                bg-LightGreen
                mt-4
                '>
                    Get started
            </button>
        </div>
        <Layer1/>
        <Layer2/>
     </div>
    
  )
}

export default Body