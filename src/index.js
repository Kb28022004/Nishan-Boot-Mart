import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import { ProductProvider } from './context/ProductContext';
// import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './store';
import { positions,transitions,Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { AppProvider } from './context/ProductContext';


const options={
timeout:5000,
position:positions.BOTTOM_CENTER,
transition:transitions.SCALE
}


ReactDOM.render(

  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <AppProvider>
 <App /> 
 </AppProvider>
 </AlertProvider>
</Provider>,


document.getElementById('root')
)
