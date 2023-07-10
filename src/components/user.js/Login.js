import React,{Fragment,useState,useEffect,} from 'react'
import { useAlert } from 'react-alert'
import { useDispatch,useSelector } from 'react-redux'
import {login,clearErrors} from '../../action/userActions'
import { Link,useNavigate } from 'react-router-dom'
import Spinner from '../../Helper/Spinner'
import { Button } from '../../styles/Button'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const history=useNavigate()

  const alert= useAlert()
  const dispatch=useDispatch()

  const {isAuthenticate,error,loading}=useSelector(state=>state.auth)

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
          <h2>Login</h2>
          <div className="row-wrapper">
            <div className="col-10 col-lg-5">
              <form className="shodow-lg" onSubmit={submitHandler}>
<h1 className="mb-3">
  Login
</h1>
<div className="form-group">
  <label htmlFor="email">Email</label>
  <input type="email"
  id='email'
  name='email'
  className='form-control'
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
   />
</div>
<div className="form-group">
  <label htmlFor="password">Password</label>
  <input type="password"
  id='password'
  name='password'
  className='form-control'
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
   />
</div>
<Link to='/password/forgot' className='float-right mb-4'>Forgot Password?</Link>
<Button>Login</Button>
<Link to='/register' className='float-right mt-3' >New User?</Link>
              </form>
            </div>
          </div>
        </Fragment>
      )
    }
  </Fragment>
  )
}

export default Login