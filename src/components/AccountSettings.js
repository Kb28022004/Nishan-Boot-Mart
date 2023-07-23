import React, { useState } from "react";
import axios from "axios";
import { Button } from "../styles/Button";
import "./AccountSettings.css";

const AccountSettings = ({user,onUpdateSuccess }) => {
 const [formData, setformData] = useState({
  // Username:user.Username,
  // email:user.email,
  // MobileNumber:user.MobileNumber,
  // gender:user.gender,
  // DateOfBirth:user.DateOfBirth
 })
  const submitHandler = async(e) => {
    e.preventDefault();
try {
  const response =await axios.put('/api/user/profile',formData);
  if(response.status===200){
    onUpdateSuccess(response.data);

  }
} catch (error) {
  console.log('Error updating profile',error);
}
   
  };

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setformData((prevformData)=>({...prevformData,[name]:value}))
  }

  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Personal Information</h1>
      <div method="POST" className="form">
        <div className="form-group">
          <label htmlFor="Username">
            Your name <span>*</span>
          </label>
          <input
            style={{ autoCorrect: "false", textTransform: "lowercase" }}
            type="text"
            name="Username"
            id="Username"
            autoCorrect="true"
            value={formData.Username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            style={{ autoCorrect: "false", textTransform: "lowercase" }}
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="password">Password <span>*</span></label>
          <input style={{autoCorrect:"false",textTransform:"lowercase"}} type="password" name="password" id="password" autoCorrect='true' />
        </div> */}

        <div className="form-group">
          <label htmlFor="MobileNumber">
            Mobile number <span>*</span>
          </label>
          <input
            style={{ autoCorrect: "false", textTransform: "lowercase" }}
            type="number"
            name="MobileNumber"
            id="MobileNumber"
            value={formData.MobileNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">
            Gender <span>*</span>
          </label>
          <input
            style={{ autoCorrect: "false", textTransform: "lowercase" }}
            type="text"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="DateOfBirth">
            Date of birth <span>*</span>
          </label>
          <input
            style={{ autoCorrect: "false", textTransform: "lowercase" }}
            type="date"
            name="DateOfBirth"
            id="DateOfBirth"
            value={formData.DateOfBirth}
            onChange={handleChange}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="address">Address <span>*</span></label>
          <input type="text" name="address" id="address" />
        </div> */}
      </div>
      <Button onClick={submitHandler} style={{ borderRadius: "8px" }}>
        Save changes
      </Button>
    </div>
  );
};
export default AccountSettings;
