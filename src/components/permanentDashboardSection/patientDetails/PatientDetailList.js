import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { PatientDetailContext } from "./PatientDetailProvider"
import { PatientDetailCard } from "./PatientDetailCard"


export const PatientDetailList = () => {
  const { patientDetails, getPatientDetails } = useContext(PatientDetailContext)
//   const history = useHistory()


  useEffect(() => {
    getPatientDetails()
    }, [])


  return (
    <div className="patientDetails">
        <h2 className="titleWord">Patient Details</h2>
		    {/* <button onClick={() => {history.push("/patientDetails/create")}}>
                Add Patient Details
            </button> */}
        {patientDetails.map(patientDetail => {
        
            return <PatientDetailCard key={patientDetail.id} //argument
                        patientDetail={patientDetail} /> //argument
        })
        }
    </div>
  )
};