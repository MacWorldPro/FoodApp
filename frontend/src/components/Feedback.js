import React from 'react'
import { useState,useEffect } from 'react';
import Header from './Header';
const Feedback = () => {
    const func=()=>{
        const userInfo=JSON.parse(localStorage.getItem("userInfo"));
        console.log(userInfo);
        return userInfo;
      }
      const [user,setProfileData]=useState([]);
    useEffect(()=>{
      const userInfo=func();
      setProfileData(userInfo);

    
    },[]);
  return (
    <>
    <Header/>
    <form className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-6 text-orange-400">Feedback Form</h2>
  <div className="mb-4">
    <label className="block text-orange-400 font-bold mb-2" htmlFor="name">
      Name:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="name"
      type="text"
      placeholder="Enter your name"
      value={user.name}
    />
  </div>
  <div className="mb-4">
    <label className="block text-orange-400 font-bold mb-2" htmlFor="email">
      Email:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      placeholder="Enter your email"
      value={user.email}
    />
  </div>
  <div className="mb-4">
    <label className="block text-orange-400 font-bold mb-2" htmlFor="feedback">
      Feedback:
    </label>
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="feedback"
      rows={5}
      placeholder="Enter your feedback"
      defaultValue={""}
    />
  </div>
  <button
    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Submit
  </button>
</form>

    </>
  )
}

export default Feedback;