import React from 'react'
import Card from './Card'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// MELUMAT BAZASI
import melumatBazasi from "../data.json"


// import required modules
import {Autoplay, FreeMode, Pagination } from "swiper";

const CardsSection = () => {
  return (
    <>
    
    

    <h1 className='text-center display-1 mt-5 p-5'>Xidmətlərimiz</h1>
    <div className='custom-cards-section'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
            376: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },

            1500: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
          }}


        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          


        modules={[Autoplay,FreeMode, Pagination]}
        className="mySwiper"
      >

     {
        melumatBazasi.map(melumat=> (
          // PROPS 

          <SwiperSlide><Card meqaleBasligi = {melumat.title} meqale={melumat.body} shekil={melumat.img} /></SwiperSlide>

        ))
     }

     
      </Swiper>
    </div>

    </>
  )
}

export default CardsSection