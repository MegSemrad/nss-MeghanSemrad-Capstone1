import React from "react";


export const MedicationList = ( { matchedMedication, handleDeleteMedication } ) => {
    return(
        <div className="medication">
            <button className="medication__DeleteButton" onClick={() => { handleDeleteMedication(matchedMedication.id)}}>✕</button> 
            <div>{matchedMedication.medication} {matchedMedication.medicationDosage}</div>
        </div>
    )
};