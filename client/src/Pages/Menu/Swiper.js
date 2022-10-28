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

import Food from '../../assets/images/food.png'



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
              <img src={Food} alt='' />
              <div className="details">
                <h3>Chicken Masala</h3>
                <p>$12.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
            <div className="card">
              <img src={Food} alt='' />
              <div className="details">
                <h3>Chicken Masala</h3>
                <p>$12.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
            <div className="card">
              <img src={Food} alt='' />
              <div className="details">
                <h3>Chicken Masala</h3>
                <p>$12.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
            <div className="card">
              <img src={Food} alt='' />
              <div className="details">
                <h3>Chicken Masala</h3>
                <p>$12.00</p>
                <button>Add to Cart</button>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
