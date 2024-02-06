import React from 'react'
import empty from '../static/empty.png'

import {Link} from 'react-router-dom'
const CartDisplay = () => {
  return (
    <>

    <div className='flex flex-col space-y-3 m-auto'>
    <img src={empty} className='m-auto'></img>
    <h1 className='text-black font-bold m-auto text-2xl'>Your cart is empty</h1>
    <p className='m-auto text-slate-400'>You can go to the home page to view more restaurants</p>
    <div className='m-auto'>
    <Link to='/home'><button className='px-10 py-3 bg-orange-500 text-white hover:bg-orange-700 font-bold mt-5'>SEE RESTAURANTS NEAR YOU</button></Link>
    </div>
    </div>
    </>
  )
}

export default CartDisplay