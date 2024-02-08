import React from "react";
import { Button } from '@chakra-ui/react';
import { clearCart, removeItem, removeSingleItem,addItem } from '../utils/redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux'
import Header from "./Header";
import cartHelper from "../utils/Helper/cartHelper";
import axios from "axios";
import {loadStripe} from '@stripe/stripe-js';
import {IMG_CDN_URL}  from '../utils/constants';
import toast from 'react-hot-toast';

const CartDisplay = () => {
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);
        const dispatch=useDispatch();
    const helpClear=()=>{
      dispatch(clearCart());
    }

    const helpPop=()=>{
      dispatch(removeItem())
      toast.error("Item Removed !!")
    }

    const helpSinglePop=(item)=>{
      dispatch((removeSingleItem(item)))
    }

    const handleAddItem=(item)=>{
      // dispatch an action when someone clicks on this button
      dispatch(addItem(item))
      console.log(item);

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
     <div className="mx-8 sm:mx-[150px] my-8 sm:my-[60px]">
  <div className="bg-orange-500 grid grid-cols-2 text-center">
    <h1 className="text-white font-bold m-auto">Your Cart({cartItems.length})</h1>
    <div className="flex justify-end">
      <Button colorScheme="red" variant="solid" onClick={helpClear} className="my-1">
        Clear Cart
      </Button>
    </div>
  </div>
  <div className="grid grid-cols-6 border space-x-4 pl-10 mt-7">
    <h1 className="text-black m-auto col-span-1">Action</h1>
    <h1 className="text-black m-auto col-span-1">Product</h1>
    <h1 className="text-black m-auto col-span-1">Name</h1>
    <h1 className="text-black m-auto col-span-1">Price</h1>
    <h1 className="text-black m-auto col-span-1">Quantity</h1>
    <h1 className="text-black m-auto col-span-1">Total Price</h1>
  </div>
  {
    cartItems.map((item)=>
      <div className="grid grid-cols-6 border space-x-4 pl-10 sm:pl-0">
        <div className="flex items-center ml-2 sm:ml-0 col-span-1">
          <Button colorScheme="orange" variant="solid" onClick={helpPop} className="my-1">
            Pop
          </Button>
        </div>
        <div className="col-span-1">
          <img src={IMG_CDN_URL+item.imageId} className="w-[50px] my-1"></img>
        </div>
        <h1 className="text-black text-clip truncate m-auto col-span-1">{item.name}</h1>
        <h1 className="text-black m-auto col-span-1">{item.price}</h1>
        <div className="grid grid-cols-3 items-center col-span-1">
          <p className="text-black bg-orange-200 my-[10px] text-center mx-auto sm:mx-0" onClick={item.inStock<=1?()=>helpPop():()=>helpSinglePop(item)}>-</p>
          <h1 className="text-black text-center my-1">{item.inStock}</h1>
          <p className="text-black bg-orange-200 my-[10px] text-center mx-auto sm:mx-0" onClick={()=>handleAddItem(item)}>+</p>
        </div>
        <h1 className="text-black ml-[20px] my-[10px] col-span-1">{item.inStock*item.price}</h1>
      </div>
    )
  }
  <hr className="border-gray-800 my-8" />
  <div className="flex flex-row bottom-0 right-0">
    <div className="container flex flex-col items-center">
      <Button colorScheme="orange" variant="solid" onClick={()=>{makePayment();handleCheckOut();}} className="my-1">
        Checkout
      </Button>
    </div>
    <div className="grid grid-cols-2">
      <h1 className="text-black m-auto text-lg">Total Price:</h1>
      <h1 className="text-black m-auto text-lg">₹ {cartHelper(cartItems)}</h1>
    </div>
  </div>
</div>



    </>
  );
};

export default CartDisplay;
