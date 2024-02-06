import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header';
import { Image } from '@chakra-ui/react';


const About = () => {
  const func=()=>{
    const userInfo=JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    return userInfo;
  }
  const [profileData,setProfileData]=useState([]);
useEffect(()=>{
  const userInfo=func();
  setProfileData(userInfo);
  console.log(profileData)
  console.log(typeof(userInfo))
  console.log(profileData.pic)

},[]);
  return (
    <>
    <Header></Header>
    <div></div>
    <h1 className='text-black'>{profileData.name}</h1>
    <Image
              borderRadius="full"
              boxSize="150px"
              src={profileData.pic}
              alt={profileData.name}
            />

    </>
  )
}

export default About;