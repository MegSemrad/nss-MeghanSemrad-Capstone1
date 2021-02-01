import React from "react";
import { Card } from "react-bootstrap";

export const PatientDetailCard = ({ basePatientDetail }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Patient Details</Card.Title>
                    <Card.Text>{basePatientDetail.name}</Card.Text>
                    <Card.Text>DOB: {basePatientDetail.birthday}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Emergency Contact</Card.Subtitle>
                    <Card.Text>Name: {basePatientDetail.emergencyContactName}</Card.Text>
                    <Card.Text>Relation: {basePatientDetail.emergencyContactRelation}</Card.Text>
                    <Card.Text>Phone Number: {basePatientDetail.emergencyContactPhoneNumber}</Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </>
    )
};