import React, { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import { Box } from "@mui/material";

const AdminLogin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "550px",
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
            <form className="needs-validation" onSubmit={submitHandler}>
              <h3 style={{ textAlign: "center" }}> Admin Login</h3>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  to="/password/forgot"
                  style={{
                    marginLeft: "260px",
                    color: "black",
                    fontSize: "12px",
                  }}
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
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
                  to="/adminregister"
                  style={{
                    marginLeft: "300px",
                    color: "black",
                    fontSize: "12px",
                  }}
                >
                  New User?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Fragment>
  );
};

export default AdminLogin;
