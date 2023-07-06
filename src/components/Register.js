import React, { useState } from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

import PasswordChecklist from "react-password-checklist";

import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const Register = (props) => {
const [Show, setShow] = useState(false)

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleShow=()=>{
    setShow(!Show)
  }
  const [Credentials, setCredentials] = useState({
    FullName: "",
    email: "",
    password: "",
    dateOfbirth: "",
    gender: "",
    MobileNumber: "",
    address: "",
  });
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let { FullName, email, password, dateOfbirth, gender, MobileNumber, address } =
      Credentials;
    const response = await fetch(
      `http://localhost:5000/signup`,
      {
        method: "POST",
      
        body: JSON.stringify({
          FullName,
          password,
          email,
          dateOfbirth,
          gender,
          MobileNumber,
          address,
        }),
      }
    );
    const json = response.json();
    console.log(json);
    if (json) {
      //save the authtoken and redirect
      localStorage.setItem("token", json.token);
      history("/");
      props.showAlert("Account is created successfully", "success");
    } else {
      props.showAlert("invalid Credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-4">
        <h1
          style={{
            textAlign: "center",
            fontSize: "35px",
            fontWeight: "bold",
            fontFamily: "revert",
            color: "blue",
          }}
        >
          Sign up form
        </h1>
      </div>
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "60x0px",
          width: "40%",
          padding: "20px",
          margin: "0px auto",
          marginTop: "20px",
          borderRadius: "22px",
          border: "1px solid blue",
          marginBottom: "80px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Create Account</h3>
        <input
          onChange={onChange}
          style={{
            width: "80%",
            margin: "7px",
            padding: "8px",
            marginLeft: "60px",
            marginTop: "10px",
            borderRadius: "8px",
            textTransform:"lowercase"
          }}
          placeholder="Full Name"
          type="text"
          value={Credentials.name}
          name="FullName"
          id="FullName"
          required
        />
        <input
          onChange={onChange}
          style={{
            width: "80%",
            margin: "7px",
            padding: "8px",
            marginLeft: "60px",
            marginTop: "10px",
            borderRadius: "8px",
            textTransform:"lowercase"
          }}
          placeholder="Email"
          type="email"
          value={Credentials.email}
          name="email"
          id="email"
          required
        />
  

        <input
          onChange={onChange}
          style={{
            width: "80%",
            margin: "7px",
            padding: "8px",
            marginLeft: "60px",
            marginTop: "10px",
            textTransform:"lowercase",
            borderRadius: "8px",
          }}
          placeholder="Password"
          type={Show?"text":"password"}
          
          value={Credentials.password}
          name="password"
          id="possword"
          required
        />
        <label style={{
          position:"absolute",
          // padding:"30px 0px 0px 0px",
          top:"54%",
          right:"36%",
          fontWeight:"bold",
        
      }} 
      onClick={handleShow}>{Show?"Hide":"Show"}</label>
    
        <input
          onChange={onChange}
          style={{
            width: "80%",
            margin: "7px",
            padding: "8px",
            marginLeft: "60px",
            marginTop: "10px",
            borderRadius: "8px",
            textTransform:"lowercase"
          }}
          placeholder="Date of Birth"
          type="date"
          value={Credentials.dob}
          name="dateOfbirth"
          id="dateOfbirth"
          required
        />
        <input
          onChange={onChange}
          style={{
            width: "80%",
            margin: "7px",
            padding: "8px",
            marginLeft: "60px",
            marginTop: "10px",
            borderRadius: "8px",
            textTransform:"lowercase"
          }}
          placeholder="Gender"
          type="text"
          value={Credentials.gender}
          name="gender"
          id="gender"
          required
        />

        <input
          onChange={onChange}
          style={{
            width: "80%",
            margin: "7px",
            padding: "8px",
            marginLeft: "60px",
            marginTop: "10px",
            borderRadius: "8px",
            textTransform:"lowercase"
          }}
          placeholder="Mobile number"
          value={Credentials.mobilenumber}
          type="number"
          name="MobileNumber"
          id="MobileNumber"
          required
        />

        <input
          onChange={onChange}
          style={{
            width: "80%",
            margin: "7px",
            padding: "8px",
            marginLeft: "60px",
            marginTop: "10px",
            borderRadius: "8px",
            textTransform:"lowercase"
          }}
          placeholder="Address"
          value={Credentials.address}
          type="text"
          name="address"
          id="address"
          required
        />

<div className="container" style={{marginLeft:"60px",marginTop:"20px"}}>

<PasswordChecklist 
rules={["minLength","specialChar","number","capital","lowercase"]}
minLength={8}
value={Credentials.password}
/>
</div>
        <br />
        <div className="container my-2">
          <button
            style={{
              marginLeft: "200px",
              borderRadius: "12px",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={handleSubmit}
            className="btn btn-warning"
          >
            Sign Up
          </button>
          <h5 style={{ marginLeft: "220px", marginTop: "12px" }}>or</h5>
          <div className="container grid grid-two-column">
  <div className="container">
<div className="container">
    <img style={{height:"22px",width:"2%",  position:"absolute",left:"41%",top:"114%"}} src="./images/google3.jpg" alt="" />
  </div>

          <button
            style={{
            
              width: "115%",
              height:"41px",
              fontSize:"15px",
             backgroundColor:"white",
             color:"black",
              marginLeft: "110px",
              borderRadius: "12px",
            }}
            className="btn btn-success"
          >
            Sign Up with google
          </button>
</div>
</div>

          <h6 style={{ marginTop: "22px", marginLeft: "160px" }}>
            Already have an account ?{" "}
            <b
              onClick={handleLogin}
              style={{ color: "red", cursor: "pointer" }}
            >
              Log in
            </b>
          </h6>
        </div>

        <p style={{ marginLeft: "230px", fontSize: "14px" }}>or</p>
        <NavLink to={"/AdminRegister"}>
          <button
            style={{ marginLeft: "180px", borderRadius: "1rem" }}
            className="btn btn-primary"
          >
            Register as an Admin
          </button>
        </NavLink>
      </Box>
    </>
  );
};

export default Register;
