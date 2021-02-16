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
  

  let specialistsArray = []
  const specialistType = specialistTypes.filter(type => {
    if(type.userId === userId) {
    specialistsArray.push(type)
  }
});

  return (
    <section className="specialistTypesByUserId">
        <h2 className="titleWord">Providers</h2>
          <button onClick={() => { history.push("/SpecialistType/create") }}>
            Add
          </button>
          {
            specialistsArray.map(specialist => { //this .ap returns an new array that is an array of HTML strings
              return <SpecialistTypeCard key={specialist.id} //argument
                  specialistType={specialist} /> 
            })
          }
    </section>
  )
};

// loop over and find everything whose userID matches userId

// specialistTypes is the specialistTypes object containing through embed the appointmentsBySpecialist array of object(s)
// and the questions array of object(s)