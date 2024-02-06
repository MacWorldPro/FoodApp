import { useState,useEffect } from "react";
import { MENU_API } from "../constants";
const useCallData=()=>{
    const [dat,setData]=useState();

    const getRestaurants = async () => {
        try {
          const data = await fetch(MENU_API);
    
          const json = await data.json();
        //   console.log(json);
    
          // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
          async function checkJsonData(jsonData) {
    
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    
              // initialize checkData for Swiggy Restaurant data
              let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
              // if checkData is not undefined then return it
              if (checkData !== undefined) {
                return checkData;
              }
            }
          }
          // call the checkJsonData() function which return Swiggy Restaurant data
          const resData = await checkJsonData(json);
    
          // update the state variable restaurants with Swiggy API data
          setData(resData);
    
      
        } catch (error) {
          console.log(error);
        }
    
      }
    useEffect(()=>{
        getRestaurants();
    },[])

    return dat;
}

export default useCallData;