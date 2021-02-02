import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom"



export const PatientDetailCard = ({ basePatientDetail }) => {
    const history = useHistory()
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
                    <Button onClick={() => {history.push("/patientDetailsForm")}}>
                            Add Patient Details
                    </Button>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </>
    )
};