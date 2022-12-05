const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
const validator=require("validator")
const multer=require("multer")()
const bcrypt=require("bcryptjs")
require("dotenv").config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(multer.array())
const userController=require("./user/user")
const postController=require("./user/post")
app.listen(3006,(err)=>{
if(!err){
    console.log("Connected Successfully at Port 3006")
}
else{
    console.log(err)
}
})
mongoose.connect("mongodb://localhost:27017/oden-info-api",(data)=>{
console.log("Successfully Connected To DB")
},(err)=>{
console.log(err)
})
app.use("/user",userController)
app.use("/post",postController)