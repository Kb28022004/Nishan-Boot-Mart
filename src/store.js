import {combineReducers,applyMiddleware} from 'redux'
import { legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './reducer/userReducer'

const reducer =combineReducers({
auth:authReducer
})
let initialState={}

const middleWare=[thunk];
const store =createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)))

export default store;