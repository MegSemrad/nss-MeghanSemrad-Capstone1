import React from "react";
import { useHistory } from "react-router-dom"
import { Button } from "react-bootstrap";

export const AppointmentBySpecialistCard = ({ appointmentBySpecialist }) => {
    const history = useHistory()
  return (
    <Button variant="primary" size="lg" block className="rightSideChildCSS"
    onClick={() => { history.push(`/AppointmentBySpecialist/detail/${appointmentBySpecialist.id}`)}}>
        {appointmentBySpecialist.specialistType?.speciality}
    </Button>
)}

