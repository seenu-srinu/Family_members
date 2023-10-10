import { useForm, SubmitHandler } from "react-hook-form"
import { HOST } from "../config"
import { useEffect, useState } from "react";
const Practicehere =()=>{
const [Practice,setPractice] = useState([])
const {
    register,
    formState:{errors},
    handleSubmit,
    setValue,
    getValues
  } = useForm()

useEffect(()=>{
    console.log("useEffect")
  fetchData()
},[])

const deleteFunction=async(id)=>{
    try{
    let deleteReq=await fetch(HOST+"/members/"+id+"/",{
    method:"DELETE"
})
 fetchData()

    }catch(error){
        console.log(error)
    }
}



const fetchData = async() => {
    try{
        let familyMembersPromis = await fetch(HOST + "/members", {method:"GET"})
        let familyMembersRes = await familyMembersPromis.json()
        console.log("familyMembersRes ",familyMembersRes)
        setPractice(familyMembersRes)
    }catch(error){
        console.log("Error in fetchFamilyMembers ",error)
    }
}


return<div>
<form>
<h1>Practice Register</h1>
<input typt="text" placeholder="username" {...register("name",{required:"please Enter Your Name"})}></input>
{errors.name && <p style={{marginTop:"0px", fontSize:"12px", color:"red"}}>{errors.name.message}</p>}
  <p>Gender</p>
<input type="radio" name="gender" {...register("gender",{required:"Enter your Gender"})}></input> <placeholder>Male</placeholder>
<input type="radio" name="gender" {...register("gender",{required:"Enter your Gender"})}></input> <placeholder>Female</placeholder>
<input type="radio" name="gender" {...register("gender",{required:"Enter your Gender"})}></input> <placeholder>Other</placeholder>
<p style={{marginTop:"0px" ,fontSize:"12px", color:"red"}}>{errors?.gender?.message}</p>

<p>dob</p>
<input type="date" {...register("dob",{required:"enter dob"})}></input>
<p styl={{marginTop:"0px", fontSize:"12x",color:"red"}}>{errors?.dob?.message}</p>

<p>Gamail</p>
<input type="gmail" placeholder="gmail" {...register("gmail",{required:"enter gmail"})}></input>
<p styl={{marginTop:"0px", fontSize:"12x",color:"red"}}>{errors?.gmail?.message}</p>

<p>number</p>
<input type="input" placeholder="phone" {...register("mobile_num",{required:"Enter your num"})}></input>
<p style={{marginTop:"0px", fontSize:"12x",color:"red"}}>{errors?.dob?.message}</p>


<h1>Button</h1>
<button>Save Here</button>
</form>
<table>
    <tr>
    <th>name</th>
    <th>gender</th>
    <th>gmail</th>
    <th>dob</th>
    <th>mobile_number</th>
    <th>ubdate here</th>
    <th>Delete Here</th>
    </tr>
    {
        Practice.map((member,)=>{
            const{name,gender,gmail,dob,mobile_num,id}=member
            return(
                <tr>
                <td>{name}</td>
                <td>{gender}</td>
                <td>{mobile_num}</td>
                <td>{dob}</td>
                <td>{gmail}</td>
                <td><button >ubdate buttton</button></td>
                <td><button>Delete button</button></td>
                </tr>
            )
        })
    }
</table>
</div>
}
export default Practicehere;

