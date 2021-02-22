import React from "react";


export const SupplementList = ( { matchedSupplement, handleDeleteSupplement } ) => {
    return(
        <div className="supplement">
            <button className="supplement__DeleteButton" onClick={() => { handleDeleteSupplement(matchedSupplement.id)}}>✕</button>
            <div>{matchedSupplement.supplement} {matchedSupplement.supplementDosage}</div>
        </div>
    )
};