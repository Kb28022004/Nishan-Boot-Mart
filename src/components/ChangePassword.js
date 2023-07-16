import React, { useState,useEffect } from 'react'
import { Button } from '../styles/Button'
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, clearErrors } from "../action/userActions";
import { UPDATE_PASSOWORD_RESET } from "../constant/userConstants";


const ChangePassword = ({history}) => {
  const [Oldpassword,setOldpassword]=useState("");
  const [newPassword, setnewPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")

  const alert=useAlert();
  const dispatch=useDispatch();

  const {error,isUpdated}=useSelector(state=>state.user)

  useEffect(() => {
   if(error){
    alert.error(error);
    dispatch(clearErrors());

    if(isUpdated){
      alert.success('Password is updated successfully')
      history.push('/profile:accountsettings')

      dispatch({
        type:UPDATE_PASSOWORD_RESET
      })
    }
   }
  }, [dispatch,alert,error,isUpdated,history])

  const submitHandler=(e)=>{
e.preventDefault();

const formData=new FormData();
formData.set("Oldpassword",Oldpassword);
formData.set('newPassword',newPassword);
formData.set('confirmPassword',confirmPassword);


dispatch(updatePassword(formData))
  }
  
  return (
     <div className='accountsettings' >
    <h1 className="mainhead1" style={{color:"green"}}>Change Password</h1>
    <div className="form" >
      <div className="form-group">
        <label htmlFor="Oldpassword">Old Password <span>*</span></label>
        <input style={{autoCorrect:"false",textTransform:"lowercase"}}
         type="password"
          name="Oldpassword" 
          id="Oldpassword"
          value={Oldpassword}
          onChange={(e)=>setOldpassword(e.target.value)}
           autoCorrect='true' />
      </div>

      <div className="form-group">
        <label htmlFor="newPassword">New Password  <span>*</span></label>
        <input 
         style={{autoCorrect:"false",textTransform:"lowercase"}}
          type="password" 
          name="newPassword"
          value={newPassword}
          onChange={(e)=>setnewPassword(e.target.value)}
           id="newPassword" />
      </div>
      
      <div className="form-group">
        <label htmlFor="confirmPassword"> Confirm new password  <span>*</span></label>
        <input 
         style={{autoCorrect:"false",textTransform:"lowercase"}}
          type="password" 
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e)=>setconfirmPassword(e.target.value)}
           id="confirmPassword" />
      </div>
</div>
<Button onClick={submitHandler} style={{borderRadius:"6px"}}> Save changes</Button>
</div>
  )
}

export default ChangePassword