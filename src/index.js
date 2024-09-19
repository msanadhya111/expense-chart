import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// document.getElementById('root') is basically the place where our all react code will be loaded, we should
// write it after writing the load of our main component like loading the component in the root one
// which will be there in index.html file under 'public' folder


// Loading the component in strict mode basically helps us in letting know the issues in advance, it's very good
// for development purpose, this has no issues even on production as well, it helps us in following some of the
// recommended practices


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
