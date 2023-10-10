import {useEffect, useState} from "react"
import { useNavigate} from "react-router-dom";
import { HOST } from "../config";
import Mobilenum from "./Mobilenum";
  


const Contact=()=>{
    const [contactNumber,setContactNumber]=useState([])
    useEffect(()=>{
         fetchNumgerReq()
    },[])

    const fetchNumgerReq=async ()=>{
        try{
             let fetcheNumber=await fetch(HOST+"/members",)
             let fetchedRespose=await fetcheNumber.json()
             console.log(fetchedRespose)
             setContactNumber(fetchedRespose) 
             console.log(setContactNumber)
        }catch(error){
            console.log(error)
        }
         
    }

    
const navigate=useNavigate();
const deleteFunction=async (id)=>{
    try{
    let deleteReq=await fetch(HOST+"/members/"+id+"/", {
        method:'DELETE',
    })
    fetchNumgerReq()
    }catch(error){
        console.log(error)
    }
}

    return<>
    <h1>Contact Number</h1>
    <button onClick={(e)=>{navigate("/Phone")}}>Add member</button>
    <table>
        <tr>
            <th>Mobile Number</th>
            <th>ubdatehere</th>
            <th>Delete here</th>
        </tr>
    
         {
            contactNumber.map((mem,)=>{
                const{mobile_number,id}=mem
                return(
                    <tr>
                    <td>{mobile_number}</td>
                    <td><button onClick={()=>{navigate("/Blogs?id="+id)}}>ubdate</button></td>
                    <td><button onClick={()=>{deleteFunction(id)}}>Delete</button></td>
                    
                </tr>
                )
            })
         }
        
    </table>
    </> 
}
export default Contact;