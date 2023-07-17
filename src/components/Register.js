import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setuser] = useState({
    Username: "",
    email: "",
    gender: "",
    MobileNumber: "",
    Address: "",
    password: "",
    DateOfBirth: "",
  });
  const history=useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const {
      Username,
      email,
      password,
      gender,
      DateOfBirth,
      Address,
      MobileNumber,
    } = user;
    const data = await fetch("http://localhost:5000/api/user/register", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username,
        email,
        password,
        gender,
        MobileNumber,
        Address,
        DateOfBirth,
      }),
    });

    const json = await data.json();

    if(json.status===422 || !json){ 
      window.alert('Invalid Registration')
     console.log('Invalid registration');
    }
    else{
      window.alert(' Registration Successfull')
      console.log(' Registration successfull');
      history('/login')
      setuser("")
    }

  //   if (json) {
  //     localStorage.setItem("token", json.authtoken);
  //     history("/login");
  //     setuser("");
  //   } else {
  //     alert("invalid credentials");
  //   }
  };
  const onchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <Fragment>
        <Box
          sx={{
            backgroundColor: "white",
            color: "black",
            height: "1000px",
            width: "30%",
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
              <form method="POST" className="needs-validation" >
                <h3 style={{ textAlign: "center" }}> Register</h3>
                <hr style={{ width: "30%", margin: "0px auto" }} />

                <div>
                  <label
                    htmlFor="Username"
                    style={{ fontSize: "23px", fontFamily: "initial" }}
                    className="my-2"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    style={{
                      textTransform: "lowercase",
                      borderRadius: "6px",
                      padding: "12px",
                    }}
                    required
                    autoComplete="off"
                    id="Username"
                    name="Username"
                    className="form-control"
                    value={user.Username}
                    onChange={onchange}
                  />
                </div>
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

                <div>
                  <label
                    htmlFor="gender"
                    style={{ fontSize: "23px", fontFamily: "initial" }}
                    className="my-2"
                  >
                    Gender
                  </label>

                  <input
                    type="text"
                    style={{
                      textTransform: "lowercase",
                      borderRadius: "6px",
                      padding: "12px",
                    }}
                    // required
                    autoComplete="off"
                    id="gender"
                    name="gender"
                    className="form-control"
                    value={user.gender}
                    onChange={onchange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="DateOfBirth"
                    style={{ fontSize: "23px", fontFamily: "initial" }}
                    className="my-2"
                  >
                    Date of birth
                  </label>

                  <input
                    type="date"
                    style={{
                      textTransform: "lowercase",
                      borderRadius: "6px",
                      padding: "12px",
                    }}
                    // required
                    autoComplete="off"
                    id="DateOfBirth"
                    name="DateOfBirth"
                    className="form-control"
                    value={user.DateOfBirth}
                    onChange={onchange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="MobileNumber"
                    style={{ fontSize: "23px", fontFamily: "initial" }}
                    className="my-2"
                  >
                    Mobile Number
                  </label>

                  <input
                    type="MobileNumber"
                    style={{
                      textTransform: "lowercase",
                      borderRadius: "6px",
                      padding: "12px",
                    }}
                    // required
                    autoComplete="off"
                    id="MobileNumber"
                    name="MobileNumber"
                    className="form-control"
                    value={user.MobileNumber}
                    onChange={onchange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="
                    Address"
                    style={{ fontSize: "23px", fontFamily: "initial" }}
                    className="my-2"
                  >
                    Address
                  </label>

                  <input
                    type="text"
                    style={{
                      textTransform: "lowercase",
                      borderRadius: "6px",
                      padding: "12px",
                    }}
                    // required
                    autoComplete="off"
                    id="Address"
                    name="Address"
                    className="form-control"
                    value={user.Address}
                    onChange={onchange}
                  />
                </div>
       <Button
                  style={{
                    marginTop: "15px",
                    borderRadius: "8px",
                    height: "50px",
                    width: "100%",
                    backgroundColor: "yellowgreen",
                  }}
                  onClick={submitHandler}
                >
                  Sign Up
                </Button>

                <div style={{ marginTop: "18px" }}>
                  <Link
                    to="/login"
                    style={{
                      marginLeft: "215px",
                      color: "black",
                      fontSize: "12px",
                    }}
                  >
                    Already have an Account?
                  </Link>
                </div>
              </form>
              {/* <h5 style={{ textAlign: "center" }}>or</h5>
                <div style={{ textAlign: "center" }}>
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
          <NavLink to="/adminregister">
            <Button
              style={{
                marginTop: "4px",
                borderRadius: "8px",
                height: "50px",
                width: "100%",
                backgroundColor: "black",
              }}
            >
              Register As An Admin
            </Button>
          </NavLink>
        </Box>
      </Fragment>
    </Fragment>
  );
};

export default Register;
