import axios from "axios";
import { createContext, useContext,useEffect, useReducer } from "react";
// import { useState } from "react";
import reducer from '../reducer/ProductReducer'

const AppContext=createContext()

const API="https://localhost:5000/GetProducts";
const AppProvider=({children})=>{

    const initialState={
        isLoading:false,
        isError:false,
        products:[],
    brandProducts:[]
    }

const [state,dispatch]=useReducer(reducer,initialState)

    const getProducts=async(url)=>{
        dispatch({type:'API_LOADING'})
try {
    const res=await axios.get(url)
    const products=await res.data;
    dispatch({type:"MY_API_DATA",payload:products})
} catch (error) {
    dispatch({type:"API_ERROR"})
}

    }


    useEffect(() => {
        getProducts(API);
        }, [])
return <AppContext.Provider value={{...state}}>
    {children}

    
</AppContext.Provider>
}
const useProduct=()=>{
    return useContext(AppContext)
}
export {AppProvider,AppContext,useProduct};
