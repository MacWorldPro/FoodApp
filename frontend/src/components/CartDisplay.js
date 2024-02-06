import React from "react";
import { Button } from '@chakra-ui/react';
import { clearCart, removeItem } from '../utils/redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux'
import Header from "./Header";
import cartHelper from "../utils/Helper/cartHelper";
import axios from "axios";
import {loadStripe} from '@stripe/stripe-js';

const CartDisplay = () => {
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const helpClear=()=>{
      dispatch(clearCart());
    }

    const helpPop=()=>{
      dispatch(removeItem())
    }

    const handleCheckOut = async () => {
      let userEmail = localStorage.getItem("userEmail");
      console.log(userEmail);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "/api/orderData",
        {
          order_data: cartItems,
          email: userEmail,
          order_date: new Date().toDateString()
        },
        config
      );
      // console.log(data,localStorage.getItem("userEmail"),new Date())
      // let response = await fetch("http://localhost:8080/api/orderData", {
      //   // credentials: 'include',
      //   // Origin:"http://localhost:3000/login",
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     order_data: cartItems,
      //     email: userEmail,
      //     order_date: new Date().toDateString()
      //   })
      // });
      // console.log("JSON RESPONSE:::::", response.status)
      if (response.status === 200) {
        helpClear();
      }
    }

        // payment integration
        const makePayment = async()=>{
          const stripe = await loadStripe("pk_test_51OfzqKSBkk5fRreqXtg7vm3AA3ojYi61Es53VkopR2Jk7wZWFvQOeLQbi1QafUD9Lu9DrSfeBAftXOx7J21mTTtz00slezkLw0");
  
          const body = {
              products:cartItems
          }
          const headers = {
              "Content-Type":"application/json"
          }
          const response = await fetch("http://localhost:3000/api/create-checkout-session",{
              method:"POST",
              headers:headers,
              body:JSON.stringify(body)
          });
  
          const session = await response.json();
  
          const result = stripe.redirectToCheckout({
              sessionId:session.id
          });
          
          if(result.error){
              console.log(result.error);
          }
      }
  return (
    <>
    <Header/>
      {/* <Button colorScheme="orange" variant="solid" onClick={helpClear}>
        ClearCart
      </Button> */}
      <div className="grid grid-cols-4 border space-x-4 pl-10 mt-7">
        <h1 className="text-black m-auto">Name</h1>
        <h1 className="text-black m-auto">Price</h1>
        <h1 className="text-black m-auto">Quantity</h1>
        <h1 className="text-black m-auto">Remove</h1>
      </div>
      {
        cartItems.map((item)=>
       
        <div className="grid grid-cols-4 border space-x-4 pl-10 " id={item.id}>
        <h1 className="text-black text-clip truncate m-auto">{item.name}</h1>
        <h1 className="text-black m-auto">{item.price}</h1>
        <h1 className="text-black m-auto">1</h1>
        <div>
        <Button colorScheme="orange" variant="solid" onClick={helpPop} className="my-1">
        Pop
      </Button>
      </div>
      </div>
      
        )
      }

      {/* <div className="grid grid-cols-4 space-x-2">
        <h1 className="text-black">{cartItems.map((item) => item.name)}</h1>
      </div> */}
      <div className="grid grid-cols-2">
        <h1 className="text-black m-auto text-2xl bg-orange-500">Total Price</h1>
        <h1 className="text-black m-auto text-2xl">{cartHelper(cartItems)}</h1>
        <Button colorScheme="orange" variant="solid" onClick={()=>{makePayment();handleCheckOut();}} className="my-1">
       Checkout
      </Button>
      </div>
      
    </>
  );
};

export default CartDisplay;
