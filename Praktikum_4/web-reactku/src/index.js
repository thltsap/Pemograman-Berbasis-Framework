import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import BlogPost from  "./container/BlogPost";
import MahasiswaPost from  "./container/MahasiswaPost";

ReactDOM.render(
  <BlogPost />,
  document.getElementById('content')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
