import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../permanentDashboardSection.css"


export const PatientDetailList = ( { matchedUser } ) => {
  const history = useHistory()


  return (
    <div className="patientDetails">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Patient Details</Card.Title>
            <Card.Text>Name: {matchedUser.name}</Card.Text>
            <Card.Text>DOB: {matchedUser.birthday}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Emergency Contact</Card.Subtitle>
            <Card.Text>Name: {matchedUser.emergencyContactName}</Card.Text>
            <Card.Text>Relation: {matchedUser.emergencyContactRelation}</Card.Text>
            <Card.Text>Phone Number: {matchedUser.emergencyContactPhoneNumber}</Card.Text>
            <Button onClick={() => { history.push("/patientDetails/edit") }}>
              Edit
            </Button>
          </Card.Body>
        </Card>
    </div>
  )
};