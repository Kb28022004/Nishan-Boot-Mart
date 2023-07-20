import React from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

// import Spinner from '../Helper/Spinner'
import { Button } from '../styles/Button'

const Profile = () => {
  const {user,loading}=useSelector(state=>state.auth)



  return (
    <div className='userprofile'>

      <img className='img' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" />
      <p>{user.name}</p>
      <h1 style={{textAlign:"center"}}>My Profile</h1>

      
      <table>
      <thead>
        <tr style={{backgroundColor:"cyan",fontSize:"15px",fontWeight:"bold"}}>
            <td>Name</td>
            <td>Email</td>
            <td>Gemder</td>
            <td>Address</td>
            <td>Moble Number</td>
        </tr>
    </thead>
      </table>
      <NavLink to="/editprofile">

      <Button  className='my-4' style={{width:"15%",marginLeft:"530px"}}>Edit Profile</Button>
      </NavLink>

     
     

    </div>
  
  )
    
}

export default Profile