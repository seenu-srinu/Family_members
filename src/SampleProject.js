import { useForm, SubmitHandler } from "react-hook-form"
import { HOST } from "./config"
import queryString from "query-string";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SampleProject=()=>{

    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        getValues
      } = useForm()
    
    let location=useLocation();
    let params=queryString.parse(location.search)

    useEffect(()=>{
        if(params.id){
            getId()
        }
    },[])

    




    const getId=async ()=>{
        let fetchId=await fetch(HOST+"/members/"+params.id+"/")
        let res= await  fetchId.json()
        console.log("Response ",res)
        setValue("name",res.name)
        setValue("gender",res.gender)
        setValue("gmail",res.gmail)
        setValue("password",res.password)
        setValue("branch",res.branch)
        setValue("dob",res.dob)
    }


      const saveData=async (data)=>{
        let body={
            name:data.name,
            gender:data.gender,
            mobile_number:data.mobile_number,
            gmail:data.gmail,
            dob:"1999-04-04",
        }
        console.log("Body ",body)

        try{
            let url=HOST+"/members/"
            if(params.id){
                url=url+params.id+"/"
            }
              let fetchReq=await fetch(url,{
                method:params.id?"PUT":"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(body)
              })
        }catch(error){

        }
      }
    //   console.log("Values ", getValues("name"))
    return<>
    <form >
       <h1>Sample Project</h1>
       <h1>Name</h1>
       <input typt="text" placeholder="username" {...register("name",{required:"please Enter Your Name"})}></input>
       {errors.name && <p style={{marginTop:"0px", fontSize:"12px", color:"red"}}>{errors.name.message}</p>}

       <p>Gender</p>
       <input type="radio" name="gender" value="male" {...register("gender",{required:"Select Your Gender"})}></input> <label>Male</label>
       <input type="radio" name="gender" value="Female" {...register("gender",{required:"Select Your Gender"})}></input> <label>Female</label>
       <input type="radio" name="gender" value="Other" {...register("gender",{required:"Select Your Gender"})}></input>  <label>Other</label>
       {errors.name &&<p style={{marginTop:"0px",fontSize:"12px",color:"red"}}>{errors.gender.message}</p>}

       <p>Gmail</p>
       <input type="text" placeholder="EnterGmail" {...register("gmail",{required:"Entrer your mail"})}></input>
       <p style={{marginTop:"opx",fontSize:"12px",color:"red"}}>{errors?.gmail?.message}</p>


       <p>password</p>
       <input type="text" {...register("mobile_number",{required:"Enter password"})}></input>
       <p style={{marginTop:"0px",fontSize:"12px",color:"red"}}>{errors?.mobile_number?.message}</p>

       <p>Select Your Branch</p>
       <input type="checkbox" {...register("branch",{required:""})}></input> <label>ECE</label>
       <input type="checkbox" {...register("branch",{required:""})}></input> <label>CSE</label>
       <input type="checkbox" {...register("branch",{required:""})}></input> <label>MECH</label>
       <input type="checkbox" {...register("brnch",{required:""})}></input> <label>EEE</label>
       <p style={{marginTop:"0px",fontSize:"12px",color:"red"}}>{errors?.branch?.message}</p>
       <p>Hobbies</p>
       <select {...register("hobbies",{required:"Your Hobbie"})}>
        <option>Travelling</option>
        <option>Reading</option>
        <option>Playing</option>
        <option>Sleeping</option>
        
        
       </select>
       <p>{errors?.hobbies?.message}</p>
       <button onClick={handleSubmit(saveData,)}>SaveHere</button>
       </form>
      <table>
        <tr>
            <th>
                name
            </th>
            <th>Gender</th>
            <th>Gmail</th>
            <th>Passowrd</th>
            <th>Branch</th>
            

        </tr>
      </table>
    </>
}

export default SampleProject;