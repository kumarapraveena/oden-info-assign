const express=require("express")
const userModel=require("../models/signModel")
const {checkExistingUser}=require("./utility")
const {generatePasswordHash}=require("./utility")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
// const mongoose=require("mongoose")
const router=express.Router()
router.post("/signup",async (req,res)=>{
    if( await checkExistingUser(req.body.username)){
        res.status(400).send(`User Already Exists Please Try With New One`)
    }
    else{
generatePasswordHash(req.body.password).then((passwordHash)=>{
    userModel.create({username:req.body.username,email:req.body.email,password:passwordHash}).then((userData)=>{
        console.log(userData)
        res.status(200).send(`User Registered Successfully`)
    })
})
    }
})
router.post("/login",(req,res)=>{
    userModel.find({username:req.body.username}).then((userData)=>{
        if(userData.length){
    bcrypt.compare(req.body.password,userData[0].password).then((val)=>{
        console.log(val)
        if(val){
        const authToken=jwt.sign(userData[0].username,process.env.secretKey)
        res.status(200).send({authToken})
        }
        else{
            res.status(400).send("InCorrect Password")
        }
    })
        }
        else{
            res.status(400).send(`User Not Found`)
        }
    })
})
router.put("/updatepassword",(req,res)=>{
    userModel.find({username:username}).then((user)=>{
        if(user.length){
            bcrypt.compare(req.body.olppassword,user[0].password).then((isMatch)=>{
                if(isMatch){
                    userModel.updateOne({password:generatePasswordHash(req.body.newpassword)})
                }
                
                else{
res.status(400).send("Old Password is Incorrect")
                }
            })
        }
        else{
            res.status(400).send("Invalid User")
        }
    })
})
module.exports=router
