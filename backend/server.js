const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const orderRoutes=require('./routes/orderRoutes');
const myOrderRoutes=require('./routes/myOrderRoutes')
const cors=require('cors');
const path = require("path");
const env=require('dotenv').config();
const stripe=require('stripe')(process.env.STRIPE_TEST)
const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_140,h_140,c_fill/";
console.log(require("dotenv").config())
connectDB();
const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api",orderRoutes);
app.use("/api/order/",myOrderRoutes);



app.get("/",(req,res)=>{
    res.send("Working");
});

app.post("/api/create-checkout-session",async(req,res)=>{
    const {products}=req.body;
    const lineItems = products.map((product)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:product.name,
                images:[IMG_CDN_URL+product.imageId]
            },
            unit_amount:product.price ,
        },
        quantity:1
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/failure",
    });

    res.json({id:session.id})
})

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

app.listen(8080,()=>{
    console.log("App is running on port 8080")
})