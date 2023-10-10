import React from "react"
import {useState} from "react"
const Practice = () => {
    const [userData,setUserData]=useState({
        firstName:"Srinivasulu ",
        surname:" chaluva",
        mobileNumber:"6300424795",
        password:" ",
        date:" ",
        gender:" ",
        favGame:[],
        favName:" ",
        Family:"seenu",
        userImage:null,

    })

    const onFileChange=(event)=>{
        if(event.target.files && event.target.files.length >= 1){
            let file = event.target.files[0]
            console.log("File Size ", file.size)
            console.log("File Name", file.name)
            setUserData({...userData, userImage: URL.createObjectURL(file) })
          } 
    }
 const onChangeGender=(event)=>{
    setUserData({...userData,gender:event.target.value})
 }

const onChangeFavGame=(event)=>{
    let index=userData.favGame.indexOf(event.target.value)
            if(event.target.checked){
                userData.favGame.push(event.target.value)
            }else{
                userData.favGame.splice(index,1)
            }
            setUserData({...userData})
}

const onChangeUserInfo=(event,key)=>{
    setUserData({...userData,[key]:event.target.value})
}
    return(
        <div>
        <h1>Facebook</h1>
        <h1>Creaat new Account</h1>
        <p>it's quick and easy</p>
        <input type="text" placeholder="username" value={userData.firstName} 
         onChange={(event)=>onChangeUserInfo(event,"firstName")}> 
            </input> 
        <input type="text" placeholder="surname"
        value={userData.surname} onChange={(event)=>onChangeFavGame(event,"surname")}></input>
        <input type="text" placeholder="phonenumber"value={userData.mobileNumber}
        onChange={(event)=>onChangeFavGame(event,"phonenumber")} ></input>
        <input type="password" placeholder="password" value={userData.password} onChange={(event)=>onChangeUserInfo(event,"password")}></input>
        <p>Date of birth</p>
        <input type="date" value={userData.date} 
        onChange={(event)=>onChangeFavGame(event,"date")}></input>
        <p>Gender</p>
        <input type="radio" name="gender" value="male"  checked={userData.gender==="male"} 
        onChange={onChangeGender}></input> <label>Male</label>

        <input type="radio" name="gender" value="female" checked={userData.gender==="female"} onChange={onChangeGender}></input> <label>Female</label>

        <input type="radio" name="gender" value="other" checked={userData.gender==="other"} onChange={onChangeGender}></input> <label>other</label>
        //<input type="radio" name="gender"  vaue="Other" checked={userData.gender==="Other"} onChange={onChangeGender}></input>  <label className="heading">Other</label>
        <h1>Signup Button</h1>
        <button type="button btn" onClick={()=>{
            console.log("onSubmitt",userData)
        }}>Sign Up</button>

        <p>Checkboxes for FavGames</p>
        <input type="checkBox" value="Cricket" onChange={onChangeFavGame}></input> <label>Cricket</label>

        <input type="checkbox" value="Football" onChange={onChangeFavGame}></input> <label>Football</label>

        <input type="checkbox" value="Kabdi" onChange={onChangeFavGame}>
            </input> <label>Kabadi</label>

        <p>Fav Cars Names</p>
        <select id="cars" name="cars" value={userData.favName} onChange={(event)=>{
    setUserData({...userData,favName:event.target.value})
  }}>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
 <p>Family</p>
  <select value={userData.Family} onChange={(event)=>{
    setUserData({...userData,Family:event.target.value})
  }}>  
    <option value="seenu">seenu</option>
    <option value="venky">venkey</option>
    <option>Theraj</option>
    <option value="krishna">krishna</option>
  </select>
  <img src={userData.userImage} multiple width={200} height={200}/>
  <input type="file" onChange={(event)=>onFileChange(event)}></input>
  </div>

    )
}

export default Practice
