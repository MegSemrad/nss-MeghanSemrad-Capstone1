import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PatientApp } from "./components/PatientApp";   {/*Remember to change later to my app name!!! */}
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PatientApp />   {/*Remember to change later to my app name!!! */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


