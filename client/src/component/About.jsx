import React from 'react'
import { motion, useTransform } from 'framer-motion';
import photo1 from "../assets/About/photo1.jpg"
import photo2 from "../assets/About/photo2.jpg"
import photo3 from "../assets/About/photo3.jpg"
import photo4 from "../assets/About/photo4.jpg"
import photo5 from "../assets/About/photo5.jpg"
import photo6 from "../assets/About/photo6.jpg"

function About() {
  return (
    <>
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
   
    <div className='xl:px-28 lg:px-20 md:px-16 px-10 w-fit mt-5'>
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
    <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>
       <div className='group w-fit h-fit overflow-hidden'>
        <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
        >
        <div><img src={photo1} alt="" className='lg:h-56 md:h-44 w-full h-40 my-5'/></div>
        <div className='flex justify-center text-green-500 text-sm'><div>Content</div></div>
        <div className='flex justify-center text-white font-bold'><div>Content</div></div>
        <div className='flex justify-center  text-white'><div className='text-center text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum corrupti veritatis quasi soluta dicta libero.</div></div>
        </motion.div>

       </div>

       <div className='group w-fit h-fit overflow-hidden'>
        <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
        >
        <div><img src={photo2} alt="" className='lg:h-56 md:h-44 w-full h-40 my-5'/></div>
        <div className='flex justify-center text-green-500 text-sm'><div>Content</div></div>
        <div className='flex justify-center text-white font-bold'><div>Content</div></div>
        <div className='flex justify-center  text-white'><div className='text-center text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum corrupti veritatis quasi soluta dicta libero.</div></div>
        </motion.div>

       </div>

     
       <div className='group w-fit h-fit overflow-hidden'>
        <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
        >
        <div><img src={photo3} alt="" className='lg:h-56 md:h-44 w-full h-40 my-5'/></div>
        <div className='flex justify-center text-green-500 text-sm'><div>Content</div></div>
        <div className='flex justify-center text-white font-bold'><div>Content</div></div>
        <div className='flex justify-center  text-white'><div className='text-center text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum corrupti veritatis quasi soluta dicta libero.</div></div>
        </motion.div>

       </div>
    
       <div className='group w-fit h-fit overflow-hidden'>
        <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
        >
        <div><img src={photo4} alt="" className='lg:h-56 md:h-44 w-full h-40 my-5'/></div>
        <div className='flex justify-center text-green-500 text-sm'><div>Content</div></div>
        <div className='flex justify-center text-white font-bold'><div>Content</div></div>
        <div className='flex justify-center  text-white'><div className='text-center text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum corrupti veritatis quasi soluta dicta libero.</div></div>
        </motion.div>

       </div>

       <div className='group w-fit h-fit overflow-hidden'>
        <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
        >
        <div><img src={photo5} alt="" className='lg:h-56 md:h-44 w-full h-40 my-5'/></div>
        <div className='flex justify-center text-green-500 text-sm'><div>Content</div></div>
        <div className='flex justify-center text-white font-bold'><div>Content</div></div>
        <div className='flex justify-center  text-white'><div className='text-center text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum corrupti veritatis quasi soluta dicta libero.</div></div>
        </motion.div>

       </div>
       <div className='group w-fit h-fit overflow-hidden'>
        <motion.div
         initial={{translateY:"100%"}}
         whileInView={{translateY:"0%"}}
         transition={{duration:0.5}}
         viewport={{once:true}}
        >
        <div><img src={photo6} alt="" className='lg:h-56 md:h-44 w-full h-40 my-5'/></div>
        <div className='flex justify-center text-green-500 text-sm'><div>Content</div></div>
        <div className='flex justify-center text-white font-bold'><div>Content</div></div>
        <div className='flex justify-center  text-white'><div className='text-center text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum corrupti veritatis quasi soluta dicta libero.</div></div>
        </motion.div>

       </div>
                 
    </div>
          
      
    </div>

    </>
  )
}

export default About
