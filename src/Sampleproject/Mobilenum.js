import { HOST } from "../config"
import {useState,useEffect} from 'react'
import {useLocation} from "react-router-dom"
import queryString from 'query-string';


const Mobilenum=()=>{
    const[number,setNumber]=useState({
        name:"seenu",
        gender:"male",
        gmail:"seenu@12",
        dob:"04-04-1997",
        mobile_number:"",
    })
const onChangeEvent=(event,key)=>{
    setNumber({...number,[key]:event.target.value})
}


let loction=useLocation();
 let params=queryString.parse(loction.search)

useEffect(()=>{
    if(params.id){
        getId()
    }
},[])

 const getId=async ()=>{
    try{
      let fetchId=await fetch(HOST+"/members/"+params.id+"/")
      let res=await fetchId.json()
      console.log(res)
      setNumber({...number,
      name:res.name,
      gender:res.gender,
      gmail:res.gmail,
      dob:res.dob,
      mobile_number:res.mobile_number,
    })
    }catch(error){
        console.log(error)
    }
 }
const saveData=async ()=>{
    let data={
        name:number.name,
        gender:number.gender,
        dob:number.dob,
        gmail:number.gmail,
        mobile_number:number.mobile_number,
    }
    console.log("data" ,data)

    let url=HOST+"/members/"
    if(params.id){
        url=url+params.id+"/"
    }
    try{
    let fetchReq=fetch(url,{
    method:params.id?"PUT":"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
 })
    }catch(error){
       console.log(error) 
    }
}

    return<>
    <h1>PUT & POST</h1>
    <input type="text" placeholder="EnterHere" value={number.mobile_number} onChange={(event)=>{
        onChangeEvent(event,"mobile_number")
    }}></input>
    <button onClick={()=>saveData()}>save</button>
    </>
}
export default Mobilenum;
