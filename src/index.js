// json-server -p 8090 -w database.json


import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import { HealthInOne } from "./components/HealthInOne";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HealthInOne />  
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);