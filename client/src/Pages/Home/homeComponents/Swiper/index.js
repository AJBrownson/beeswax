import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

import "./styles.css";

// import required modules
import { Navigation, Lazy } from "swiper";

import Food from '../../../../assets/images/food.png'

import { FaPizzaSlice, FaWineBottle } from 'react-icons/fa'
import { FaPrescriptionBottle } from "react-icons/fa";



export default function Swipe() {
  return (
    <>
      <div className='container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        speed={600}
        // grid={{
        //   rows: 2
        // }}
        lazy={true}
        navigation={true}
        loop
        // pagination={{
        //   clickable: true,
        // }}
        modules={[ Navigation, Lazy ]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperslide">
            <div className="card">
              <FaPizzaSlice size={40} color='orange' />
              <img src={Food} alt='' />
              <div className="details">
                <h3>Snacks</h3>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
            <div className="card">
              <FaPrescriptionBottle size={40} color='orange' />
              <img src={Food} alt='' color='orange' />
              <div className="details">
                <h3>Soda</h3>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
            <div className="card">
              <FaWineBottle size={40} color='orange'/>
              <img src={Food} alt='' />
              <div className="details">
                <h3>Wines & Spirits</h3>
                
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
            <div className="card">
              <FaPizzaSlice size={40} color='orange' />
              <img src={Food} alt='' />
              <div className="details">
                <h3>Fast Food</h3>
                
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
