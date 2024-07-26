import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/styles.css';
import photo1 from "../assets/About/photo1.jpg"
import photo2 from "../assets/About/photo2.jpg"
import photo3 from "../assets/About/photo3.jpg"
import photo4 from "../assets/About/photo4.jpg"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Carosel() {

  return (
    <>
       <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            
          }}
          centeredSlides={true}
        pagination={{
        
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='h-[60vh]'><img src={photo1} alt="" /></SwiperSlide>
        <SwiperSlide className='h-[60vh]'><img src={photo2} alt="" /></SwiperSlide>
        <SwiperSlide className='h-[60vh]'><img src={photo3} alt="" /></SwiperSlide>
        <SwiperSlide className='h-[60vh]'><img src={photo4} alt="" /></SwiperSlide>
      
      </Swiper>
    </>
  )
}

export default Carosel
