import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {toast} from "react-hot-toast"
function Edith() {
  const {id}= useParams();
 const navigate =useNavigate();
  const user ={
    fname:"",
    lname:"",
    email:"",
    password:""
  }
  const [users, setusers]= useState(user)

  useEffect( ()=>{
    axios.get(`http://localhost:8000/api/getonlyuser/${id}`)
    .then((response)=>{
    setusers(response.data);
    })
    .catch(error=>console.log(error))
  }, [id])

function inputChangehandel(e){
     const {name, value}= e.target;
     setusers({...users, [name]:value});
} 
const submitform = async (e)=>{
  e.preventDefault();
 await axios.put(`http://localhost:8000/api/updatauser/${id}`,users)
  .then((res)=>{
    toast.success(res.data.message, {position:"top-right"});
    console.log(res);
    navigate("/");
  })
  .catch((error)=>console.log(error))
}
  return (
    <div className='addcontainer'>
      
    <form  className='addfrom' onSubmit={submitform}>
      <h3 className='heading'>Updata User</h3>
      <div className='from_container'>
      <div className='from_input'>
      <label htmlFor="fname">First Name:</label>
      <input type="text" name='fname' value={users.fname || ""} onChange={inputChangehandel} autoComplete='off' placeholder='First Name' id="fname" />
      </div>
     
  <div className='from_input'>
  <label htmlFor="lname">Second Name:</label>
      <input type="text" name='lname' value={users.lname || ""}  onChange={inputChangehandel}autoComplete='off' placeholder='Last Name' id="lname" />
      </div>
      
      <div className='from_input'>     
      <label htmlFor="email">Email:</label>
      <input type="email" name='email' value={users.email || ""} onChange={inputChangehandel} autoComplete='off' placeholder='Email ' id="email" />
      </div>
 
  <div className='from_input'>
  <label htmlFor="password">Password:</label>
      <input type="password" name='password' value={users.password || ""} onChange={inputChangehandel} autoComplete='off' placeholder='Password' id="password" />
  </div>
      

      <button type='submit' className='add_btn'>Update</button>
      </div>
    </form>
    <Link to="/" className="Backbtm">Back</Link>
  </div>
  )
}

export default Edith
