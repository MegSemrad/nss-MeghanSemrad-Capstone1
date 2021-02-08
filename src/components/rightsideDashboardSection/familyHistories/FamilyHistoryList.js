import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { familyHistoriesContext } from "./FamilyHistoryProvider";
import { FamilyHistoryCard } from "./FamilyCard";

export const FamilyHistoryList = () => {
    const {familyHistories, getFamilyHistories } = useContext(familyHistoriesContext)
    const history = useHistory
    const userId = parseInt(localStorage.getItem("app_user"))


useEffect(() => {
    getFamilyHistories()
}, []);


let familyHistorySpecificToUserArray = []
const userFamilyHistory = familyHistories.filter(memberHistory => {
    if(memberHistory.userId === userId) {
        familyHistorySpecificToUserArray.push(memberHistory)
        console.log("familyhistory?", familyHistorySpecificToUserArray )
    }
});

return (
    <div className="familyHistoryByUserId">
        <h2 className="titleWord">Family Medical History</h2>
          {/* <button onClick={() => { history.push("/familyHistory/create") }}>
            Add
          </button> */}
          {
            familyHistorySpecificToUserArray.map(familyMemberHistory => {
              return <FamilyHistoryCard key={familyMemberHistory.id} //argument
              familyMemberHistory={familyMemberHistory} /> 
            })
          }
    </div>
)
};