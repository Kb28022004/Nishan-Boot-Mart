import React from 'react'
import AccountSettings from './AccountSettings'
import ChangePassword from './ChangePassword'
import MyOrder from './MyOrder'
import Address from './Address'
import UserSidebar from './UserSidebar'
import { useParams } from 'react-router-dom'



const EditProfile = () => {
    const {activepage}=useParams()
    // alert(activepage)
  return (
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
  )
}

export default EditProfile