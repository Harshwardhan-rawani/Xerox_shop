import React, { useEffect, useState } from 'react'
import photo from "../assets/Banner/banner.jpg"
import { motion, useTransform } from 'framer-motion';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { BiMenu } from 'react-icons/bi';
import "./css/Banner.css"
import { IoCloseSharp } from "react-icons/io5";
import Carosel from './Carosel';
function Banner({height}) {
    const [nav,setnav]=useState(false)
    const handlenav = ()=>{
        setnav(!nav)
    }


  return (
    <>
     <div className='w-[100%] relative'>

         
            <div className={`${height["y"]>250?"fixed animate z-50 bg-[#ffffff] ":""} z-50  w-full`}>
            <div
                
            className={`h-full w-full  flex items-center justify-between xl:px-28 lg:px-16 md:px-18 px-10 bg-[#ffffffd7]`}>
                    <div className='text-gray-700 lg:text-3xl md:text-2xl text-xl  font-bold'>Lets Print</div>
                    <motion.div 
                      whileTap={{ scale: 0.85 }}
                      transition={{ type: 'spring', stiffness: 300 ,damping:20}}
                    className={` flex items-center text-gray-700 font-bold md:hidden  py-3`} onClick={()=>{handlenav()}}><BiMenu className='md:text-4xl sm:text-3xl text-2xl'/></motion.div>
             <ul className='md:flex xl:space-x-10  lg:space-x-12 md:space-x-6 font-bold hidden py-5 '>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700' > <Link  to='home' smooth={true} duration={500}>Home</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="service" smooth={true} duration={500}>Service</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="gallery" smooth={true} duration={500}>Gallery</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="about" smooth={true} duration={500}>About us</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                 
               </ul> 
                         
            </div>
            </div>
     </div>
     <div className=''><Carosel/></div>
     <div className={`md:hidden fixed z-50 top-0 w-1/2 transition duration-200  ease-linear ${nav?"translate-x-0 opacity-100":" -translate-x-[100%] opacity-0"} translate-y-[${height["y"]}]  h-[100vh] bg-[#fffffff3] py-10`}>
                  <motion.div
                        whileTap={{ scale: 0.85 }}
                        transition={{ type: 'spring', stiffness: 300 ,damping:20}}
                  className={`absolute top-5 right-5 text-gray-700 text-3xl font-bold`} onClick={()=>{handlenav()}}><IoCloseSharp /></motion.div>
         <ul className={`w-fit mx-auto text-center mt-20 space-y-4 font-bold`}>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700' ><Link  to="home" smooth={true} duration={500} onClick={()=>{handlenav()}}>Home</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="service" smooth={true} duration={500} onClick={()=>{handlenav()}}>Service</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="gallery" smooth={true} duration={500} onClick={()=>{handlenav()}}>Gallery</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="blog" smooth={true} duration={500} onClick={()=>{handlenav()}}>Blog</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="about" smooth={true} duration={500} onClick={()=>{handlenav()}}>About us</Link></li>
                        <li className='text-gray-700 text-xl cursor-pointer border-b-2 border-b-white transition-all duration-300 hover:border-b-2 hover:border-b-gray-700 ' ><Link to="contact" smooth={true} duration={500} onClick={()=>{handlenav()}}>Contact</Link></li>
                 
                        </ul> 
            </div>

    </>
  )
}

export default Banner
