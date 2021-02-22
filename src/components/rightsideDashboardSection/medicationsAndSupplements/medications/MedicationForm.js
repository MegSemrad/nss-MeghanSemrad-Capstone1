import React, { useContext, useState } from "react";
import { medicationContext } from "./MedicationProvider";


export const MedicationForm = () => {
    const userId = parseInt(localStorage.getItem("app_user"));
    const { addMedication } = useContext(medicationContext);
  
  
    const [medication, setMedication] = useState({
      userId: 0,
      medication: "",
      medicationDosage: ""
    }); 


    const handleControlledInputChange = (event) => {
        const newMedication = { ...medication }
        newMedication[event.target.id] = event.target.value
        setMedication(newMedication)
      };


    const handleSaveMedication = () => {
        addMedication({
            id: medication.id,
            userId: userId,
            medication: medication.medication,
            medicationDosage: medication.medicationDosage
        }) 
    };


    return (
        <form className="MedicationForm rightSideChildCSS">
            <fieldset>
              <div className="form-group">
                <label htmlFor="medication">Medication: </label>
                <input type="text" id="medication" required autoFocus className="form-control"
                placeholder="Medication"
                onChange={handleControlledInputChange}
                value={medication.medication}/>
              </div>
              <div className="form-group">
                <label htmlFor="medicationDosage">Medication Dosage: </label>
                <input type="text" id="medicationDosage" required autoFocus className="form-control"
                placeholder="Dosage"
                onChange={handleControlledInputChange}
                value={medication.medicationDosage}/>
              </div>
            </fieldset>

          <button id="app_button" className="btn btn-primary"
            onClick={event => {
              event.preventDefault()
              handleSaveMedication()
            }}>Save</button>
        </form>
      )
};