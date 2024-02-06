const jwt=require('jsonwebtoken');
const env=require('dotenv').config();

const JWT_SECRET=process.env.JWT_SECRET;
const generateToken=(id)=>{
    return jwt.sign({id},JWT_SECRET,{
        expiresIn:"5d",
    });
};

module.exports=generateToken;