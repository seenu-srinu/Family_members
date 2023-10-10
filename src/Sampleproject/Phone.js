import { HOST } from "../config";
import {useEffect, useState } from "react";
import queryString from 'query-string';
import { useLocation } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"



const Phone=()=>{
    const [number,setPhoneNumber]=useState({
        name:"seenu",
        gender:"male",
        dob:"04-04-1997",
        gmail:"seenu@123",
        mobile_number:"",
    })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

   

let location=useLocation();
let params=queryString.parse(location.search)
console.log(params)


useEffect(()=>{
   getReq()
},[])

    const getReq=async ()=>{
        if(params.id){
        try{
             let fetchReq=await fetch(HOST+"/members/"+params.id+"/",)
             let fetchRes=await fetchReq.json()
             console.log(fetchRes)
             setPhoneNumber({...number,
                name:fetchRes.name,
                gender:fetchRes.gender,
                dob:fetchRes.dob,
                mobile_number:fetchRes.mobile_number,
                gmail:fetchRes.gmail
            })
        }catch(error){
           console.log(error)
        }
    }
    }


    const saveData=async (data)=>{
        let body={
             "name":number.name,
            "gender":number.gender,
            "dob":number.dob,
             "gmail":number.gmail,
            "mobile_number":data.mobile_number
         }
        console.log(data)

         let url=HOST+"/members/"
         if(params.id){
             url=url+params.id+"/"
         }
         try{
              let fetchReq=await fetch(url,{
                 method: params.id ? "PUT" : "POST",
                 headers:{
                     "Content-Type":"application/json",
                 },
                 body:JSON.stringify(body)

             })
         }catch(error){

    }

    }

    const onError = (errors,event) =>{
        console.log("Errors ", errors)
    }

    const onChangeEvent=(event,key)=>{
        setPhoneNumber({...number,[key]:event.target.value})
    }
    console.log("Errors", errors)
    return <>
    <form>

    
        <h1>NUMBER</h1>
        <input 
            type="text" 
            placeholder="Enter No" 
            // value={number.mobile_number} 
            // onChange={(event)=>{
            //     onChangeEvent(event,"mobile_number")
            // }}
            {...register("mobile_number", { required :"Please enter mobile number" })}/>
        {errors.mobile_number && <p style={{marginTop:"0px", fontSize:"12px", color:"red"}}>{errors.mobile_number.message}</p>}
        
    <button onClick={handleSubmit(saveData,onError)}>Save</button>
    </form>

    </>
}

export default Phone;  