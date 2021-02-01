import React from "react";
import { Card, Image } from "react-bootstrap"; 

export const AlertCard = ({ basePatientDetail }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title></Card.Title>
                    {/* <Image src="images/alertsymbol.png" thumbnail /> */}
                    <Card.Subtitle className="mb-2 text-muted">Conditions</Card.Subtitle>
                    <Card.Text>{basePatientDetail.conditions}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Allergies</Card.Subtitle>
                    <Card.Text>{basePatientDetail.allergies}</Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </>
    )
};
