import { useState } from 'react';
import './App.css';
import sampleImage from "../src/static/img/download.jpg"
function App() {
  const [firstName,setFirstName] = useState("")
  const [userData, setUserData] = useState({
    firstName : "srinivalusu",
    middleName : "chluva",
    mobileNumber : "8688949492",
    password:" ",
    date:" ",
    favName:"",
    gender:"",
    favSports : [],
    userImage: null,
  })

  const onFavSportSelection = (event) => {
    
    let index= userData.favSports.indexOf(event.target.value)
      
    if (event.target.checked){
      userData.favSports.push(event.target.value)
    }else{
      userData.favSports.splice(index,1)
    }
    setUserData({...userData})
  }

  const onGenderChange = (event)=>{
    setUserData({...userData,gender:event.target.value})
  }

  const userInfoChange = (event,keyName) => {
    setUserData({...userData,[keyName]:event.target.value})
  }

  const onFileChange = ( event ) =>{
    // console.log("On File change ",event.target.files[0])
    if(event.target.files && event.target.files.length >= 1){
      let file = event.target.files[0]
      console.log("File Size ", file.size)
      console.log("File Name", file.name)
      setUserData({...userData, userImage: URL.createObjectURL(file) })
    } 
    
  }
  
  
  
  return (
<div>
  <h1>Sign Up</h1>
  <p>It's quick and easy</p>
  <input type="text" placeholder="First Name" style={{marginRight:"10px"}} value={userData.firstName} 
    // onChange = {(event)=>{ setUserData({...userData, "firstName" : event.target.value})}}
    onChange={(event)=>userInfoChange(event,"firstName")}
    />
  <input type="text" placeholder="Surname" style={{marginRight:"10px"}} value={userData.middleName}
    onChange={(event)=>userInfoChange(event,"middleName")}
  />
  <input type="number" placeholder="Mobile Number or emailId" style={{marginRight:"10px"}} 
    value={userData.mobileNumber} 
    onChange={(event)=>userInfoChange(event,"mobileNumber")}
  />
  <input 
    type="password" 
    placeholder="New Passwprd" 
    value={userData.password}
    onChange={(event)=>userInfoChange(event,"password")}
  /> 
  <p>Date of birth</p>
  <input type="date"style={{marginRight:"10px"}} value={userData.date} 
    onChange={(event)=>userInfoChange(event,"date")}
  ></input>
  <p>Gender</p>
   <input type="radio" value="male" onChange={onGenderChange}
   name="gender" checked={userData.gender === "male"}></input><label for="htmlFor">Male</label>
  <input type="radio" value="female"
  onChange={onGenderChange}
  name="gender" checked={userData.gender === "female"}></input><label for="htmlFor">Female</label>
  <input type="radio" value="other" onChange={onGenderChange}
  name="gender" checked={userData.gender === "other"}></input><label for="htmlFor">Other</label>

  <select id="cars" name="cars" value={userData.favName} onChange={(event)=>{
    setUserData({...userData,favName:event.target.value})
  }}>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
  <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
  <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
  <button type="button" style={{textAlign:"center"}} onClick={()=>{
    console.log("On Submit" , userData)
  }}>Sign UP</button>
<h1>Check Boxes For FavGames</h1>
<input type="checkbox" value="cricket" onChange={onFavSportSelection} ></input><label>Cricket</label>

<input type="checkbox" value="kabaddi" onChange={onFavSportSelection} ></input><label>Kabadi</label>

<input type="checkbox" value="Hockey" onChange={onFavSportSelection}></input><label>Hockey</label>

<input type="checkbox" value="Football" onChange={onFavSportSelection}></input><label>FootBal</label>

<img src={userData.userImage} multiple width={200} height={200}/>

<input type="file"  onChange={(event)=>onFileChange(event)} />
</div>
  );
}

export default App;