import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../permanentDashboardSection.css"


export const PreferredPharmacyList = ({ matchedUser }) => {
  const history = useHistory()


  return (
    <div className="preferredPharmacy">
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>Preferred Pharmacy</Card.Title>
            <Card.Text>{matchedUser.preferredPharmacyName}</Card.Text>
            <Card.Text>{matchedUser.preferredPharmacyAddress}</Card.Text>
            <Card.Text>{matchedUser.preferredPharmacyPhoneNumber}</Card.Text>
            <Button id="app_button" onClick={() => { history.push("/preferredPharmacies/edit") }}>
              Edit
            </Button>
          </Card.Body>
        </Card>
    </div>
  )
};
