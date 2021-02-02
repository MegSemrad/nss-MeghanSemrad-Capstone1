import React, { useContext, useEffect } from "react";
import { basePatientDetailsContext } from "../permanentDashboardProvider";
import { PreferredPharmacyCard } from "./PreferredPharmacyCard";


export const PreferredPharmacyList = () => {
  const { basePatientDetails, getBasePatientDetails } = useContext(basePatientDetailsContext)


  useEffect(() => {
    getBasePatientDetails()
    }, [])



const userId = parseInt(localStorage.getItem("app_user"))


return (
  <div className="preferredPharmacy">
    {basePatientDetails.map(basePatientDetail => {
      if (userId === basePatientDetail.id) {
        return <PreferredPharmacyCard key={basePatientDetail.id} //argument
          basePatientDetail={basePatientDetail} /> //argument
      }
    })}
  </div>
)
};
