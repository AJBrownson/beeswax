import React from 'react'
import { FiShoppingCart } from 'react-icons/fi' 
import { Button } from './Buttons.styles'
import  { Link } from 'react-router-dom'


export const OrderBtn = () => {
  return (
    <>
    <Link to='/menu'>
      <Button primary>Order Now</Button>
    </Link>
    </>
  )
}


export const ResBtn = () => {
    return (
    <>
        <Button reserve>Reserve Now</Button>
    </>
      
    )
}


export const Add2Cart = () => {
  return (
  <>
      <Button cart>
      <FiShoppingCart color="white" size={25} />
      </Button>
  </>
    
  )
}


export const Increase = () => {
  return (
    <>
      <Button add> + </Button>
    </>
  )
}


export const Decrease = () => {
  return (
    <>
      <Button subtract> - </Button>
    </>
  )
}


export const Remove = () => {
  return (
    <>
      <Button remove>Remove</Button>
    </>
  )
}


export const Redirect2Menu = () => {
  return (
  <>
        <Link to='/menu'>
        <Button menu>Go to Menu</Button>
        </Link>
  </>
    
  )
}