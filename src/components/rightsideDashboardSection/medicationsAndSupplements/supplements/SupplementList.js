import React from "react";
// import { useHistory } from "react-router-dom";

export const SupplementList = ( { matchedSupplements } ) => {
    // const history = useHistory();


    return(
        <div>
            <div>{matchedSupplements.supplement}</div>
            <div>{matchedSupplements.supplementDosage}</div>
        </div>
    )
};