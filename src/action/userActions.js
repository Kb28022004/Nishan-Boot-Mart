import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCESS,
    REGISTER_USER_FAIL,
   
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS,
  } from "../constant/userConstants";

  //Login
  export const login =(email,password)=>async(dispatch)=>{
try {
    dispatch({
        type:LOGIN_REQUEST
    })
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const {data}=await axios.post('localhost:5000/login',{email,password},config)

    dispatch({
        type:LOGIN_SUCCESS,
        payload:data.user,
    })

} catch (error) {
    dispatch({
        type:LOGIN_FAIL,
        payload:error.response.data.message
    })
}
  }

  //register
  export const register =(userData)=>async(dispatch)=>{
    try {
        dispatch({
            type: REGISTER_USER_REQUEST
        })
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}=await axios.post('localhost:5000/register',userData,config)
    
        dispatch({
            type: REGISTER_USER_SUCESS,
            payload:data.user,
        })
    
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response.data.message
        })
    }
      }
    
  //load user
  export const loaduser =()=>async(dispatch)=>{
    try {
        dispatch({
            type:LOAD_USER_REQUEST
        })
      
        const {data}=await axios.get('localhost:5000/me')
    
        dispatch({
            type:LOAD_USER_SUCCESS,
            payload:data.user,
        })
    
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response.data.message
        })
    }
      }

      //logout user
  export const logout =()=>async(dispatch)=>{
    try {
       
      
        await axios.get('localhost:5000/logout')
    
        dispatch({
            type:LOGOUT_SUCCESS,
        
        })
    
    } catch (error) {
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.response.data.message
        })
    }
      }

  export const  clearErrors=()=>async(dispatch)=>{
dispatch({
    type:CLEAR_ERRORS
})
  }

  

     