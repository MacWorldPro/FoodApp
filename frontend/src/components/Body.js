import React ,{useState,useEffect, useContext}from 'react'
import Shimmer from './Shimmer';
import RestaurantCard  from './RestrauntCard';
import { Link } from 'react-router-dom';
import filterContext from '../utils/context/filterContext';



const Body = () => {
  const [allRestaurants, setAllRestaurant] = useState([]);
  const {filterData,setFilterData}=useContext(filterContext);
  
  useEffect(() => {
    getRestaurants();
  }, []);



  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      console.log(json);

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
      console.log(resData);
      setAllRestaurant(resData);
      setFilterData(resData);
      console.log(filterData);

  
    } catch (error) {
      console.log(error);
    }

  }


 
  return (allRestaurants?.length===0)? (
    <Shimmer/>
  ):(
    <>
    

      <div className='grid grid-cols-4'>
        {
          
          
          filterData?.map((restaurant)=>{
            return (
              <Link
                key={restaurant?.info.id}
                to={"/restaurant/" + restaurant?.info.id}

              >
                <RestaurantCard  {...restaurant?.info} />
              </Link>
            );
          })
        }
      </div>
    </>
  )
}

export default Body;
