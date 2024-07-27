import React from 'react'
import Service from '../component/Service';
import Blog from '../component/Blog';
import Carosel from '../component/Carosel';

function Home() {
  return (
    <>
    <div className='bg-white'>
     <Carosel/>
     <Service/>
     <Blog/>
    </div>
  

   
    </>
  )
}

export default Home
