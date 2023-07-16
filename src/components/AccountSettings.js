import React, { useState } from "react";

import { Button } from "../styles/Button";
import "./AccountSettings.css";

const AccountSettings = ({ history }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [mobile, setmobile] = useState("");
  const [dob, setdob] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("dob", dob);
    formData.set("gender", gender);

    formData.set("mobile", mobile);
  };

  return (
    <div className="accountsettings">
      <h1 className="mainhead1">Personal Information</h1>
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">
            Your name <span>*</span>
          </label>
          <input
            style={{ autoCorrect: "false", textTransform: "lowercase" }}
            type="text"
            name="name"
            id="name"
            autoCorrect="true"
            value={name}
            onChange={(e) => setname(e.target.value)}
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
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="password">Password <span>*</span></label>
          <input style={{autoCorrect:"false",textTransform:"lowercase"}} type="password" name="password" id="password" autoCorrect='true' />
        </div> */}

        <div className="form-group">
          <label htmlFor="mobile">
            Mobile number <span>*</span>
          </label>
          <input
            style={{ autoCorrect: "false", textTransform: "lowercase" }}
            type="number"
            name="mobile"
            id="mobile"
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
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
            value={gender}
            onChange={(e) => setgender(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateofbirth">
            Date of birth <span>*</span>
          </label>
          <input
            style={{ autoCorrect: "false", textTransform: "lowercase" }}
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => setdob(e.target.value)}
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
