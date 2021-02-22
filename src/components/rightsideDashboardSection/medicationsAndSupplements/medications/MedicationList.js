import React from "react";
// import { useHistory } from "react-router-dom";

export const MedicationList = ( { matchedMedications } ) => {
    // const history = useHistory();


    return(
        <div>
            <div>{matchedMedications.medication}</div>
            <div>{matchedMedications.medicationDosage}</div>
        </div>
    )
};