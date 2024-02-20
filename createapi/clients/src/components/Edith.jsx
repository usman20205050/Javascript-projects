import React from 'react'
import { Link } from 'react-router-dom'
function Edith() {
  return (
    <div className='addcontainer'>
      
    <form  className='addfrom'>
      <h3 className='heading'>Add New User</h3>
      <div className='from_container'>
      <div className='from_input'>
      <label htmlFor="fname">First Name:</label>
      <input type="text" name='fname' autoComplete='off' placeholder='First Name' id="fname" />
      </div>
     
  <div className='from_input'>
  <label htmlFor="lname">Second Name:</label>
      <input type="text" name='lname' autoComplete='off' placeholder='Last Name' id="lname" />
      </div>
      
      <div className='from_input'>     
      <label htmlFor="email">Email:</label>
      <input type="email" name='email' autoComplete='off' placeholder='Email ' id="email" />
      </div>
 
  <div className='from_input'>
  <label htmlFor="password">Password:</label>
      <input type="password" name='password' autoComplete='off' placeholder='Password' id="password" />
  </div>
      

      <button type='submit' className='add_btn'>Add</button>
      </div>
    </form>
    <Link to="/" className="Backbtm">Back</Link>
  </div>
  )
}

export default Edith
