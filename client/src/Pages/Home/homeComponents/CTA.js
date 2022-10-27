import React from 'react'
import Burger from '../../../assets/images/cta-banner.png'
import { DeliverySection, DeliveryContent, BtnDiv, DeliveryImage } from '../Home.styles'
import { OrderBtn } from '../../../Components/Buttons'

const CTA = () => {
  return (
    <>
            <DeliverySection>
            <DeliveryImage>
                <img src={Burger} alt='' />
            </DeliveryImage>
            <DeliveryContent>
                <h1>Tasty burgers for your thirsty palates</h1>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                    <BtnDiv><OrderBtn /></BtnDiv>
            </DeliveryContent>
        </DeliverySection>
    </>
  )
}

export default CTA