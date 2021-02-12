import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../permanentDashboardSection.css"


export const PreferredPharmacyList = ( { matchedUser } ) => {
  const history = useHistory()


return (
  <div className="preferredPharmacy">
    {matchedUser.hasOwnProperty("id") ?
  <Card style={{ width: '18rem' }}>
  <Card.Body>
      <Card.Title>Preferred Pharmacy</Card.Title>
      <Card.Text>{matchedUser.preferredPharmacyName}</Card.Text>
      <Card.Text>{matchedUser.preferredPharmacyAddress}</Card.Text>
      <Card.Text>{matchedUser.preferredPharmacyPhoneNumber}</Card.Text>
      <Button onClick={() => { history.push(`/preferredPharmacies/edit/${matchedUser.id}`) }}>
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
