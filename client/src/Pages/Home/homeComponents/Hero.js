import React from 'react'
import { 
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
} from '../Home.styles';
import { OrderBtn } from '../../../Components/Buttons';


const Hero = () => {
  return (
    <>
      <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Enjoy our tasty Pizza</HeroH1>
          <HeroP>Ready and hot!</HeroP>
          <OrderBtn />
          {/* <HeroBtn>Place Order</HeroBtn> */}
        </HeroItems>
      </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero