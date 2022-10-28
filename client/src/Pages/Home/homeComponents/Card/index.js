import React from 'react'
import Food from '../../../../assets/images/food.png'
import { FaPizzaSlice } from 'react-icons/fa'
import { OrderBtn } from '../../../../Components/Buttons'

const HomeMenuCard = () => {
  return (
    <>
        <div className='wrapper'>
            <div className='card'>
                <div className='top'>
                    <FaPizzaSlice />
                </div>
                <div className='mid'>
                    <img src={Food} alt='' />
                </div>
                <div className='bottom'>
                    <p>Hamburgers</p>
                    <OrderBtn />
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeMenuCard