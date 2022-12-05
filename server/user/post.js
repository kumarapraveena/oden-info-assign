const express=require("express")
const postModel=require('../models/uploadModel')
const router=express.Router()
router.post("/upload",(req,res)=>{
    postModel.create(req.body).then((data)=>{
        res.status(200).send(data)
    })
})
router.get("/images",(req,res)=>{
    postModel.find().then((imageData)=>{
        res.status(200).send({images:imageData})
    })
})
module.exports=router