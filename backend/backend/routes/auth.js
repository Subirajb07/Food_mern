const express=require("express");
const router=express.Router();

const User=require("../models/User");

const bcrypt=require("bcrypt");


// REGISTER

router.post("/register",async(req,res)=>{

    try {
        const {name,email,password}=req.body;

        if(!name || !email || !password) {
            return res.status(400).json({message:"All fields are required"});
        }

        const hashPassword=await bcrypt.hash(password,10);

        const user=new User({
            name,
            email,
            password:hashPassword
        });

        await user.save();

        res.json({
            message:"Register Success"
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({message:"Error registering user: " + err.message});
    }

});





// LOGIN

router.post("/login",async(req,res)=>{

    try {
        const {email,password}=req.body;

        if(!email || !password) {
            return res.status(400).json({message:"Email and password are required"});
        }

        const user=await User.findOne({email});

        if(!user) {
            return res.json({
                message:"Invalid User"
            })
        }

        const checkPassword=await bcrypt.compare(password,user.password);

        if(!checkPassword) {
            return res.json({
                message:"Wrong Password"
            })
        }

        res.json({
            message:"Login Successful"
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({message:"Error logging in: " + err.message});
    }

});




module.exports=router;