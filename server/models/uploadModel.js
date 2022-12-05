const mongoose=require("mongoose")
const uploadSchema=new mongoose.Schema({
image:String
})
 const uploadModel=mongoose.model("upload-image",uploadSchema)
 module.exports=uploadModel