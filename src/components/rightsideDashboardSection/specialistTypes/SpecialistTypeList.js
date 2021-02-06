import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { SpecialistTypeContext } from "./SpecialistTypeProvider";
import { SpecialistTypeCard } from "./SpecialistTypeCard";

export const SpecialistTypeList = () => {
  const { specialistTypes,  getSpecialistTypes } = useContext(SpecialistTypeContext)
  const userId = parseInt(localStorage.getItem("app_user"))
  const history = useHistory()


  useEffect(() => {
    getSpecialistTypes()
  }, []);


const specialistType = specialistTypes.filter(type => {
  if(userId === type.userId) {
    return type
  }
});

  return (
    <div className="specialistTypesByUserId">
        <h2 className="titleWord">Appointments</h2>
          <button onClick={() => { history.push("/SpecialistType/create") }}>
            Add
          </button>
          <SpecialistTypeCard key={specialistType.id} //argument
              specialistType={specialistType} /> 
    </div>
  )
};

// loop over and find everything whose userID matches userId

// specialistTypes is the specialistTypes object containing through embed the appointmentsBySpecialist array of object(s)
// and the questions array of object(s)