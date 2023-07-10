import React from 'react'
import { Button } from '../styles/Button'

const ChangePassword = () => {
  return (
     <div className='accountsettings' >
    <h1 className="mainhead1" style={{color:"green"}}>Change Password</h1>
    <div className="form">
      <div className="form-group">
        <label htmlFor="oldpassword">Old Password <span>*</span></label>
        <input style={{autoCorrect:"false",textTransform:"lowercase"}} type="password" name="oldpass" id="oldpass" autoCorrect='true' />
      </div>

      <div className="form-group">
        <label htmlFor="newpassword">New Password  <span>*</span></label>
        <input  style={{autoCorrect:"false",textTransform:"lowercase"}} type="password" name="newpass" id="newpass" />
      </div>
      
      <div className="form-group">
        <label htmlFor="confirmpassword"> Confirm new password  <span>*</span></label>
        <input  style={{autoCorrect:"false",textTransform:"lowercase"}} type="password" name="confpass" id="confpass" />
      </div>
</div>
<Button style={{borderRadius:"6px"}}> Save changes</Button>
</div>
  )
}

export default ChangePassword