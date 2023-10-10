import {useEffect,useState} from "react"
import { HOST } from "../config"
import {useLocation} from 'react-router-dom'
import queryString from "query-string"
import { useForm, SubmitHandler } from "react-hook-form"

const Blogs=()=>{
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        getValues
      } = useForm()

let location=useLocation();
let params=queryString.parse(location.search);

useEffect(()=>{
     if(params.id){
        getId()
     }
},[])
      const getId=async ()=>{
        let fetchID=await fetch(HOST+"/members/"+params.id+"/")
        let res=await fetchID.json()
        console.log(res)
        setValue("name",res.name)
        setValue("mobile_number",res.mobile_number)
        setValue("gender",res.gender)
        setValue("gmail",res.gmail)
        setValue("dob",res.dob)
        
      }
const saveData=async (data)=>{
    let body={
        name:data.name,
        mobile_number:data.mobile_number,
        gender:data.gender,
        gmail:data.gmail,
        dob:"1990-08-06"
    }
    console.log(body)
    let url=HOST+"/members/"
  if(params.id){
    url=url+params.id+"/"
  }
    let fetchReq=await fetch(url,{
        method:params.id?"PUT":"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body)

    })
}

    return<>
    <form>
    <h1>Using Register </h1>
    <input type="text" placeholder="Entername" {...register("name",{required:"Enter Your Name"})}></input>
    <p style={{marginTop:"0px",fontSize:"12px",color:"red"}}>{errors?.name?.message}</p>

    <p>number</p>
    <input type="text" placeholder="Enternumber"  {...register("mobile_number",{required:"Enter Your Number"})}></input>
    <p>{errors?.number?.message}</p>
    <p>Gender</p>
    <input type="radio" name="gender" {...register("gender",{required:"Select Your Gender"})}></input> <label>Male</label>
    <input type="radio"   name="gender" {...register ("gender",{required:"Select Your Gender"})}></input> <label>Female</label>
    <input type="radio" name="gender" {...register ("gender",{required:"Select Your Gender"})}></input> <label>Other</label>
    <p>{errors?.gender?.message}</p>

    <p>Mail Adress</p>
    <input type="text" placeholder="Enter Mail" {...register ("gmail",{required:"Eneter Your Mail"})}></input>
    <p>{errors?.Gmail?.message}</p>
    <button onClick={handleSubmit(saveData)}>Submit</button>
    </form>
    </>
    
}
export default Blogs;
