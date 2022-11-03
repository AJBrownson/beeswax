import React from 'react'
import { 
  MenuHeroContainer, 
  HeroContent, 
  HeroItems, 
  HeroH1, 
  HeroP,
  Menuu,
  MenuHeading
} from './Menu.styles'
import Swipe from './Swiper'
import products from '../../data/items.json'
import StoreItem from '../../Components/Stores/StoreItem'

const Menu = () => {
  return (
    <>
      <MenuHeroContainer>
        <HeroContent>
          <HeroItems>
          <HeroH1>Tasty snacks and dishes</HeroH1>
          <HeroP>Choose from our menu below</HeroP>
          </HeroItems>
        </HeroContent>
      </MenuHeroContainer>
      
      <Menuu>
        <MenuHeading>Pizza</MenuHeading>
        <Swipe />
      </Menuu>

      <Menuu>
        <MenuHeading>Hamburgers</MenuHeading>
        <Swipe />
      </Menuu>
    </>
  )
}

export default Menu