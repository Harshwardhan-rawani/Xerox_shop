import React from 'react'
import photo1 from "../assets/About/photo1.jpg"
import photo2 from "../assets/About/photo2.jpg"
import photo3 from "../assets/About/photo3.jpg"
import photo4 from "../assets/About/photo4.jpg"
import photo5 from "../assets/About/photo5.jpg"
import photo6 from "../assets/About/photo6.jpg"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import image9 from "../assets/image9.jpg"
import image10 from "../assets/image10.jpg"
import { motion, useTransform } from 'framer-motion';
function Contact() {
    const images=[photo1,photo2,photo3,image1,photo4,image2,photo5,image10,photo6,image3,image4,image5,image6,image7,image8,image9]
  return (
    <>
    <div className='w-[100%] h-fit overflow-hidden flex justify-center'>
    <motion.div
      initial={{translateY:"100%"}}
      whileInView={{translateY:"0%"}}
      transition={{duration:0.5}}
    className='w-fit group mt-10'>
        <div className='px-2 py-1 border-2 w-fit border-white group-hover:border-green-500'>
            <button className='text-white group-hover:text-green-500'>Contact Us</button></div></motion.div>
            </div>

    <div className='grid xl:grid-cols-8 md:grid-cols-6 grid-cols-4 lg:gap-4 md:gap-2 gap-1 mt-10 mb-10'>
        {images.map((e,index)=>{
                   return <div className=' h-fit overflow-hidden w-full relative' key={index}>
                   <motion.div 
                       initial={{translateY:"100%"}}
                       whileInView={{translateY:"0%"}}
                       transition={{duration:0.5}}
                       viewport={{once:true}}
                   >
                <img src={e} alt="" className='lg:h-32 md:h-24 h-20 w-full ' />
                </motion.div>
                   </div>
        })}
     
  
    </div>

    <div className='text-white text-3xl text-center'>C A Z A</div>
     <div className='text-white text-center text-sm'>C o n t e n t</div>
    </>
  )
}

export default Contact
