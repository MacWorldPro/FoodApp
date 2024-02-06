import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'

export default function MyOrder() {

    const [orderDatas, setorderData] = useState([])

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          const { data } = await axios.post(
            "/api/order/myOrderData/",
            { email:localStorage.getItem('userEmail')},
            config
          );
        //   console.log(data);
          setorderData(data.orderData.order_data);
          console.log(data.orderData.order_data)



    }

    useEffect(() => {
        fetchMyOrder()
        
    }, [])

    return (
        <>
        <Header/>
        <div className='text-center my-[20px]'>
        <h1 className='text-4xl text-orange-500'>MyOrder</h1>
        </div>
        <div>
      
        {
            
            orderDatas.map((d)=>(
                
                d.map((dd)=>
                <div>
                    
               
                <h1 className='text-black text-center bg-orange-500 my-[10px]'>{dd.Order_date}</h1>
                
                
                <div className='grid grid-cols-2 border border-orange-100'>

                
                <h1 className='text-black m-auto'>{dd.name}</h1>
                <h1 className='text-black m-auto'>{dd.price}</h1>
                </div>
                </div>
                )
                
                
               
            ))
            
        }
        </div>

        </>
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
    )
}
// {"orderData":{"_id":"63024fd2be92d0469bd9e31a","email":"mohanDas@gmail.com","order_data":[[[{"id":"62ff20fbaed6a15f800125e9","name":"Chicken Fried Rice","qty":"4","size":"half","price":520},{"id":"62ff20fbaed6a15f800125ea","name":"Veg Fried Rice","qty":"4","size":"half","price":440}],"2022-08-21T15:31:30.239Z"],[[{"id":"62ff20fbaed6a15f800125f4","name":"Mix Veg Pizza","qty":"4","size":"medium","price":800},{"id":"62ff20fbaed6a15f800125f3","name":"Chicken Doub;e Cheeze Pizza","qty":"4","size":"regular","price":480}],"2022-08-21T15:32:38.861Z"]],"__v":0}}