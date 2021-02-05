import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { SpecialistTypeContext } from "./SpecialistTypeProvider";
import { SpecialistTypeCard } from "./SpecialistTypeCard";

export const SpecialistTypeList = () => {
  const { specialistTypes, getSpecialistTypes } = useContext(SpecialistTypeContext)
  const history = useHistory()

  useEffect(() => {
    getSpecialistTypes()
  }, []);


  return (
    <div className="specialistTypes">
        <h2 className="titleWord">Appointments</h2>
          <button onClick={() => { history.push("/SpecialistType/create") }}>
            Add
          </button>
          {specialistTypes.map(specialistType => {
            return <SpecialistTypeCard key={specialistType.id} //argument
              specialistType={specialistType} /> //argument
          })
          }
        </div>
  )
};