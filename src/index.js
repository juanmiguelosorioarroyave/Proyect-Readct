import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Components/layouts/Card/Card';
import Menu from  './Components/layouts/header/header';
import Main from './Components/UI/Main/Main';

ReactDOM.render(
  <React.StrictMode>
    <Card />
    <Menu />
    <Main />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
