// import React, { useContext, useEffect, useState } from "react";
// import { familyHistoriesContext } from "./FamilyHistoryProvider";
// import { useParams, useHistory } from "react-router-dom";


// // need all familyHistory objects pertaining to current user and expand within each object the relation object 



// export const FamilyHistoryDetail = () =>  {
//     const {getFamilyHistories, getFamilyHistoryById, deleteFamilyHistory} = useContext(familyHistoriesContext)
//     const [familyHistory, setfamilyHistory] = useState({})
//     const userId = parseInt(localStorage.getItem("app_user"))
//     const history = useHistory()

//     useEffect(() => {
//         getFamilyHistories()
//         .then((response) => {
//             setfamilyHistory(response)
//         })
//       }, [])
    
//     return (
//         <section className="familyHistories">
//             <h3>Relative:</h3>
//             <div>{familyHistory.relation?.relation}</div>
//             <h3>Conditions:</h3>
//             <div>{familyHistory.condition}</div>
//             <button onClick={() => {
//                 history.push(`/familyHistories/edit/${familyHistory.id}`) // this says when users clicks Edit button, "take" them to a new URL -- which can be seen in ApplicationView.js
//             }}>Edit</button>
//             <button onClick={handleRelease}>Delete</button>
//         </section>
//     )
// }


