

// const usecartHelper=()=>{
//     const cartItems=useSelector((store)=>store.cart.items);
//     const totalPrice=0;
//     cartItems.map((item)=>
//     totalPrice=totalPrice+item.price
//     )
//     return totalPrice;

// }

function cartHelper(cartItems) {

  let totalPrice = 0;
  console.log(typeof(cartItems));
  cartItems.map((item) => (totalPrice = totalPrice + (item.price*item.inStock)));
  
  return totalPrice;
}
export default cartHelper;
