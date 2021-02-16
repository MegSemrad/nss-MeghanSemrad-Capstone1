import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../permanentDashboardSection.css";


export const AlertList = ( { matchedUser } ) => {
    const history = useHistory()
  

  return (
    <div className="alerts">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="alertEmoji">⚠️</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Conditions</Card.Subtitle>
            <Card.Text>{matchedUser.conditions}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Allergies</Card.Subtitle>
            <Card.Text>{matchedUser.allergies}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Other</Card.Subtitle>
            <Card.Text>{matchedUser.other}</Card.Text>
            <Button id="app_button" onClick={() => { history.push("/alerts/edit") }}>
              Edit
            </Button>
          </Card.Body>
        </Card>
    </div>
  )
};