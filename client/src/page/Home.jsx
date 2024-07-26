import React from 'react'
import Banner from '../component/Banner'
import { useWindowScroll } from 'react-use';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Number from '../component/Number';
import Gallery from '../component/Gallery';
import Service from '../component/Service';
import Blog from '../component/Blog';
import About from '../component/About';
import Contact from '../component/Contact';
import Carosel from '../component/Carosel';
function Home() {
  const scrollRef = React.useRef(null);
  const { x, y } = useWindowScroll();

  return (
    <>
    <Element name='home' >
    <Banner height={{y}}/>
    </Element>

    <Element name='service' className='bg-white'>
     <Service/>
    </Element>
  
    <Element name='blog' className='bg-black'>
     <Blog/>
    </Element>
    <Element name='about' className='bg-black pt-10 '>
     <About/>
    </Element>
    <Element name='contact' className=' bg-black border-t-2 px-10'>
      <Contact/>
    </Element> 
    </>
  )
}

export default Home
