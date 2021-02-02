import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider"
import { PatientDetailCard } from "./PatientDetailCard";



export const PatientDetailList = () => {
  const { basePatientDetails, getBasePatientDetails } = useContext(basePatientDetailsContext)


  useEffect(() => {
    getBasePatientDetails()
    }, [])



  const userId = parseInt(localStorage.getItem("app_user"))


  return (
    <div className="patientDetails">
        {basePatientDetails.map(basePatientDetail => {
            if(userId === basePatientDetail.id) {
              return <PatientDetailCard key={basePatientDetail.id} //argument
                          basePatientDetail={basePatientDetail} /> //argument
              }
        })}
    </div>
  )
};