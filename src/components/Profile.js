import React from 'react'
import { useParams } from 'react-router-dom'
import UserSidebar from './UserSidebar'
import './Profile.css'

import AccountSettings from './AccountSettings'
import ChangePassword from './ChangePassword'
import MyOrder from './MyOrder'
import Address from './Address'
import { useSelector } from 'react-redux'
import Spinner from '../Helper/Spinner'

const Profile = () => {

  const {user,loading}=useSelector(state=>state.auth)
  const {activepage}=useParams()
  // alert(activepage)
  return (
    <div className='userprofile'>

      <img className='img' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" />
      <p>{user.name}</p>
      <h1 style={{textAlign:"center"}}>My Profile</h1>
      {loading?<Spinner/>: <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage}/>
        </div>
        <div className="right">
{activepage==="accountsettings" && <AccountSettings/>}
{activepage==="changepassword" && <ChangePassword/>}
{activepage==="yourorders" && <MyOrder/>}
{activepage==="address" && <Address/>}



        </div>
      </div>}
     

    </div>
  
  )
    
}

export default Profile