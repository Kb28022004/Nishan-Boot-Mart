import React from 'react'
import { useParams } from 'react-router-dom'
import UserSidebar from './UserSidebar'
import './Profile.css'

import AccountSettings from './AccountSettings'
import ChangePassword from './ChangePassword'
import MyOrder from './MyOrder'
import Address from './Address'

const Profile = () => {
  const {activepage}=useParams()
  // alert(activepage)
  return (

    <div className='userprofile'>

      <img className='img' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" />
      <h1 style={{textAlign:"center"}}>My Profile</h1>
      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage}/>
        </div>
        <div className="right">
{activepage==="accountsettings" && <AccountSettings/>}
{activepage==="changepassword" && <ChangePassword/>}
{activepage==="yourorders" && <MyOrder/>}
{activepage==="address" && <Address/>}



        </div>
      </div>

    </div>
  
  )
    
}

export default Profile