import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOST } from "../config";
 const Home=()=>{
    const [familyMembers,setFamilyMembers] = useState([])
    useEffect(()=>{
        console.log("useEffect")
        fetchFamilyMembers()
    },[])

    const deleteFunction= async(id)=>{
        try{

            let deletReq = await fetch(HOST+"/members/" + id + "/", {
                method: 'DELETE',
              })
              fetchFamilyMembers()
             
        }catch(error){
            console.log("Error in deleteFunction",error)
        }
          
    }
    
    const fetchFamilyMembers = async() => {
        try{
            let familyMembersPromis = await fetch(HOST + "/members", {method:"GET"})
            let familyMembersRes = await familyMembersPromis.json()
            console.log("familyMembersRes ",familyMembersRes)
            setFamilyMembers(familyMembersRes)
        }catch(error){
            console.log("Error in fetchFamilyMembers ",error)
        }
    }

    const navigate = useNavigate();

     return<>
        <h1>Family Data</h1>
        <button onClick={(e)=>navigate("/familydetails")} >Add New Member</button>
        <table>
            <tr>
                <th>UserName</th>
                <th>Gender</th>
                <th>MobileNumber</th>
              
                <th>Date Of Birth</th>
                <th>ubdated data</th>
                <th>Close Data</th>
            </tr>
            {
                familyMembers.map((member, )=>{
                    const { name,gender,mobile_number,gmail,dob,id } = member
                    return(
                        <tr>
                            <td>{name}</td>
                            <td>{gender}</td>
                            <td>{mobile_number}</td>
                          
                            <td>{dob}</td>
                            <td><button onClick={()=>{
                        navigate("/Phone?id="+id)}}>ubdateData</button></td>
                            <td><button onClick={()=>{
                                deleteFunction(id)}}>Delete</button></td>
                        </tr>
                    )
                })
            }
        
        
        </table>
    
   </>
        
    }
     

 export default Home;