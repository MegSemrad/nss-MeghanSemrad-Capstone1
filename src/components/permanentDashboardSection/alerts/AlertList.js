import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider"
import { AlertCard } from "./AlertCard";


export const AlertList = () => {
  const { basePatientDetails, getBasePatientDetails } = useContext(basePatientDetailsContext)


  useEffect(() => {
    getBasePatientDetails()
    }, [])


  return (
    <div className="alerts">
        {basePatientDetails.map(basePatientDetail => {
        
            return <AlertCard key={basePatientDetail.id} //argument
            basePatientDetail={basePatientDetail} /> //argument
        })
        }
    </div>
  )
};
