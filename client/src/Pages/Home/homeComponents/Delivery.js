import React from 'react'
import DeliveryBoy from '../../../assets/images/delivery-boy.svg'
import Clouds from '../../../assets/images/delivery-banner-bg.png'
import { DeliverySection, DeliveryContent, BtnDiv, Cloud, Boy, DeliveryImage } from '../Home.styles'
import { OrderBtn } from '../../../Components/Buttons'


const Delivery = () => {
  return (
    <>
        <DeliverySection>
            <DeliveryContent>
                <h1>Delivery to your door</h1>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                    <BtnDiv><OrderBtn /></BtnDiv>
            </DeliveryContent>
            <DeliveryImage>
                <Cloud src={Clouds} alt='' />
                <Boy src={DeliveryBoy} alt='' />
            </DeliveryImage>
        </DeliverySection>
    </>
  )
}

export default Delivery