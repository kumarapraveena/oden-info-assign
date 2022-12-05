import axios from 'axios'
import React from 'react'
import { useState,useEffect} from 'react'

const Upload = () => {
    const[images,setImages]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3006/post/images").then((imageData)=>{
            setImages(imageData.data.images)
        })
    },[])
    const handleUpload=async (e)=>{
        const baseFilePath=await fileBaseConversion(e.target.files[0])
        axios.post("http://localhost:3006/post/upload",{image:baseFilePath})
        console.log(baseFilePath)
    }
    const fileBaseConversion=(file)=>{
        return new Promise((res,rej)=>{
            const reader=new FileReader()
            reader.readAsDataURL(file)
            reader.onload=()=>{
                res(reader.result)
            }
            reader.onerror=(err)=>{
rej(err)
            }
        })
    }
  return (
    <div>
        <center>
         <form>
        <input type="file" onChange={(e)=>handleUpload(e)}/>
        </form>
        {/* <input type="file" onChange={(e)=>handleUpload(e)}/> */}
        {
            images.map((url)=>{
                return(
                    <img src={url.image} alt="oden-info"/>
                )
            })
        }
        </center>
    </div>
  )
}

export default Upload