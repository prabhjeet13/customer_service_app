import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import {Provider} from "react-redux";
import rootReducer from "./reducer/index";
import {configureStore} from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom';
const store = configureStore({
  reducer : rootReducer,
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Provider store = {store}>
    <React.StrictMode>
      <App />
      <Toaster position='top right'/>
    </React.StrictMode>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
