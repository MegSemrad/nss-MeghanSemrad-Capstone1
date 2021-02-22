import React from "react";
// import { useHistory } from "react-router-dom";

export const MedicationList = ( { matchedMedications } ) => {
    // const history = useHistory();


    return(
        <div>
            <div>{matchedMedications.medication} {matchedMedications.medicationDosage}</div>
        </div>
    )
};