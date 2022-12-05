const mongoose=require("mongoose")
const signSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{if(value.length<6){
                return false
            }
            return true
        },
        message:(props)=>{return `${props.value} having length less than 6`}
        }
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
const userModel=mongoose.model("api-odeninfo",signSchema)
module.exports=userModel