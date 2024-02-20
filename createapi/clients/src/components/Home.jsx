import React from 'react'
import{ Link } from 'react-router-dom'

function Home() {
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
            <tr>
                <td>1</td>
                <td>Usman Javed</td>
                <td>usmanjaved2020@gmail.com</td>
                <td>
                    <button className='actionbtn'>Edith</button>
                    <Link to="/delete" >Delete</Link>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    </div>
  )
}

export default Home
