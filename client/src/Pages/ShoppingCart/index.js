import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { Wrapper, CartStack, CartTotal } from './styles.js'
import { CartItem } from '../../Components/CartItem/CartItem'
import { formatCurrency } from '../../Utilities/FormatCurrency'
import menuItems from '../../data/items.json'


const ShoppingCart = () => {
  const { cartItems } = useShoppingCart()
  return (
    <Wrapper>
      <h1>CART</h1>
      <CartStack>
        {cartItems.map(item =>(
          <CartItem key={item.id} {...item} /> )
        )}
        <CartTotal>
          Total: {" "}
            {formatCurrency(cartItems.reduce((total, cartItem) => {
            const item = menuItems.find(i => i.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
          }, 0
          ))}
        </CartTotal>
      </CartStack>
    </Wrapper>
  )
}

export default ShoppingCart