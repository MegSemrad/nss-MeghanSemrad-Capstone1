import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider"
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";


export const AlertList = () => {
  const { basePatientDetails, getBasePatientDetailsById } = useContext(basePatientDetailsContext)
  const userId = parseInt(localStorage.getItem("app_user"))
  const history = useHistory()


  useEffect(() => {
    getBasePatientDetailsById(userId)
  }, [])


  return (
    <div className="alerts">
      {basePatientDetails.hasOwnProperty("id") ?
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Alerts</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Conditions</Card.Subtitle>
            <Card.Text>{basePatientDetails.conditions}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">Allergies</Card.Subtitle>
            <Card.Text>{basePatientDetails.allergies}</Card.Text>
            <Button onClick={() => { history.push(`/alerts/edit/${basePatientDetails.id}`) }}>
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