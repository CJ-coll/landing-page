import React from 'react'
import Illustration from '../assets/images/Illustration.png'

const Layer1 = () => {
  return (
    <div className='sm:flex-col sm:items-center md:flex-row w-full md:p-16 min-h-[400px] flex
     bg-white
     '>
      <div className='md:w-1/2 flex justify-end items-center' >
      <img 
      width={600}
      className=' md:w-[450px]'
      src={Illustration} 
      alt="Mock-up" 
      />
      </div>
      
      <div className='w-1/2 flex justify-center items-center'>
        <div className='sm:w-full md:w-[550px] min-h-[200px] flex flex-col gap-2 sm:items-center md:items-start sm:text-center md:text-start'>
          <div className='text-LightGreen font-bold text-xs'>
                      DATA ANALYTICS DASHBOARD
          </div>
          <div className=' text-black font-bold sm:text-4xl md:text-3xl'>
            Manage Data Analytics Centrally
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi in aliquam voluptatem dicta est fugiat vero, reiciendis iure laudantium enim, similique aliquid autem ducimus blanditiis, ad sunt quia? Aut, quidem!
          </p>

          <button className='text-black w-36 h-10
                rounded-md hover:transition hover:scale-[1.02] 
                hover:shadow-lg
                hover:font-semibold
                bg-LightGreen
                my-4

                '>
                    Get started
            </button>
        </div>
      </div>
    </div>
  )
}

export default Layer1