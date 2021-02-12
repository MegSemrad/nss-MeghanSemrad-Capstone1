import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider"
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../permanentDashboardSection.css"


export const AlertList = ( { matchedUser } ) => {
    const history = useHistory()
  

  return (
    <div className="alerts">
      {matchedUser.hasOwnProperty("id") ?
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="alertEmoji">⚠️</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Conditions</Card.Subtitle>
            <Card.Text>{matchedUser.conditions}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Allergies</Card.Subtitle>
            <Card.Text>{matchedUser.allergies}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Other</Card.Subtitle>
            <Card.Text>{matchedUser.other}</Card.Text>
            <Button onClick={() => { history.push(`/alerts/edit/${matchedUser.id}`) }}>
              Edit
            </Button>
          </Card.Body>
        </Card>
        :
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Button onClick={() => { history.push("/alertsForm") }}>
              Add
            </Button>
          </Card.Body>
        </Card>
      }
    </div>
  )
};