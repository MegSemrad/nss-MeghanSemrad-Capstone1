import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";


export const RelativeCard = ({ matchedRelative, handleDelete }) => {
  const history = useHistory()




  return (

    <section className="relative rightSideChildCSS">
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title>{matchedRelative.relative?.relative} {matchedRelative.relative?.nickname}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Conditions</Card.Subtitle>
          <Card.Text>
              {matchedRelative.condition}
          </Card.Text>
          <Button id="app_button" onClick={() => { 
            history.push(`/relative/edit/${matchedRelative.id}`)}}>
            Edit
          </Button >
          <Button id="app_button" onClick={() => { handleDelete(matchedRelative.id) }}>
            Delete
          </Button>
        </Card.Body>
      </Card>

    </section>
  )
};
