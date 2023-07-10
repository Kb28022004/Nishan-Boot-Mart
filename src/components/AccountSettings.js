import React from 'react'
import { Button } from '../styles/Button'
import './AccountSettings.css'

const AccountSettings = () => {
  return (
    <div className='accountsettings'>
      <h1 className="mainhead1">Personal Information</h1>
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">Your name <span>*</span></label>
          <input style={{autoCorrect:"false",textTransform:"lowercase"}} type="text" name="name" id="name" autoCorrect='true' />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email  <span>*</span></label>
          <input  style={{autoCorrect:"false",textTransform:"lowercase"}} type="email" name="email" id="email" />
        </div>

        {/* <div className="form-group">
          <label htmlFor="password">Password <span>*</span></label>
          <input style={{autoCorrect:"false",textTransform:"lowercase"}} type="password" name="password" id="password" autoCorrect='true' />
        </div> */}

        <div className="form-group">
          <label htmlFor="phone">Mobile number <span>*</span></label>
          <input style={{autoCorrect:"false",textTransform:"lowercase"}} type="number" name="phone" id="phone" />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender <span>*</span></label>
          <input style={{autoCorrect:"false",textTransform:"lowercase"}} type="text" name="gender" id="gender" />
        </div>

        <div className="form-group">
          <label htmlFor="dateofbirth">Date of birth <span>*</span></label>
          <input style={{autoCorrect:"false",textTransform:"lowercase"}} type="date" name="dob" id="dob" />
        </div>

        {/* <div className="form-group">
          <label htmlFor="address">Address <span>*</span></label>
          <input type="text" name="address" id="address" />
        </div> */}


      </div>
       <Button style={{borderRadius:"8px"}}>Save changes</Button>
    </div>
  )
}

export default AccountSettings