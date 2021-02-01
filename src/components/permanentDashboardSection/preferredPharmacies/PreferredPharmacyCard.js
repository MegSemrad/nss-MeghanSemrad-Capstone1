import React from "react";
import { Card } from "react-bootstrap"; 

export const PreferredPharmacyCard = ({ basePatientDetail }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Preferred Pharmacy</Card.Title>
                    <Card.Text>{basePatientDetail.preferredPharmacyName}</Card.Text>
                    <Card.Text>{basePatientDetail.preferredPharmacyAddress}</Card.Text>
                    <Card.Text>{basePatientDetail.preferredPharmacyPhoneNumber}</Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </>
    )
};