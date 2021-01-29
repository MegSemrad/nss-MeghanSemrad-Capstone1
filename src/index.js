// json-server -p 8090 -w database.json

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { PatientApp } from "./components/PatientApp";   {/*Remember to change later to my app name!!! */}


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PatientApp />   {/*Remember to change later to my app name!!! */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


