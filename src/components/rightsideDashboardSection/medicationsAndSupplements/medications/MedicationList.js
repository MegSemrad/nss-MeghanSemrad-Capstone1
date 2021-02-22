import React from "react";
// import { useHistory } from "react-router-dom";

export const MedicationList = ( { matchedMedication } ) => {
    // const history = useHistory();


    return(
        <div>
            <div>{matchedMedication.medication} {matchedMedication.medicationDosage}</div>
        </div>
    )
};