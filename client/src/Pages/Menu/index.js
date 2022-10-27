import React from 'react'
import { 
  MenuHeroContainer, 
  HeroContent, 
  HeroItems, 
  HeroH1, 
  HeroP 
} from './Menu.styles'


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
    </>
  )
}

export default Menu