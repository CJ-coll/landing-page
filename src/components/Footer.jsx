import React from 'react'

const Footer = () => {
  return (
    <div className='w-full min-h-[250px] py-10 
    sm:px-9 md:px-28 flex sm:flex-col md:flex-row 
    text-white sm:gap-6 md:gap-4'>
        <div className=' sm:w-full md:w-[30%] h-auto'>
            <button className='text-2xl font-bold text-LightGreen mb-4'>
                REACT.
            </button>
            <p className='text-sm '>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laudantium dolorum iusto. Repellat voluptatum quod fugit 
            </p>

            <div className='flex pt-6 sm:w-full md:w-auto'>
               <a href=""> 
                    <p className='px-3 mr-3 text-lg bg-blue-800'>
                        F
                    </p>
                </a>
                <a href="">
                    <p className='px-3 mr-3 text-lg  bg-red-600'>
                        I
                    </p>
                </a>
                <a href="">
                    <p className='px-3 mr-3 text-lg bg-black'>
                        T
                    </p>
                </a>
                <a href="">
                    <p className='px-3 mr-3 text-lg  bg-blue-600'>
                        G
                    </p>    
                </a>
                <a href="">
                    <p className='px-3 mr-3 text-lg  bg-orange-600'>
                        D
                    </p>
                </a>
            </div>
        </div>
         <div className='sm:w-full md:w-[20%] text-sm '>
            <ul>
                <li className=''>Solution</li>
                <li className='mt-2'>Analytics</li>
                <li className='mt-2'>Marketing</li>
                <li className='mt-2'>Commerce</li>
                <li className='mt-2'>intel</li>
            </ul>
         </div>
         <div className='sm:w-full md:w-[20%] text-sm '>
            <ul>
                <li className=''>Support</li>
                <li className='mt-2'>Pricing</li>
                <li className='mt-2'>Documentation</li>
                <li className='mt-2'>Others</li>
                <li className='mt-2'>API Statistics</li>
            </ul>
         </div>
         <div className='sm:w-full md:w-[20%] text-sm '>
            <ul>
                <li className=''>Company</li>
                <li className='mt-2'>About</li>
                <li className='mt-2'>Blog</li>
                <li className='mt-2'>Jobs</li>
                <li className='mt-2'>Press</li>
                <li className='mt-2'>Partner</li>
            </ul>
         </div>
         <div className='sm:w-full md:w-[20%] text-sm '>
            <ul>
                <li className=''>Legal</li>
                <li className='mt-2'>Claim</li>
                <li className='mt-2'>Privacy</li>
                <li className='mt-2'>Terms & Conditions</li>
            </ul>
         </div>
    </div>
  )
}

export default Footer