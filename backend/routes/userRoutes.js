const express=require('express');
const {registerUser,authUser}=require('../controller/userController');
const { protect } = require("../middlewares/authMiddleware");

const router=express.Router();


router.route('/').post(registerUser);
router.route("/login").post( authUser);

module.exports=router;