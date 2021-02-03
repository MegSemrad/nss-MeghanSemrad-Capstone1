import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";



export const PatientDetailList = () => {
  const { basePatientDetails, getBasePatientDetailsById } = useContext(basePatientDetailsContext)
  const userId = parseInt(localStorage.getItem("app_user"))
  const history = useHistory()


  useEffect(() =>
    getBasePatientDetailsById(userId)
    , [])




  return (
    <div className="patientDetails">
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