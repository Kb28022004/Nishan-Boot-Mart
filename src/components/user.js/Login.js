import React, { Fragment, useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { Button } from "../../styles/Button";
import { Box } from "@mui/material";

const Login = ({ history }) => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const data = await fetch("https://localhost:5000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials:"include"
    });

    const json = await data.json();

    if (json.status === 400 || !json) {
      window.alert("Login failed");
      console.log("Login failed");
    } else {
      window.alert("Login Successfull");
      console.log("Login successfull");
      history("/profile:accountsettings");
    }
  };

  const onchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "580px",
          width: "31%",
          padding: "20px",
          margin: "0px auto",
          marginTop: "20px",
          borderRadius: "22px",
          border: "1px solid black",
          marginBottom: "80px",
          boxShadow: "inherit",
        }}
      >
        <div className="row-wrapper">
          <div>
            <form method="POST" className="needs-validation">
              <h3 style={{ textAlign: "center" }}> Members Login</h3>
              <hr style={{ width: "30%", margin: "0px auto" }} />
              <div>
                <label
                  htmlFor="email"
                  style={{ fontSize: "23px", fontFamily: "initial" }}
                  className="my-2"
                >
                  Email
                </label>
                <div className="form-group was-validated">
                  <input
                    type="email"
                    style={{
                      textTransform: "lowercase",
                      borderRadius: "6px",
                      padding: "12px",
                    }}
                    required
                    autoComplete="off"
                    id="email"
                    name="email"
                    className="form-control"
                    value={user.email}
                    onChange={onchange}
                  />
                  <div
                    className="invalid-feedback"
                    style={{ textAlign: "center" }}
                  >
                    Please enter the valid email
                  </div>
                </div>
              </div>
              <div className="my-2">
                <label
                  htmlFor="password"
                  style={{ fontSize: "23px", fontFamily: "initial" }}
                >
                  Password
                </label>
                <div className="form-group was-validated">
                  <input
                    type="password"
                    style={{
                      textTransform: "lowercase",
                      borderRadius: "6px",
                      padding: "12px",
                    }}
                    required
                    autoComplete="off"
                    id="password"
                    name="password"
                    className="form-control"
                    value={user.password}
                    onChange={onchange}
                  />
                </div>
                <div
                  className="invalid-feedback"
                  style={{ textAlign: "center" }}
                >
                  Please enter the valid password
                </div>
              </div>
              <div style={{ marginTop: "18px" }}>
                <Link
                  to="/forgotpassword"
                  style={{
                    marginLeft: "285px",
                    color: "black",
                    fontSize: "11px",
                  }}
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                onClick={submitHandler}
                style={{
                  marginTop: "15px",
                  borderRadius: "8px",
                  height: "50px",
                  width: "100%",
                  backgroundColor: "yellowgreen",
                }}
              >
                Login
              </Button>
              <div style={{ marginTop: "18px" }}>
                <Link
                  to="/register"
                  style={{
                    marginLeft: "322px",
                    color: "black",
                    fontSize: "11px",
                  }}
                >
                  New User?
                </Link>
              </div>
            </form>
            {/* <h5 style={{textAlign:"center" }}>or</h5>
              <div style={{textAlign:"center"}}>

<GoogleLogin

clientId=""
onSuccess={googleAuth}
onFailure={googleAuth}
cookiePolicy="single_host_origin"
/>
</div> */}
          </div>
        </div>
        <h5 className="my-4" style={{ textAlign: "center" }}>
          or
        </h5>
        <NavLink to="/adminlogin">
          <Button
            style={{
              marginTop: "4px",
              borderRadius: "8px",
              height: "50px",
              width: "100%",
              backgroundColor: "black",
            }}
          >
            Login As An Admin
          </Button>
        </NavLink>
      </Box>
    </Fragment>
  );
};

export default Login;
