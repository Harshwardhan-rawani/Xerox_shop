import React from 'react'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import { motion, useTransform } from 'framer-motion';
function Gallery() {
  return (
   <>

<div className='px-10 py-10 relative'>
    {/* Header */}
    <div className='w-fit mx-auto flex items-center space-x-3 h-10 overflow-hidden'>
        <motion.div
                  initial={{translateX:"-100%"}}
                  whileInView={{translateX:"0%"}}
                  transition={{duration:0.5}}
        className='h-[3px] bg-white xl:w-20 lg:w-16 w-14'></motion.div>
        <motion.div
           initial={{translateY:"100%"}}
           whileInView={{translateY:"0%"}}
           transition={{duration:0.5}}
        className='xl:text-2xl  text-xl font-bold text-white'>OUR SERVICES</motion.div>
        <motion.div
              initial={{translateX:"100%"}}
              whileInView={{translateX:"0%"}}
              transition={{duration:0.5}}
        className='h-[3px] bg-white xl:w-20 lg:w-16 w-14'></motion.div>
    </div>
   </div>
  
   <div className='xl:px-28 lg:px-20 md:px-16 px-10 w-fit'>
   <motion.div
       initial={{translateY:"100%"}}
       whileInView={{translateY:"0%"}}
       transition={{duration:0.5}}
       viewport={{once:true}}
   className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloribus Lorem ipsum dolor sit amet consectetur,
     adipisicing elit. Minima, aut? voluptates est nihil perspiciatis 
     nesciunt ut molestiae quisquam repudiandae blanditiis!</motion.div>
   </div>

   <div className='xl:px-28 lg:px-20 md:px-16 px-10 w-fit py-14'>
    <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-4'>
         {[image1,image2,image3,image4,image5,image6,image7,image8].map((e,index)=>{
           return <div className='lg:h-56 md:h-44 h-40 relative overflow-hidden' key={index}>
            <motion.div
                   initial={{translateY:"100%"}}
                   whileInView={{translateY:"0%"}}
                   transition={{duration:0.5}}
                   viewport={{once:true}}
            className='h-full w-full'>
            <div className='absolute top-0 w-full h-full hover:bg-[#000000b4]'></div>
            <img src={e} className='w-full h-full' alt="" />
            </motion.div>
           
                 
           </div>
          
         })}
    </div>
   </div>
   </>
  )
}

export default Gallery
