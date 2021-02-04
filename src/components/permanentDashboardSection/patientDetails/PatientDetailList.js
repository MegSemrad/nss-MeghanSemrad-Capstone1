import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../permanentDashboardSection.css"



/*
  - useContext here is taking the data from basePatientDetailsContext and storing  
    basePatientDetails & getBasePatientDetailsById locally
  - But basePatientDetails will only be filled after getBasePatientDetailsById is called
  - When it is called in useEffect - am passing in userId as an argument 
  - that id ill be taken and passed through getPatientDetailsById in permanentDashboardProvider.js
  - the specific object will be fetched and then passed through setBasePatientDetails as an arguement
  - that function (setBasePatientDetails) is the function responsible for setting the value of the
    state variable in permanentDashboardProvider.js. The state variable is then called here with 
    useContext. 
*/
export const PatientDetailList = () => {
  const { basePatientDetails, getBasePatientDetailsById } = useContext(basePatientDetailsContext)
  const userId = parseInt(localStorage.getItem("app_user"))
  const history = useHistory()

/*
  - useEffect only runs once and that is on initial load
  - it is a function that takes 2 arguments (anonymous function and an 
    empty array into which we are passing the patient details retrieved by id)
  - more or less setting up an event listener
*/ 
useEffect(() => 
    getBasePatientDetailsById(userId)
    , [])



/*
    - ternary operator (something ? "this" : "that" )
    - .hasOwnProperty
*/
  return (
    <div className="patientDetails leftSideChildCSS">
      {basePatientDetails.hasOwnProperty("id") ?
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Patient Details</Card.Title>
            <Card.Text>Name: {basePatientDetails.name}</Card.Text>
            <Card.Text>DOB: {basePatientDetails.birthday}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Emergency Contact</Card.Subtitle>
            <Card.Text>Name: {basePatientDetails.emergencyContactName}</Card.Text>
            <Card.Text>Relation: {basePatientDetails.emergencyContactRelation}</Card.Text>
            <Card.Text>Phone Number: {basePatientDetails.emergencyContactPhoneNumber}</Card.Text>
            <Button onClick={() => { history.push(`/patientDetails/edit/${basePatientDetails.id}`) }}>
              Edit
            </Button>
          </Card.Body>
        </Card>
        :
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Button onClick={() => { history.push("/patientDetailsForm") }}>
              Add
            </Button>
          </Card.Body>
        </Card>
      }
    </div>
  )
};