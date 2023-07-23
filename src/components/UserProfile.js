import React from 'react'
import { Button } from '../styles/Button'
import { Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

const UserProfile = ({data}) => {
    return (
        <div className='userprofile'>
    
          <img className='img' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" />
        
          <h1 style={{textAlign:"center"}}>My Profile</h1>
    
    <Box
     sx={{
      backgroundColor: "white",
      color: "black",
      height: "45a0px",
      width: "60%",
      padding: "20px",
      margin: "0px auto",
      marginTop: "20px",
      borderRadius: "22px",
      border: "1px solid green",
      marginBottom: "80px",
      boxShadow: "inherit",
    }}>
      <div className="container grid grid-three-column">
        <div className='container my-4' style={{color:"black",fontWeight:"bold",fontSize:"13px"}}>
          <h3>Name </h3>
          <br />
          <br />
          <h3>Date of birth</h3>
          <br />
          <br />
          <h3>Gender</h3>
          <br />
          <br />
          <h3>Email</h3>
          <br />
          <br />
          <h3>Mobile Number</h3>
          <br />
          <br />
          <h3>Address</h3>
          
        </div>
        <div className='vl'>
      
        </div>
        <div className='container my-4' style={{color:"blue",fontWeight:"bold",fontSize:"13px"}}>
          <h3>{data.Username} </h3>
          <br />
          <br />
          <h3>{data.DateOfBirth}</h3>
          <br />
          <br />
          <h3>{data.gender}</h3>
          <br />
          <br />
          <h3>{data.email}</h3>
          <br />
          <br />
          <h3>{data.MobileNumber}</h3>
          <br />
          <br />
          <h3>{data.Address}</h3>
          
        </div>
      </div>
    
    </Box>
          <NavLink to="/editprofile">
    
          <Button  className='my-4' style={{width:"15%",marginLeft:"530px"}}>Edit Profile</Button>
          </NavLink>
    
         
         
    
        </div>
      
      )
}

export default UserProfile