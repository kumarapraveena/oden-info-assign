import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {useNavigate,Link} from "react-router-dom"
const SignUp = () => {
    const[signUpState,setSignupState]=useState({})
    const signupForm=[{attr:"username",id:"username",label:"Username:",type:"text"},{attr:"email",id:"email",label:"Email:",type:"text"},
    {attr:"password",id:"password",label:"Password:",type:"password"}]
    const navigate=useNavigate()
    const handleInputChange=(e,id)=>{
        setSignupState({...signUpState,[id]:e.target.value})
    }
    const handleUseradd=(e,id)=>{
        console.log(signUpState)
        axios({
            url:"http://localhost:3006/user/signup",
            method:"POST",
            headers:{

            },
            data:signUpState
        }).then((res)=>{
            console.log(res.data)
            window.alert(res.data)
            navigate("/login")
        }).catch((err)=>{
            window.alert(err.response.data)
        })
    }
  return (
    <div>
        <center>
<form>
            {signupForm.map((formKey)=>{
                return(
                    <div>
                        <div>
                            <label for={formKey.id}>{formKey.label}</label>
                        </div>
                        <div>
                            <input type={formKey.type} id={formKey.id} onChange={(e)=>{handleInputChange(e,formKey.id)}}/>
                        </div>
                    </div>
                )
            })}
        </form>
        <button type="button" onClick={handleUseradd}>Submit</button>
        </center>
    </div>
  )
}

export default SignUp