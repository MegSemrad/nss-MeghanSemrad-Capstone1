import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { basePatientDetailsContext } from "../permanentDashboardProvider"
import { PatientDetailCard } from "./PatientDetailCard";



export const PatientDetailList = () => {
  const { basePatientDetails, getBasePatientDetails } = useContext(basePatientDetailsContext)

  const history = useHistory()

  useEffect(() => {
    getBasePatientDetails()
    }, [])



  const userId = parseInt(localStorage.getItem("app_user"))


  return (
    <div className="patientDetails">
      <button onClick={() => {history.push("/patientDetailsAdd")}}>
                Add Patient Details
      </button>
        {basePatientDetails.map(basePatientDetail => {
            if(userId === basePatientDetail.id) {
              return <PatientDetailCard key={basePatientDetail.id} //argument
                          basePatientDetail={basePatientDetail} /> //argument
              }
        })}
    </div>
  )
};