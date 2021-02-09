import React, {useContext, useState} from "react";
import { RelativesContext } from "./RelativeProvider";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";


export const RelativeCard = ({ matchedRelative }) => {
  const { getFamilyHistory, deleteFamilyHistory } = useContext(RelativesContext)
  const [familyHistory, setFamilyHistory] = useState({})
  const history = useHistory()
  

  const handleDelete = (id) => {
    console.log("Did you make it this far?") // no
    getFamilyHistory(id)
    .then((response) => {
      setFamilyHistory(response)
    })
    .then(() => {
      deleteFamilyHistory(familyHistory.id)
    })
    .then(() => {
      history.push("/FamilyHistory")
    })
  }

// pull id from specific card when delete button clicked and pass that through getFamilyHistory then 
// familyHistory will be set and that can pass through deleteFamilyHistory
  return (
    
    <section className="relative rightSideChildCSS">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{matchedRelative.relative?.relative}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Conditions</Card.Subtitle>
          <Card.Text>
            <ul>
              <li>
                {matchedRelative.condition}
              </li>
            </ul>
          </Card.Text>
          <Button onClick={() => { history.push(`/relative/edit/${matchedRelative.id}`) }}>
            Edit
          </Button >

          {/* <Button onClick={handleDelete}> */}

          <Button onClick={handleDelete(matchedRelative.id)}>
          
          {/* <Button onClick={() => {
            if(matchedRelative.hasOwnProperty("id"){
              handleDelete(matchedRelative.id)
            })}}> */}
          
            Delete
          </Button>
        </Card.Body>
      </Card>

    </section>
  )
};
