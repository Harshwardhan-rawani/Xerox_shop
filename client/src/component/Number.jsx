import React from 'react'
import count from "../assets/count.jpg"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
function Number() {
    const { ref, inView } = useInView({ threshold: 0.5 });
  return (
   <>
   <div >
   <div ref={ref} className="relative w-[100%] lg:h-44 h-52" >
   <div><img src={count} alt="" className='absolute top-0 w-full lg:h-44 h-52'/></div>
    {inView && (<div>

    <div className='absolute top-0 bg-[#000000a8] w-full lg:h-44 h-52'></div>
    <div className='absolute top-0 w-full grid lg:grid-cols-4 grid-cols-2 gap-5 py-10'>
        <div className='flex flex-col items-center'>
            <p className='text-white text-2xl font-bold'><CountUp end={10} duration={3} />
            </p>
            <p className='text-white xl:text-2xl  font-semibold text-lg'>Hello</p>
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-white text-2xl font-bold'> 
           < CountUp end={20} duration={2} />
            </p>
            <p className='text-white xl:text-2xl font-semibold text-lg'>Hello</p>
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-white text-2xl font-bold'><CountUp end={90} duration={3} />+</p>
            <p className='text-white xl:text-2xl font-semibold text-lg'>Hello</p>
        </div>
         <div className='flex flex-col items-center'>
            <p className='text-white text-2xl font-bold'><CountUp end={5000} duration={3} />+</p>
            <p className='text-white xl:text-2xl font-semibold text-lg'>Hello</p>
        </div>
       
    </div>
    </div>)
    }
  
   </div>
   </div>
   </>
  )
}

export default Number
