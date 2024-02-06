import React from 'react'
import CartEmpty from './CartEmpty';
import CartDisplay from './CartDisplay';
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
  return (cartItems?.length===0)?(
    <CartEmpty/>
  ):(
  <CartDisplay/>
  )
}

export default Cart;