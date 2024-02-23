import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast  from 'react-hot-toast';

function Adduser() {
  const user ={
    fname:"",
    lname:"",
    email:"",
    password:""
  }
  const [users, setusers] = useState(user);
  const navigate = useNavigate();
  
  const handelinput = (e)=>{
    const {name, value} = e.target;
    setusers({ ...users, [name]:value});
   
  }
  const submintuser= async (e)=>{
    e.preventDefault();
      await axios.post("http://localhost:8000/api/create", users)
      .then((response)=>{
      console.log(response);
      toast.success(response.data.message ,{ position:"top-right"})
      navigate("/");
    }).catch(error=>console.log(error))
  }

  return (
    <div className='addcontainer'>
    
      
      <form  className='addfrom' onSubmit={submintuser}>
        <h3 className='heading'>Add New User</h3>
        <div className='from_container'>
        <div className='from_input'>
        <label htmlFor="fname">First Name:</label>
        <input type="text" onChange={handelinput} name='fname' autoComplete='off' placeholder='First Name' id="fname" />
        </div>
       
    <div className='from_input'>
    <label htmlFor="lname">Second Name:</label>
        <input type="text"onChange={handelinput} name='lname' autoComplete='off' placeholder='Last Name' id="lname" />
        </div>
        
        <div className='from_input'>     
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={handelinput}name='email' autoComplete='off' placeholder='Email ' id="email" />
        </div>
   
    <div className='from_input'>
    <label htmlFor="password">Password:</label>
        <input type="password"onChange={handelinput} name='password' autoComplete='off' placeholder='Password' id="password" />
    </div>
        

        <button type='submit' className='add_btn'>Add</button>
        </div>
      </form>
      <Link to="/" className="Backbtm">Back</Link>
    </div>
  )
}

export default Adduser
