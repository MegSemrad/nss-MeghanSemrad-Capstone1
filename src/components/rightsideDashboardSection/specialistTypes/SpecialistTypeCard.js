import React from "react";
import { useHistory } from "react-router-dom"
import { Button } from "react-bootstrap";

export const SpecialistTypeCard = ({ specialistType }) => {
  const history = useHistory()
  return (
      <Button variant="primary" size="lg" block className="rightSideChildCSS"
        onClick={() => { history.push(`/SpecialistType/detail/${specialistType.id}`) }}>
        {specialistType.speciality}
      </Button>
  )
}

