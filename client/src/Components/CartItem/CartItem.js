import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import menuItems from '../../data/items.json'
import { CartStack, CartContent, ProductName, Price, SubTotal, RemoveButton } from './styles'
import { formatCurrency } from '../../Utilities/FormatCurrency'

export function CartItem ({id, quantity}) {
    const { removeFromCart } = useShoppingCart()
    const item = menuItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <>
            <CartStack>
                <CartContent>
                <img src={item.image} alt='thumbnail snapshot of product' />
                    <ProductName>
                        {item.name} {" "}
                        {quantity > 1 && (
                            <span> x{quantity} </span>
                        )}
                    <Price>
                        {formatCurrency(item.price)}
                    </Price>
                    </ProductName>
                </CartContent>
                <SubTotal>
                    <div> {formatCurrency(item.price * quantity)} </div>
                    <RemoveButton onClick={()=> removeFromCart(item.id)}>&times;</RemoveButton>
                </SubTotal>
            </CartStack>
        </>
    )
}