import React from "react";
import './styles.css';
import { Add2Cart, Increase, Decrease, Remove } from "../../Components/Buttons";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../Utilities/FormatCurrency";
import { FiShoppingCart } from "react-icons/fi";


export function MenuItems ({ id, name, price, image }) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
     
    return (
            <>
                <div className="card">
                <img src={image} alt='' />
                <div className="details">
                    <h3>{name}</h3>
                    <p>{formatCurrency(price)}</p>
                </div>
                
                <div className="button-div">
                {quantity === 0 ? (
                    <button className="add2Cart" onClick={() => increaseCartQuantity(id)}> <FiShoppingCart /> </button>
                ) : <div className="column-div">
                    <div className="row-div">
                        <button className="decrease" onClick={() => decreaseCartQuantity(id)} > - </button>
                        <div>
                            <span>{quantity}</span> in cart
                        </div>
                        <button className="increase" onClick={() => increaseCartQuantity(id)} > + </button>
                    </div>
                    <button className="remove" onClick={() => removeFromCart(id)} >Remove</button>
                </div> }
                </div>
                </div>
            </>
        
    )
}