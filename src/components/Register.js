import React,{useState} from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";


import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const Register = (props) => {
  // document.body.style.backgroundColor = "pink";
  const navigate=useNavigate()
  const handleLogin=()=>{
navigate('/login')

}
const [Credentials, setCredentials] = useState({name:"", email: "", password: "" ,dob:"",gender:"",mobilenumber:"",address:""});
const history = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  let {name,email,password,dob,gender,mobilenumber,address}=Credentials;
  const response = await fetch(`http://localhost:3000/api/v1/auth/createuser`, {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      name,password,email,dob,gender,mobilenumber,address
    }),
  });
  const json = response.json();
  // console.log(json);
  if (json) {
    //save the authtoken and redirect
    localStorage.setItem("token", json.authtoken);
    history("/");
    props.showAlert("Account is created successfully","success")
  } else {
    props.showAlert("invalid Credentials","danger")
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
            color:"blue"
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
          marginBottom:"80px"
        }}
      >
       
        <h3 style={{textAlign:"center"}}>Create Account</h3>
        <input onChange={onChange} style={{width:"80%",margin:"7px",padding:"8px",marginLeft:"60px",marginTop:"10px", borderRadius:"8px"}} placeholder="Name" type="text" name="name" id="name" />
        <input onChange={onChange} style={{width:"80%",margin:"7px",padding:"8px",marginLeft:"60px",marginTop:"10px", borderRadius:"8px"}} placeholder="Email" type="email" name="email" id="email" />
        <input onChange={onChange} style={{width:"80%",margin:"7px",padding:"8px",marginLeft:"60px",marginTop:"10px", borderRadius:"8px"}} placeholder="Password" type="password" name="password" id="possword" />
        <input onChange={onChange} style={{width:"80%",margin:"7px",padding:"8px",marginLeft:"60px",marginTop:"10px", borderRadius:"8px"}} placeholder="Date of Birth" type="date" name="dob" id="dob" />
        <input onChange={onChange} style={{width:"80%",margin:"7px",padding:"8px",marginLeft:"60px",marginTop:"10px", borderRadius:"8px"}} placeholder="Gender" type="text" name="gender" id="gender" />

        <input onChange={onChange} style={{width:"80%",margin:"7px",padding:"8px",marginLeft:"60px",marginTop:"10px", borderRadius:"8px"}} placeholder="Mobile number" type="text" name="mobilenumber" id="mobilenumber" />

        <input onChange={onChange} style={{width:"80%",margin:"7px",padding:"8px",marginLeft:"60px",marginTop:"10px", borderRadius:"8px"}} placeholder="Address" type="text" name="address" id="address" />


        <br />
        <div className="container my-2" >

        <button style={{ marginLeft:"200px",borderRadius:"12px",color:"white",fontWeight:"bold"}} onClick={handleSubmit} className="btn btn-warning">Sign Up</button>
        <h5 style={{ marginLeft:"220px",marginTop:"12px"}}>or</h5>
        <button  style={{fontWeight:"bold",width:"40%",textAlign:"center", marginLeft:"130px",borderRadius:"12px"}} className="btn btn-success">Sign up with google</button>
        <h6 style={{marginTop:"22px", marginLeft:"160px"}}>Already have an account ? <b onClick={handleLogin} style={{color:"red",cursor:"pointer"}}>Log in</b></h6>
        </div>

        <p style={{marginLeft:"230px",fontSize:"14px"}}>or</p>
  <NavLink to={'/AdminRegister'}>
    <button style={{marginLeft:"180px",borderRadius:"1rem"}} className="btn btn-primary">Register as an Admin</button>
  </NavLink>
  
      </Box>
      
    </>
  );
};

export default Register;
