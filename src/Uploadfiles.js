import React from "react"
import {useState} from "react"
 const Uploadfiles=()=>{
    const[userData,setUserData]=useState(
        {userImage:null

    }
    )
    const uploadFile=(event)=>{
        if (event.target.files && event.target.files.length>=1){
            let file=event.target.files[0]
        setUserData({...userData,userImage:URL.createObjectURL(file)})
        }
        
        
    }
    return(

        <div>
            <h1>File page</h1>
            <img src={userData.userImage} multile width={250} height={250}/>
            <input type="file" onChange={(event)=>{uploadFile(event)}}></input>

            <img src={userData.userImage} width={250} height={250}/>
            <input type="file" onChange={(event)=>{uploadFile(event)}}></input>

        </div>
    )
 }
 export default  Uploadfiles;