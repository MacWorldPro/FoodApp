


const mongoose=require('mongoose');
const env=require('dotenv').config();
const url=process.env.DATABASE;
const connectDB=async()=>{
  try {
    const conn=await mongoose.connect(url);
    console.log('connected');
    console.log(`${conn.connection.host}`)
  } catch (e) {
    console.log(e);
  } 
};

module.exports=connectDB;
