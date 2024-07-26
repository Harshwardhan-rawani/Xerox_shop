import React from 'react'
import { motion, useTransform } from 'framer-motion';
import image2 from "../assets/image2.jpg"
function Blog() {
  return (
 <>
 <div className='relative text-white w-[100%] h-64 '>
    <div><img src={image2} className='w-full h-full absolute top-0' alt="" /></div>
    <div className='absolute top-0 bg-[#00000082] h-full w-full'></div>
    <div className='absolute top-0 text-white w-full h-full flex items-center justify-center xl:p-10 px-5 '>
        <div>
        <div className='flex  justify-center'>
        <motion.div
        initial={{translateY:"100%"}}
        whileInView={{translateY:"0%"}}
        transition={{duration:0.7}}
        
        className='text-white font-bold xl:text-4xl md:text-3xl text-2xl'>CREATIVE SOLUTIONS</motion.div>
        </div>
         <motion.div
          initial={{translateY:"100%"}}
          whileInView={{translateY:"0%"}}
          transition={{duration:0.9}}
      
         className='flex justify-center my-2'>
         <p className='text-white xl:text-lg md:text-md text-sm text-center italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit error numquam sed et nemo ducimus ullam incidunt. Totam, quos.</p>
         </motion.div>
        <motion.div 
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:1.1}}
  
        className='flex justify-center my-3'>
        <button className='text-white border-2 border-white py-1 px-2'>Contact Us</button>
        </motion.div>
        </div>

    </div>
 </div>
   
   </>
  )
}

export default Blog
