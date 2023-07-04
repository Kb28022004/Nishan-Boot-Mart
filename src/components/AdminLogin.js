import { NavLink, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";

const AdminLogin = (props) => {
  document.body.style.backgroundColor = "white";
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/AdminRegister");
  };
  const [Credentials, setCredentials] = useState({ email: "", passoword: "" });
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
        passoword: Credentials.passoword,
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
          height: "300px",
          width: "40%",
          padding: "20px",
          margin: "0px auto",
          marginTop: "20px",
          borderRadius: "22px",
          border: "1px solid blue",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Admin Login</h3>
        <input
          onChange={onChange}
          style={{
            width: "80%",
            margin: "7px",
            padding: "8px",
            marginLeft: "60px",
            marginTop: "10px",
            borderRadius: "8px",
          }}
          placeholder="Email"
          type="email"
          name="email"
          id="email"
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
          }}
          placeholder="Passoword"
          type="passoword"
          name="passoword"
          id="possoword"
        />
        <br />
        <div className="container my-2">
          <NavLink to={'/'}>
            <button
              style={{
                marginLeft: "200px",
                borderRadius: "12px",
                color: "black",
                fontWeight: "bold",
              }}
              onClick={handleSubmit}
              className="btn btn-warning"
            >
              Log In{" "}
            </button>
          </NavLink>
          <h5 style={{ marginLeft: "220px", marginTop: "12px" }}>or</h5>
          <button
            style={{
              fontWeight: "bold",
              width: "40%",
              textAlign: "center",
              marginLeft: "130px",
              borderRadius: "12px",
            }}
            className="btn btn-success"
          >
            Sign in with google
          </button>
          <h6 style={{ marginTop: "22px", marginLeft: "180px" }}>
            New admin ?{" "}
            <b
              onClick={handleRegister}
              style={{ color: "red", cursor: "pointer" }}
            >
              Sign Up
            </b>
          </h6>
        </div>
      </Box>
    </>
  );
};

export default AdminLogin;
