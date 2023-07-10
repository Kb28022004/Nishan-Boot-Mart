import React, { useState } from "react";
import { Box } from "@mui/material";
import GoogleLogin from "react-google-login";
import PasswordChecklist from "react-password-checklist";

import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const AdminRegister = (props) => {
  const [Show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleShow = () => {
    setShow(!Show);
  };

  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };

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
    let {
      FullName,
      email,
      password,
      dateOfbirth,
      gender,
      MobileNumber,
      address,
    } = Credentials;
    const response = await fetch(`http://localhost:5000/signup`, {
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
    });
    const json = response.json();
    console.log(json);
    if (json) {
      //save the authtoken and redirect
      localStorage.setItem("token", json.token);
      history("/dashboard");
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
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="form-group was-validated">
            <input
              onChange={onChange}
              style={{
                width: "80%",
                margin: "7px",
                padding: "8px",
                marginLeft: "60px",
                marginTop: "10px",
                borderRadius: "8px",
                textTransform: "lowercase",
              }}
              placeholder="Full Name"
              type="text"
              value={Credentials.name}
              name="FullName"
              id="FullName"
              required
            />
            <div className="invalid-feedback" style={{ textAlign: "center" }}>
              Please enter your name
            </div>
          </div>
          <div className="form-group was-validated">
            <input
              onChange={onChange}
              style={{
                width: "80%",
                margin: "7px",
                padding: "8px",
                marginLeft: "60px",
                marginTop: "10px",
                borderRadius: "8px",
                textTransform: "lowercase",
              }}
              placeholder="Email"
              type="email"
              value={Credentials.email}
              name="email"
              id="email"
              autoComplete="off"
              required
            />
            <div className="invalid-feedback" style={{ textAlign: "center" }}>
              Please enter the email
            </div>
          </div>
          <div className="form-group was-validated">
            <input
              onChange={onChange}
              style={{
                width: "80%",
                margin: "7px",
                padding: "8px",
                marginLeft: "60px",
                marginTop: "10px",
                textTransform: "lowercase",
                borderRadius: "8px",
              }}
              placeholder="Password"
              type={Show ? "text" : "password"}
              autoComplete="off"
              value={Credentials.password}
              name="password"
              id="possword"
              required
            />
            <div className="invalid-feedback" style={{ textAlign: "center" }}>
              Please enter correct password
            </div>
          </div>

          <label
            style={{
              position: "absolute",
              // padding:"30px 0px 0px 0px",
              top: "56%",
              right: "36%",
              fontWeight: "bold",
            }}
            onClick={handleShow}
          >
            {Show ? "Hide" : "Show"}
          </label>

          <input
            onChange={onChange}
            style={{
              width: "80%",
              margin: "7px",
              padding: "8px",
              marginLeft: "60px",
              marginTop: "10px",
              borderRadius: "8px",
              textTransform: "lowercase",
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
              textTransform: "lowercase",
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
              textTransform: "lowercase",
            }}
            placeholder="Mobile number"
            value={Credentials.MobileNumber}
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
              textTransform: "lowercase",
            }}
            placeholder="Address"
            value={Credentials.address}
            type="text"
            name="address"
            id="address"
            required
          />

          <div
            className="container"
            style={{ marginLeft: "60px", marginTop: "20px" }}
          >
            <PasswordChecklist
              rules={[
                "minLength",
                "specialChar",
                "number",
                "capital",
                "lowercase",
              ]}
              minLength={8}
              value={Credentials.password}
            />
          </div>
          <br />

          <button
            style={{
              marginLeft: "200px",
              borderRadius: "12px",
              color: "white",
              fontWeight: "bold",
            }}
            className="btn btn-warning"
          >
            Sign Up
          </button>
        </form>
        <h5 style={{ marginLeft: "220px", marginTop: "12px" }}>or</h5>
        <div style={{marginLeft:"150px"}}>
<GoogleLogin

clientId=""
onSuccess={googleAuth}
onFailure={googleAuth}
cookiePolicy="single_host_origin"
>
  <span>Sign up with google</span>
</GoogleLogin>
</div>

        <h6 style={{ marginTop: "22px", marginLeft: "160px" }}>
          Already have an account ?{" "}
          <b onClick={handleLogin} style={{ color: "red", cursor: "pointer" }}>
            Log in
          </b>
        </h6>
      </Box>
    </>
  );
};

export default AdminRegister;
