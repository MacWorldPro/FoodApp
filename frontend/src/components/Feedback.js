
import { useState,useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
const Feedback = () => {
  const [txt,setTxt]=useState("");
  const changeTxt=(e)=>{
    setTxt(e.target.value);
  }
  const form = useRef();
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

    const sendEmail = (e) => {
      
      e.preventDefault();
  
      emailjs
        .sendForm('service_1eizcal', 'template_jtgzu4j', form.current, {
          publicKey: 'pgGqI22_nuS9RRB8w',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setTxt("");
            toast.success("We Will Reach You Soon!!")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
  return (
    <>
    <Header/>
    <form className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg mb-[100px]" ref={form} onSubmit={sendEmail}>
  <h2 className="text-2xl font-bold mb-6 text-orange-400">Feedback Form</h2>
  <div className="mb-4">
    <label className="block text-orange-400 font-bold mb-2" htmlFor="name" >
      Name:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="name"
      type="text"
      placeholder="Enter your name"
      value={user.name}
      name="from_name"
    />
  </div>
  <div className="mb-4">
    <label className="block text-orange-400 font-bold mb-2" htmlFor="email" >
      Email:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="email"
      placeholder="Enter your email"
      value={user.email}
      name="from_email"
    />
  </div>
  <div className="mb-4">
    <label className="block text-orange-400 font-bold mb-2" htmlFor="feedback" >
      Feedback:
    </label>
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="feedback"
      rows={5}
      placeholder="Enter your feedback"
      defaultValue={""}
      name="message"
      value={txt}
      onChange={changeTxt}
    />
  </div>
  <button
    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Submit
  </button>
</form>
<Footer/>
    </>
  )
}

export default Feedback;