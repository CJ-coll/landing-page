import React from 'react'
import Singleuser from '../assets/images/Singleuser.png'
import Doubleuser from '../assets/images/Doubleuser.png'
import Multipleuser from '../assets/images/Multipleuser.png'
const Card = () => {
  return (
    <div className='w-full min-h-[500px] bg-white 
    flex justify-center items-center
    sm:flex-col md:flex-row md:p-9
    sm:py-14 md:gap-4 sm:gap-14'>
        <div className='w-[220px] h-[290px] shadow-xl hover:duration-700 hover:scale-[1.05] transition ease-in-out flex flex-col items-center py-7 px-5 relative'>
            <img 
            src={Singleuser} 
            className='absolute -top-10'
            alt="" />
            <h1 className='font-semibold'>Single User</h1>
            <p className='font-semibold text-xl my-4'>$149</p>
            <div className='flex justify-center w-full border-y py-1 text-sm'>
                500 GB Storage
            </div>

            <div className='flex justify-center w-full py-1 text-sm'>
                1 User Allowed
            </div>
          
            <div className='flex justify-center w-full border-y py-1 text-sm'>
               Send up to 2 GB
            </div>
            <button className='text-black w-36 h-10
                rounded-md hover:transition hover:scale-[1.02] 
                hover:shadow-lg
                font-semibold
                bg-LightGreen
                mt-5
                '>
                    Start Trial
            </button>
        </div>

        <div className='w-[220px] h-[330px] bg-stone-100 shadow-xl hover:duration-700 transition ease-in-out hover:scale-[1.05]  flex flex-col items-center py-10 px-5 relative'>
        <img 
        src={Doubleuser} 
        className='absolute -top-10'
        alt="" />
        <h1 className='font-semibold'>Partnership</h1>
            <p className='font-semibold text-xl my-4'>$199</p>
            <div className='flex justify-center w-full border-y py-2 text-sm'>
                1 TB Storage
            </div>

            <div className='flex justify-center w-full py-1 text-sm'>
                3 User Allowed
            </div>
          
            <div className='flex justify-center w-full border-y py-1 text-sm'>
                Send up to 10 GB
            </div>
            <button className='text-LightGreen w-36 h-10
                rounded-md hover:transition hover:scale-[1.02] 
                hover:shadow-lg
                font-semibold
                bg-black
                mt-7
                '>
                    Start Trial
            </button>
        </div>        

        <div className='w-[220px] h-[290px] shadow-xl hover:duration-700 transition ease-in-out hover:scale-[1.05]  flex flex-col items-center py-7 px-5 relative'>
        <img 
        src={Multipleuser} 
        className='absolute -top-10'
        alt="" />
        <h1 className='font-semibold'>Group Account</h1>
            <p className='font-semibold text-xl my-4'>$149</p>
            <div className='flex justify-center w-full border-y py-1 text-sm'>
                5 TB Storage
            </div>

            <div className='flex justify-center w-full py-1 text-sm'>
                10 User Allowed
            </div>
          
            <div className='flex justify-center w-full border-y py-1 text-sm'>
                Send up to 20GB
            </div>
            <button className='text-black w-36 h-10
                rounded-md hover:transition hover:scale-[1.02] 
                hover:shadow-lg
                font-semibold
                bg-LightGreen
                mt-5
                '>
                    Start Trial
            </button>
        </div>
    </div>
  )
}

export default Card