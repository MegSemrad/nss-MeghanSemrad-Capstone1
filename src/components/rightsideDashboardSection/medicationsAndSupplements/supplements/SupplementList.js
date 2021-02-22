import React from "react";


export const SupplementList = ( { matchedSupplement, handleDeleteSupplement } ) => {
    return(
        <div>
            <button id="supplementDeleteButton" onClick={() => { handleDeleteSupplement(matchedSupplement.id)}}>✕</button>
            <div>{matchedSupplement.supplement} {matchedSupplement.supplementDosage}</div>
        </div>
    )
};