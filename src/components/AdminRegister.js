import React, { Fragment, useState, useEffect } from "react";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../action/userActions";
import { Link } from "react-router-dom";
import Spinner from "../Helper/Spinner";
import { Button } from "../styles/Button";
import { Box } from "@mui/material";
import GoogleLogin from "react-google-login";

const AdminRegister = ({ history }) => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    password: "",
    dob: "",
  });

  const { name, email, password, gender, dob, address, phone } = user;

  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticate, error, loading } = useSelector((state) => state.auth);

  const googleAuth = () => {
    // window.open(
    //   `${process.env.REACT_APP_API_URL}/auth/google/callback`,
    //   "_seld"
    // );
  };

  useEffect(() => {
    if (isAuthenticate) {
      history.push("/login");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticate, error, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(email, password, gender, address, name, dob, phone));
  };

  const onchange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
  }

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Box
            sx={{
              backgroundColor: "white",
              color: "black",
              height: "850px",
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
                  <h3 style={{ textAlign: "center" }}> Register</h3>
                  <hr style={{ width: "30%", margin: "0px auto" }} />

                  <div>
                    <label
                      htmlFor="name"
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
                      id="name"
                      name="name"
                      className="form-control"
                      value={name}
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
                        value={email}
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
                        value={password}
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
                      required
                      autoComplete="off"
                      id="gender"
                      name="gender"
                      className="form-control"
                      value={gender}
                      onChange={onchange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dob"
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
                      required
                      autoComplete="off"
                      id="dob"
                      name="dob"
                      className="form-control"
                      value={dob}
                      onChange={onchange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      style={{ fontSize: "23px", fontFamily: "initial" }}
                      className="my-2"
                    >
                      Mobile Number
                    </label>

                    <input
                      type="number"
                      style={{
                        textTransform: "lowercase",
                        borderRadius: "6px",
                        padding: "12px",
                      }}
                      required
                      autoComplete="off"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={phone}
                      onChange={onchange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
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
                      required
                      autoComplete="off"
                      id="address"
                      name="address"
                      className="form-control"
                      value={address}
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
                <h5 style={{ textAlign: "center" }}>or</h5>
                <div style={{ textAlign: "center" }}>
                  <GoogleLogin
                    clientId=""
                    onSuccess={googleAuth}
                    onFailure={googleAuth}
                    cookiePolicy="single_host_origin"
                  />
                </div>
              </div>
            </div>
         
           
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AdminRegister;
