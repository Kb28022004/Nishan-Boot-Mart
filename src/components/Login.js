import { NavLink, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";

const Login = (props) => {

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };
  const [Credentials, setCredentials] = useState({email:"",passoword:""})
  const history=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    },
      body:JSON.stringify({email:Credentials.email,passoword:Credentials.passoword})
    
    });
    const json= response.json();
    console.log(json);
    if(json){
      //save the authtoken and redirect
      localStorage.setItem("token",json.authtoken)
   props.showAlert("you are logged in your account","success")
      history('/')
      
    }
    else{
     props.showAlert("invalid Credentials","danger")
    }
  }
  const onChange=(e)=>{
    setCredentials({...Credentials,[e.target.name]:e.target.value})
  }

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
          Log in form
        </h1>
      </div>
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "360px",
          width: "40%",
          padding: "20px",
          margin: "0px auto",
          marginTop: "20px",
          borderRadius: "22px",
          border: "1px solid blue",
        
        }}
     
      >
        
        <h3  style={{textAlign:"center"}}>Members Login</h3>
        <input onChange={onChange} style={{width:"80%",margin:"7px",padding:"8px",marginLeft:"60px",marginTop:"10px", borderRadius:"8px"}} placeholder="Email" value={Credentials.email} type="email" name="email" id="email" />
        <input  onChange={onChange}style={{width:"80%",margin:"7px",padding:"8px",marginLeft:"60px",marginTop:"10px", borderRadius:"8px"}} placeholder="Password"  value={Credentials.passoword} type="password" name="passoword" id="possoword" />
        <br />
        <div className="container my-2" >

        <button style={{ marginLeft:"200px",borderRadius:"12px",color:"white",fontWeight:"bold"}} onClick={handleSubmit} className="btn btn-warning">Log In </button>
        <h5 style={{ marginLeft:"220px",marginTop:"12px"}}>or</h5>
        <button  style={{fontWeight:"bold",width:"40%",textAlign:"center", marginLeft:"130px",borderRadius:"12px"}} className="btn btn-success">Sign in with google</button>
        <h6 style={{marginTop:"22px", marginLeft:"180px"}}>New users ? <b onClick={handleRegister} style={{color:"red",cursor:"pointer"}}>Sign Up</b></h6>
        </div>
<p style={{marginLeft:"230px",fontSize:"14px"}}>or</p>
<NavLink to={'/AdminLogin'}>
  <button style={{marginLeft:"190px",borderRadius:"1rem",marginBottom:"25px"}} className="btn btn-primary">Login as an Admin</button>
</NavLink>

      </Box>
    </>
  );
};

export default Login;
