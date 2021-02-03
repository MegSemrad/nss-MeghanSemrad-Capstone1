import React, { useContext, useEffect, useState } from "react"
import { basePatientDetailsContext } from "../permanentDashboardProvider"
import { Card, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom"



export const PatientDetailCard = () => {

    const { getBasePatientDetailsById } = useContext(basePatientDetailsContext)

    const [basePatientDetails, setBasePatientDetails] = useState({})

    const { basePatientDetailsId } = useParams()

    useEffect(() => {
        getBasePatientDetailsById(basePatientDetailsId)
        .then((response) => {
          setBasePatientDetails(response)
        })
        }, [])
    
    

    const history = useHistory()
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Patient Details</Card.Title>
                    <Card.Text>Name: {basePatientDetails.name}</Card.Text>
                    <Card.Text>DOB: {basePatientDetails.birthday}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Emergency Contact</Card.Subtitle>
                    <Card.Text>Name: {basePatientDetails.emergencyContactName}</Card.Text>
                    <Card.Text>Relation: {basePatientDetails.emergencyContactRelation}</Card.Text>
                    <Card.Text>Phone Number: {basePatientDetails.emergencyContactPhoneNumber}</Card.Text>
                    {/* <Button onClick={() => {history.push("/patientDetailsForm")}}>
                            Add Patient Details
                    </Button> */}
                    <Button onClick={() => {history.push("/patientDetails/edit/${basePatientDetail.id}")}}>
                            Edit
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
};