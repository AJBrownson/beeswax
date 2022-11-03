import React from 'react'
import { MenuSection } from '../Home.styles'
// import { MenuData } from '../data';
// import Food from '../../../assets/images/food.png'
import Swipe from './Swiper'
import { Redirect2Menu } from '../../../Components/Buttons'

const Menu = () => {
  return (
    <>
        <MenuSection>
            <h1>What we offer</h1>
            {/* <p>Here are our most popular menu items</p> */}
            <p>Here are what we offer on our menu</p>
            <Swipe />
            <Redirect2Menu />
        </MenuSection>
    </>
  )
}

export default Menu