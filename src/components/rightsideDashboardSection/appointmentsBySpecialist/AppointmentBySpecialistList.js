import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { AppointmentBySpecialistContext } from "./AppointmentBySpecialistProvider";
import { AppointmentBySpecialistCard } from "./AppointmentBySpecialistCard";

export const AppointmentBySpecialistList= () => {
  const { appointmentsBySpecialist, getAppointmentsBySpecialist } = useContext(AppointmentBySpecialistContext)
  const history = useHistory()

  useEffect(() => {
      debugger
    getAppointmentsBySpecialist()
    }, []);


  return (
    <div className="appointmentsBySpecialist">
        <h2 className="titleWord">Appointments</h2>
		    <button onClick={() => {history.push("/AppointmentBySpecialist/create")}}>
                Add
            </button>
        {appointmentsBySpecialist.map(appointmentBySpecialist => {
            return <AppointmentBySpecialistCard key={appointmentBySpecialist.id} //argument
            appointmentBySpecialist={appointmentBySpecialist} /> //argument
        })
        }
    </div>
  )
};