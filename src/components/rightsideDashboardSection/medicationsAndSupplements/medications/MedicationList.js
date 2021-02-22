import React from "react";


export const MedicationList = ( { matchedMedication, handleDeleteMedication } ) => {
    return(
        <div>
             <button id="medicationDeleteButton" onClick={() => { handleDeleteMedication(matchedMedication.id)}}>✕</button>
            <div>{matchedMedication.medication} {matchedMedication.medicationDosage}</div>
        </div>
    )
};