import React from "react";
import { useHistory } from "react-router-dom"
import { Button } from "react-bootstrap";

export const AppointmentBySpecialistCard = ({ appointmentBySpecialist }) => {
    const history = useHistory()
  return (
    <Button variant="primary" size="lg" block 
    onClick={() => { history.push(`/AppointmentBySpecialist/edit/${appointmentBySpecialist.id}`)}}>
        {appointmentBySpecialist.speciality}
    </Button>
)}

