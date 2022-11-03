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
import { MenuItems } from "./MenuItems";
import menuItems from '../../data/items.json'
// import GiWineBottle FiCoffee <FiShoppingCart />



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
        {menuItems.map(item => (
            <SwiperSlide key={item.id}>
              <MenuItems {...item} /> 
            </SwiperSlide>
          ))}

        {/* <SwiperSlide className="swiperslide">
            <div className="card">
              <img src={Food} alt='' />
              <div className="details">
                <h3>Chicken Masala</h3>
                <p>₦2500</p>
              </div>
              <div className="button-div">
                {quantity === 0 ? (
                  <Add2Cart onClick={() => increaseCartQuantity()} />
                ) : <div className="column-div">
                      <div className="row-div">
                        <Increase onClick={() => increaseCartQuantity()} />
                        <div>
                          <span>{quantity}</span> in cart
                        </div>
                        <Decrease onClick={() => decreaseCartQuantity()} />
                      </div>
                      <Remove onClick={() => removeFromCart()} />
                  </div>}
              </div>
              
            </div>
        </SwiperSlide> */}
        
      </Swiper>
      </div>
    </>
  );
}
