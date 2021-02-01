import React from "react";
import { Card } from "react-bootstrap"; 

export const AlertCard = ({ basePatientDetail }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Alerts</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>{basePatientDetail.conditions}</Card.Text>
                    <Card.Text>{basePatientDetail.allergies}</Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </>
    )
};
