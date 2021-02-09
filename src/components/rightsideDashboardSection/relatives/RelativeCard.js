import React from "react";
import { useHistory } from "react-router-dom"
import { Card, Button } from "react-bootstrap";


export const RelativeCard = ({ matchedRelative }) => {
  const history = useHistory()

  return (
    <section className="relative">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{matchedRelative.relative?.relative}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Conditions</Card.Subtitle>
          <Card.Text>{matchedRelative.condition}</Card.Text>
          <Button onClick={() => { history.push(`/relative/edit/${matchedRelative.id}`) }}>
            Edit
          </Button>
        </Card.Body>
      </Card>

    </section>
  )
};
