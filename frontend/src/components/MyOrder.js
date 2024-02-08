import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import {IMG_CDN_URL}  from '../utils/constants';
import Footer from "./Footer";
import Shimmer from "./Shimmer";

export default function MyOrder() {
  const [orderDatas, setorderData] = useState([]);
  const [date,setDate]=useState();
  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/order/myOrderData/",
      { email: localStorage.getItem("userEmail") },
      config
    );
    //   console.log(data);
    setorderData(data.orderData.order_data);
    console.log(data.orderData.order_data[0][0].Order_date);
    // console.log(data.orderData[0][0].Order_date)
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (orderDatas.length===0)?(
    <Shimmer/>
  ):(
    <>
      <Header />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {orderDatas.map((d, i) =>
    d.map((dd, index) => (!index) ? (
      // <h1 className="text-black">{dd.Order_date}</h1>
      // setDate(dd.Order_date)
      <></>
    ) : (
      <div key={index}>
        <div className="w-full sm:w-64 m-4 rounded-xl hover:scale-110 flex-wrap justify-start">
          <div>
            <img
              src={IMG_CDN_URL + dd.imageId}
              className="w-full rounded-lg"
              alt="Product"
            />
          </div>
          <div>
            <p className="font-bold text-clip truncate">{dd.name}</p>
          </div>
          <div className="grid grid-cols-2">
            <p className="font-bold">
              <i className="fa-regular fa-star" style={{ color: "#125e03" }} />
              {dd.avgRating}
            </p>
            <p className="font-bold">Quantity: {dd.inStock}</p>
            <p className="font-bold">Total Price: ₹ {dd.price * dd.inStock}</p>
            <p className="font-bold">Date: {orderDatas[i][0].Order_date}</p>
          </div>
        </div>
      </div>
    ))
  )}
</div>

      <Footer/>
    </>)
    // {
    //     orderData.map((item)=>
    //         <h1>{item[1].name}</h1>
    //     )
    // }

    // <div>
    //     <div>
    //         <Navbar />
    //     </div>

    //     <div className='container'>
    //         <div className='row'>

    //             {orderData !== {} ? Array(orderData).map(data => {
    //                 return (
    //                     data.orderData ?
    //                         data.orderData.order_data.slice(0).reverse().map((item) => {
    //                             return (
    //                                 item.map((arrayData) => {
    //                                     return (
    //                                         <div  >
    //                                             {arrayData.Order_date ? <div className='m-auto mt-5'>

    //                                                 {data = arrayData.Order_date}
    //                                                 <hr />
    //                                             </div> :

    //                                                 <div className='col-12 col-md-6 col-lg-3' >
    //                                                     <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
    //                                                         <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
    //                                                         <div className="card-body">
    //                                                             <h5 className="card-title">{arrayData.name}</h5>
    //                                                             <div className='container w-100 p-0' style={{ height: "38px" }}>
    //                                                                 <span className='m-1'>{arrayData.qty}</span>
    //                                                                 <span className='m-1'>{arrayData.size}</span>
    //                                                                 <span className='m-1'>{data}</span>
    //                                                                 <div className=' d-inline ms-2 h-100 w-20 fs-5' >
    //                                                                     ₹{arrayData.price}/-
    //                                                                 </div>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>

    //                                                 </div>

    //                                             }

    //                                         </div>
    //                                     )
    //                                 })

    //                             )
    //                         }) : ""
    //                 )
    //             }) : ""}
    //         </div>

    //     </div>

    //     <Footer />
    // </div>
  
}
// {"orderData":{"_id":"63024fd2be92d0469bd9e31a","email":"mohanDas@gmail.com","order_data":[[[{"id":"62ff20fbaed6a15f800125e9","name":"Chicken Fried Rice","qty":"4","size":"half","price":520},{"id":"62ff20fbaed6a15f800125ea","name":"Veg Fried Rice","qty":"4","size":"half","price":440}],"2022-08-21T15:31:30.239Z"],[[{"id":"62ff20fbaed6a15f800125f4","name":"Mix Veg Pizza","qty":"4","size":"medium","price":800},{"id":"62ff20fbaed6a15f800125f3","name":"Chicken Doub;e Cheeze Pizza","qty":"4","size":"regular","price":480}],"2022-08-21T15:32:38.861Z"]],"__v":0}}
