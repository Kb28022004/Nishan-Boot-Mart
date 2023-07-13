import React,{Fragment,useState,useEffect,} from 'react'

import { useAlert } from 'react-alert'
import { useDispatch,useSelector } from 'react-redux'
import {login,clearErrors} from '../../action/userActions'
import { Link, NavLink } from 'react-router-dom'
import Spinner from '../../Helper/Spinner'
import { Button } from '../../styles/Button'
import { Box } from '@mui/material'
import GoogleLogin from "react-google-login";



const Login = ({history}) => {
  const [email, setEmail] = useState("")  
  const [password, setPassword] = useState("")


  const alert= useAlert()
  const dispatch=useDispatch()

  const {isAuthenticate,error,loading}=useSelector(state=>state.auth)

  const googleAuth = () => {
    // window.open(
    //   `${process.env.REACT_APP_API_URL}/auth/google/callback`,
    //   "_seld"
    // );
  };

  useEffect(() => {
  
if(isAuthenticate){
  history.push('/profile')
}

    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }

  }, [dispatch,alert,isAuthenticate,error,history])

  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(login(email,password))

  }
  
  return (
  <Fragment>
    {
      loading ? <Spinner/>:(
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
          boxShadow:"inherit"
        }}
      >
         
          <div className="row-wrapper">
            <div >
              <form className="needs-validation" onSubmit={submitHandler}>
              <h3 style={{textAlign:"center"}}> Members Login</h3>
              <hr style={{width:"30%",margin:"0px auto"}} />
<div  >
  <label htmlFor="email" style={{fontSize:"23px",fontFamily:"initial"}} className='my-2'>Email</label>
  <div className="form-group was-validated">

  <input type="email"
  style={{textTransform:"lowercase",borderRadius:"6px",padding:"12px"}}
  required
  autoComplete='off'
  id='email'
  name='email'
  className='form-control'
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
   />
    <div className="invalid-feedback" style={{ textAlign: "center" }}>
              Please enter the valid email
            </div>
          </div>
</div>
<div className="my-2">
  <label htmlFor="password"  style={{fontSize:"23px",fontFamily:"initial"}}>Password</label>
  <div className="form-group was-validated">

  <input type="password"
  style={{textTransform:"lowercase",borderRadius:"6px",padding:"12px"}}
  required
    autoComplete='off'
  id='password'
  name='password'
  className='form-control'
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
   />
</div>
<div className="invalid-feedback" style={{ textAlign: "center" }}>
              Please enter the valid password
            </div>
          </div>
<div style={{marginTop:"18px"}} >

<Link to='/password/forgot' style={{marginLeft:"285px",color:"black",fontSize:"11px"}}>Forgot Password?</Link>
</div>
<Button style={{marginTop:"15px",borderRadius:"8px",height:"50px",width:"100%",backgroundColor:"yellowgreen"}}>Login</Button>
<div style={{marginTop:"18px"}} >

<Link to='/register' style={{marginLeft:"322px",color:"black",fontSize:"11px"}} >New User?</Link>
</div>
              </form>
              <h5 style={{textAlign:"center" }}>or</h5>
              <div style={{textAlign:"center"}}>

<GoogleLogin

clientId=""
onSuccess={googleAuth}
onFailure={googleAuth}
cookiePolicy="single_host_origin"
/>
</div>


            </div>
          </div>
<h5 className='my-4' style={{textAlign:"center" }}>or</h5>
<NavLink to='/adminlogin'>

<Button style={{marginTop:"4px",borderRadius:"8px",height:"50px",width:"100%",backgroundColor:"black"}}>Login As An Admin</Button>
</NavLink>

          </Box>
        </Fragment>
      )
    }
  </Fragment>
  )
}

export default Login