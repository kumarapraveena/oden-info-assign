const userModel=require("../models/signModel")
const bcrypt=require("bcryptjs")
const checkExistingUser=async(username)=>{
    let exist=false
await userModel.find({username:username}).then((userData)=>{
    if(userData.length){
exist=true
    }
})
return exist;
}
const generatePasswordHash=(password)=>{
    let salt=10
    return new Promise((res,rej)=>{
        bcrypt.genSalt(salt).then((saltHash)=>{
            bcrypt.hash(password,saltHash).then((passWordHash)=>{
                res(passWordHash)
            })
        })
    })

}
module.exports={checkExistingUser,generatePasswordHash}