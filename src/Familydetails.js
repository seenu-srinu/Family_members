import React from "react"
import './Familydetails.css'
import {useState,useEffect} from "react"
import { useNavigate} from "react-router-dom";
import { upload } from "@testing-library/user-event/dist/upload"
import queryString from "query-string"
import {useLocation} from "react-router-dom";
import { HOST } from "./config"


const Familydetails=(props)=>{
    const[userData,setUserData]=useState({
        name:"",
        firstname:null,
        lastname:undefined,
        gender:" ",
        mobile_number:" ",
        alternate_number:" ",
        mail:" ",
        date:"01-01-2013",
        hobbies:[],
        branch:" ",
        userimage:null,
        id:"2",
    })
    
    let location=useLocation();
    let params = queryString.parse(location.search)
    console.log(params)

const getFamilyDetails=async()=>{
    
    if(params.id){
        
            let  getID=await fetch(HOST+"/members/"+params.id+"/", {method: "GET"})
            let member=await getID.json()
            console.log(member)
            console.log("member ",member)
            let text = member.name;
            const myArray = text.split("  ");
            console.log(myArray)
            let word1= myArray[0];
            let word2 = myArray[1];
            setUserData({
                ...userData,
                firstname : word1,
                lastname: word2,
                mobile_number: member.mobile_number,
                alternatenumber:member.alternatenumber,
                dob: member.dob,
                mail: member.gmail,
                gender:member.gender,
                date:member.dob,
                
            })

    }
}
 






useEffect(()=>{

    getFamilyDetails()
 },[])

 const navigate=useNavigate()
    const saveData=async()=>{
        let data={
            "createdAt": "2023-08-10T18:57:46.865Z",
            "name": userData.firstname + " " +userData.lastname,
            "gender": userData.gender,
            "mobile_number": userData.mobile_number,
            "gmail": userData.mail,
            "dob": userData.date,
        }
        console.log("Body ",data)
        let url=HOST+"/members/"
        
        if(params.id){
            url = url + params.id + "/"
        }
         const response = await fetch(url, {
           method: params.id ? "PUT" : "POST", 
           headers: {
               "Content-Type": "application/json",
           },
             body: JSON.stringify(data), 
             });
             let res =  await response.json();
             console.log("response",res)
             navigate("/")
    }
    

    const onChangeGender=(event)=>{
        setUserData({...userData,gender:event.target.value})
    }
    const onChangeUserData=(event,key,)=>{
        setUserData({...userData,[key]:event.target.value})
    }
    const onChangeHobbie=(event)=>{
        let index=userData.hobbies.indexOf(event.target.value)
        if (event.target.checked){
            userData.hobbies.push(event.target.value)
        }else{
            userData.hobbies.splice(index,1)
        }
        setUserData({...userData})
    }

    const uploadFile=(event)=>{
        let file=event.target.files[0]
        setUserData({...userData,userimage:URL.createObjectURL(file)})
    }

    console.log("userData ", userData)
    return (
    <div className="bg-container" style={{paddingLeft:"15px"}}>
        <h1 className="mainheading">Family Details</h1>

        <div className="card-container">
        <p className="para">UserName</p>
        <input type="text" placeholder="fistname" className="firstname" value={userData.firstname} onChange={(event)=>{
            onChangeUserData(event,"firstname")
        }}></input>
        <input type="text" placeholder="lastname" className="lastname" value={userData.lastname}
        onChange={(event)=>{onChangeUserData(event,"lastname")}}></input>

        <p className="para">Gender</p>
        <input type="radio" name="gender"  value="Male" style={{marginRight:"10px"}} checked={userData.gender==="Male"} onChange={onChangeGender}></input> <label className="heading">Male</label>
        <input type="radio" name="gender"  value="Female" style={{marginRight:"10px"}} checked={userData.gender==="Female"} onChange={onChangeGender}></input>  <label  className="heading">Female</label>
        <input type="radio" name="gender"  value="other" style={{marginRight:"10px"}} checked={userData.gender==="other"} onChange={onChangeGender}></input>  <label  className="heading">other</label>        <p className="para">Mobile Number</p>
        <input type="text" placeholder="phonenumber" className="firstname" value={userData.mobile_number} onChange={(event)=>{
            onChangeUserData(event,"mobile_number")
        }}></input> <label></label>
        <input type="text" placeholder="alternatenumber" className="lastname" value={userData.alternatenumber} onChange={(event)=>{
            onChangeUserData(event,"alternatenumber")
        }}></input>

        <p className="para">Gmail</p>
        <input type="text" className="firstname" placeholder="enteryour@mail" value={userData.mail} onChange={(event)=>{
            onChangeUserData(event,"mail")
        }}></input>

        <p>Button Element</p>
<button onClick={()=>{
        saveData()
            console.log("REUSLT",userData)
        }}>Submit</button>

        <button  onClick={()=>navigate("/contact")}style={{margin:"20px"}}>Navigate to Contact</button>
        <button  onClick={()=>navigate("/")}>Navigate to Home</button>


        <p className="para">Data Of Birth</p>
        <input type="date" value={userData.date} onChange={(event)=>{
            setUserData({...userData,date:event.target.value})
        }}></input>

        <p className="para">Hobbies</p>
        <input type="checkbox"  value="playing" onChange={onChangeHobbie} ></input> <label className="heading">playing</label>
        <input type="checkbox" value="reading" onChange={onChangeHobbie}></input> <label className="heading">reading</label>
        <input type="checkbox" value="trvelling" onChange={onChangeHobbie}></input> <label className="heading">travelling</label>
        <input type="checkbox" value="riding" onChange={onChangeHobbie}></input> <label className="heading">riding</label>
        <p className="para">Branch</p>
        <select value={userData.branch} onChange={(event)=>{
            setUserData({...userData,branch:event.target.value})
        }}>
            <option>ECE</option>
            <option>CSE</option>
            <option>EEE</option>
            <option>CIVIL</option>
            <option>MECH</option>
        </select>
        <p className="para">uploadfile</p>
        <img src={userData.userimage} width={250} height={250}/>
        <input type="file" onChange={uploadFile}></input>
        <p className="para">click here</p>
        
        </div>
    
    </div>
    )
}
export default Familydetails