import React, { useEffect, useState } from 'react'
import{ Link } from 'react-router-dom'
import axios from 'axios'
import toast from "react-hot-toast"

function Home() {
    const [allusers, setAlluser] = useState([]);
    const data = ()=>{
        axios.get("http://localhost:8000/api/getallusers")
        .then((res)=>setAlluser(res.data))
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{ 
        data();
    }
    ,[])
const deleteuser = async (userid)=>{
 await axios.delete(`http://localhost:8000/api/deleteduser/${userid}`)
 .then((res)=>{
    setAlluser((prev)=>prev.filter((user)=> user._id !== userid))
    console.log(res)
    toast.success(res.data.me, {position:"top-center"});
 })
 .catch((error)=>console.log(error))

}
  
  return (
    <div className='main-container'>
        
    <div className='container'>
        <Link to="/add" className='linkbtn'>Add User</Link>
    <table border={2} className="usertable" cellPadding={2} cellSpacing={0}>
        <thead>
            <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody> 
            {
            allusers.map((user, index)=>{
                return (
                    <tr key={user._id}>
                    <td>{index +1}</td>
                    <td>{user.fname} {user.lname}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className='actionbtn'><Link to={`/edith/`+ user._id}>Edith</Link></button>
                        <Link to="/" onClick={()=>deleteuser(user._id)}>Delete</Link>
                    </td>
                </tr>
                )
            })

         }
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default Home
