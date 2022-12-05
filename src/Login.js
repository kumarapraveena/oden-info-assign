import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const[loginState,setLoginState]=useState({})
    const loginForm=[{attr:"username",id:"username",label:"Username:",type:"text"},
                      {attr:"password",id:"password",label:"Password:",type:"password"}]
    const navigate=useNavigate()
    const handleInputChange=(e,id)=>{
        setLoginState({...loginState,[id]:e.target.value})
    }
    const handleUseradd=(e,id)=>{
        console.log(loginState)
        axios({
            url:"http://localhost:3006/user/login",
            method:"POST",
            headers:{

            },
            data:loginState
        }).then((res)=>{
            localStorage.setItem("user",JSON.stringify(loginState))
            window.alert(`Logged In Successfully`)
            navigate("/upload")
            // console.log(res.data)
            // window.alert(res.data)
        }).catch((err)=>{
            window.alert(err.response.data)
        })
    }
  return (
    <div>
        <center>
        <form>
            {loginForm.map((formKey)=>{
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

export default Login