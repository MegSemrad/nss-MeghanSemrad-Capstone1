import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider"
import { AlertCard } from "./AlertCard";


export const AlertList = () => {
  const { basePatientDetails, getBasePatientDetails } = useContext(basePatientDetailsContext)


  useEffect(() => {
    getBasePatientDetails()
  }, [])


  const userId = parseInt(localStorage.getItem("app_user"))


  return (
    <div className="alerts">
      {basePatientDetails.map(basePatientDetail => {
        if (userId === basePatientDetail.id) {
          return <AlertCard key={basePatientDetail.id} //argument
            basePatientDetail={basePatientDetail} /> //argument
        }
      })}
    </div>
  )
};