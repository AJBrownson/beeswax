import React from 'react'
import { MenuSection } from '../Home.styles'
// import { MenuData } from '../data';
import Food from '../../../assets/images/food.png'
import Swipe from './Swiper'

const Menu = () => {
  return (
    <>
        <MenuSection>
            <h1>What we offer</h1>
            <p>Here are our most popular menu items</p>
            <Swipe />
        </MenuSection>
    </>
  )
}

export default Menu