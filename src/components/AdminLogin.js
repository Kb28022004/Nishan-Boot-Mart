import {useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";
import GoogleLogin from "react-google-login";


const AdminLogin = (props) => {
  const [Show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/AdminRegister");
  };
  const handleShow = () => {
    setShow(!Show);
  };
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_seld"
    );
  };
  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Credentials.email,
        password: Credentials.password,
      }),
    });
    const json = response.json();
    console.log(json);
    if (json) {
      //save the authtoken and redirect
      localStorage.setItem("token", json.authtoken);

      props.showAlert("you are logged in your account", "success");
      history("/dashboard");
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
          Log in form
        </h1>
      </div>
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "350px",
          width: "40%",
          padding: "20px",
          margin: "0px auto",
          marginTop: "20px",
          borderRadius: "22px",
          border: "1px solid blue",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Admin Login</h3>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="form-group was-validated">
            <input
              onChange={onChange}
              style={{
                width: "80%",
                margin: "7px",
                padding: "10px",
                marginLeft: "60px",
                marginTop: "10px",
                borderRadius: "8px",
              }}
              placeholder="Email"
              type="email"
              name="email"
              value={Credentials.email}
              id="email"
              required
            />
            <div className="invalid-feedback" style={{ textAlign: "center" }}>
              Please enter the valid email
            </div>
          </div>
          <div className="form-group was-validated">
            <input
              onChange={onChange}
              style={{
                width: "80%",
                margin: "7px",
                padding: "10px",
                marginLeft: "60px",
                marginTop: "10px",
                borderRadius: "8px",
              }}
              placeholder="Password"
              type={Show ? "text" : "password"}
              name="password"
              value={Credentials.password}
              id="password"
            />
            <div className="invalid-feedback" style={{ textAlign: "center" }}>
              Please enter the valid password
            </div>
          </div>
          <label
            style={{
              position: "absolute",
              // padding:"30px 0px 0px 0px",
              top: "49%",
              right: "36%",
              fontWeight: "bold",
            }}
            onClick={handleShow}
          >
            {Show ? "Hide" : "Show"}
          </label>
          <br />

          <button
            style={{
              marginLeft: "230px",
              borderRadius: "12px",
              color: "black",
              fontWeight: "bold",
            }}
            className="btn btn-warning"
          >
            Log In{" "}
          </button>
        </form>

        <h5 style={{ marginLeft: "247px", marginTop: "12px" }}>or</h5>
       
<div style={{marginLeft:"155px"}}>

<GoogleLogin

clientId=""
onSuccess={googleAuth}
onFailure={googleAuth}
cookiePolicy="single_host_origin"
/>
</div>
        <h6 style={{ marginTop: "22px", marginLeft: "210px" }}>
          New admin ?{" "}
          <b
            onClick={handleRegister}
            style={{ color: "red", cursor: "pointer" }}
          >
            Sign Up
          </b>
        </h6>
      </Box>
    </>
  );
};

export default AdminLogin;
