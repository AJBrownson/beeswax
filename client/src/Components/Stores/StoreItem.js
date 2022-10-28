import React from 'react'
import {Cardd} from './styles'


const StoreItem = ({id, name, price, image}) => {
  return (
    <>
        <Cardd>
            <img src={image} alt='' />
        </Cardd>
    </>
  )
}

export default StoreItem