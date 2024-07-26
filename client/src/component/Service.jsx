import React, { useEffect } from 'react'
import { motion, useTransform } from 'framer-motion';
import { FaCartShopping } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Service() {
        useEffect(() => {
          AOS.init({
            duration: 1000,
            once:true
          });
        }, []);
  return (
   <>
   <div className='px-10 py-8 relative'>
    {/* Header */}
    <div className='w-fit mx-auto flex items-center space-x-3 h-10 '>
        <motion.div
                  initial={{translateX:"-100%"}}
                  whileInView={{translateX:"0%"}}
                  transition={{duration:0.5}}
                  
        className='h-[3px] bg-gray-700 xl:w-20 lg:w-16 w-14'></motion.div>
        <motion.div
           initial={{translateY:"100%"}}
           whileInView={{translateY:"0%"}}
           transition={{duration:0.5}}
           
        className='xl:text-2xl  text-xl font-bold text-gray-700'>Our Service</motion.div>
        <motion.div
              initial={{translateX:"100%"}}
              whileInView={{translateX:"0%"}}
              transition={{duration:0.5}}
              
        className='h-[3px] bg-gray-700 xl:w-20 lg:w-16 w-14'></motion.div>
    </div>
   </div>
 {/* end */}
 {/* card */}
   
   <div className='xl:px-28 lg:px-20 md:px-16 px-10 '>
       <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
       < div data-aos="fade-up" className='bg-white h-auto p-5 border-t-2 border-t-white rounded-md hover:border-t-2 hover:border-t-green-500 shadow-lg hover:shadow-2xl transition-all duration-300'>
        <div className='flex items-center space-x-3'>
            <div className=' lg:text-3xl text-2xl  text-gray-700'><FaPrint/></div>
        <h2 className='lg:text-xl text-lg font-bold mb-2 text-gray-700'>Print</h2></div>
   
    <p className='mb-4 lg:mt-4 mt-2 text-gray-500'>This is a brief description of the product.</p>
    <motion.button
      className=" text-white md:text-xl  bg-green-500 px-4  py-1 rounded-sm transition-colors duration-300 hover:bg-green-600"
      whileTap={{ scale: 0.85 }}
      transition={{ type: 'spring', stiffness: 300 ,damping:10}}
    >
      Order
    </motion.button>
  </div>
  

  <div
    data-aos="fade-up"
  className='bg-white h-auto p-5 border-t-2 border-t-white rounded-md hover:border-t-2 hover:border-t-green-500 shadow-lg hover:shadow-2xl transition-all duration-300'>
        <div className='flex items-center space-x-3'>
            <div className=' lg:text-3xl text-2xl  text-gray-700'><FaBook/></div>
        <h2 className='lg:text-xl text-lg font-bold mb-2 text-gray-700'>Material</h2></div>
   
    <p className='mb-4 mt-4 text-gray-500'>This is a brief description of the product.</p>
    <motion.button
      className=" text-white  bg-green-500 md:text-xl px-4  py-1 rounded-sm transition-colors duration-300 hover:bg-green-600"
      whileTap={{ scale: 0.85 }}
      transition={{ type: 'spring', stiffness: 300 ,damping:10}}
    >
      Doc
    </motion.button>
  </div>


  <div 
data-aos="fade-up"
  className='bg-white h-auto p-5 border-t-2 border-t-white rounded-md hover:border-t-2 hover:border-t-green-500 shadow-lg hover:shadow-2xl transition-all duration-300'>
        <div className='flex items-center space-x-3'>
            <div className=' lg:text-3xl text-2xl  text-gray-700'><FaCartShopping/></div>
        <h2 className='lg:text-xl text-lg font-bold mb-2 text-gray-700'>Bio Product</h2></div>
   
    <p className='mb-4 mt-4 text-gray-500'>This is a brief description of the product.</p>
    <motion.button
      className=" text-white  bg-green-500 px-4 md:text-xl  py-1 rounded-sm transition-colors duration-300 hover:bg-green-600"
      whileTap={{ scale: 0.85 }}
      transition={{ type: 'spring', stiffness: 300 ,damping:10}}
    >
      Order
    </motion.button>
  </div>

  <div
  data-aos="fade-up"
  className='bg-white h-auto p-5 border-t-2 border-t-white rounded-md hover:border-t-2 hover:border-t-green-500 shadow-lg hover:shadow-2xl transition-all duration-300'>
        <div className='flex items-center space-x-3'>
            <div className=' lg:text-3xl text-2xl  text-gray-700'><FaTshirt/></div>
        <h2 className='lg:text-xl text-lg  font-bold mb-2 text-gray-700'>T Shirt Print</h2></div>
   
    <p className='mb-4 mt-4 text-gray-500'>This is a brief description of the product.</p>
    <motion.button
      className=" text-white  bg-green-500 px-4 md:text-xl  py-1 rounded-sm transition-colors duration-300 hover:bg-green-600"
      whileTap={{ scale: 0.85 }}
      transition={{ type: 'spring', stiffness: 300 ,damping:10}}
    >
      Order
    </motion.button>
  </div>
 
  
       </div>
   </div>
   <div className='xl:px-10 lg:px-20 md:px-16 px-10 pb-10 h-fit overflow-hidden'>
    
   </div>
   </>
  )
}

export default Service
