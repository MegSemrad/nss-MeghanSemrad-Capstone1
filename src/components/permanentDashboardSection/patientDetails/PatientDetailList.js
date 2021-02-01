import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider"
import { PatientDetailCard } from "./PatientDetailCard";


export const PatientDetailList = () => {
  const { basePatientDetails, getBasePatientDetails } = useContext(basePatientDetailsContext)


  useEffect(() => {
    getBasePatientDetails()
    }, [])


  return (
    <div className="patientDetails">
        {basePatientDetails.map(basePatientDetail => {
        
            return <PatientDetailCard key={basePatientDetail.id} //argument
                        basePatientDetail={basePatientDetail} /> //argument
        })
        }
    </div>
  )
};