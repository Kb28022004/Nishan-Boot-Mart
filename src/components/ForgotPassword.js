import React,{useState,useEffect} from "react";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { forgotpassword, clearErrors } from "../action/userActions";
import { Box } from "@mui/material";
import { Button } from "../styles/Button";

const ForgotPassword = () => {
  const [Email, setEmail] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, message } = useSelector((state) => state.forgotpassword);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, alert, error, message]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("email", Email);

    dispatch(forgotpassword(formData));
  };

  return <div>
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
          boxShadow:"inherit"
        }}
      >
<div className="row-wrapper">
<form className="needs-validation" >
              <h3 style={{textAlign:"center"}}>Forgot Password</h3>
              <hr style={{width:"30%",margin:"0px auto"}} />
              <div  >
  <label htmlFor="Email" style={{fontSize:"23px",fontFamily:"initial"}} className='my-2'>Email</label>
  <div className="form-group was-validated">

  <input type="email"
  style={{textTransform:"lowercase",borderRadius:"6px",padding:"12px"}}
  required
  autoComplete='off'
  id='Email'
  name='Email'
  className='form-control'
  value={Email}
  onChange={(e)=>setEmail(e.target.value)}
   />
    <div className="invalid-feedback" style={{ textAlign: "center" }}>
              Please enter the valid email
            </div>
          </div>
          <Button onClick={submitHandler} style={{marginTop:"15px",borderRadius:"8px",height:"50px",width:"100%",backgroundColor:"yellowgreen"}}>Send Email</Button>
<div style={{marginTop:"18px"}} ></div>
</div>
              </form>
  </div>
      </Box>
  </div>;
};

export default ForgotPassword;
