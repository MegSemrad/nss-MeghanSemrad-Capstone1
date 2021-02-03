import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";


export const PreferredPharmacyList = () => {
  const { basePatientDetails, getBasePatientDetailsById } = useContext(basePatientDetailsContext)
  const userId = parseInt(localStorage.getItem("app_user"))
  const history = useHistory()


  useEffect(() =>
    getBasePatientDetailsById(userId)
    , [])


return (
  <div className="preferredPharmacy">
    {basePatientDetails.hasOwnProperty("id") ?
  <Card style={{ width: '18rem' }}>
  <Card.Body>
      <Card.Title>Preferred Pharmacy</Card.Title>
      <Card.Text>{basePatientDetails.preferredPharmacyName}</Card.Text>
      <Card.Text>{basePatientDetails.preferredPharmacyAddress}</Card.Text>
      <Card.Text>{basePatientDetails.preferredPharmacyPhoneNumber}</Card.Text>
      <Button onClick={() => { history.push(`/preferredPharmacies/edit/${basePatientDetails.id}`) }}>
        Edit
      </Button>
  </Card.Body>
</Card>
:
<Card style={{ width: '18rem' }}>
<Card.Body>
  <Button onClick={() => { history.push("/preferredPharmaciesForm") }}>
    Add
  </Button>
</Card.Body>
</Card>
}
</div>
)
};
