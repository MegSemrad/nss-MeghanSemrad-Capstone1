import React, { useContext, useEffect, useState, useHistory } from "react"
import { familyHistoriesContext } from "./FamilyHistoryProvider";

// need all familyHistory objects pertaining to current user and expand within each object the relation object 



export const FamilyHistoryDetail = () =>  {
    const {getFamilyHistoryById} = useContext(familyHistoriesContext)
    const [familyHistory, setfamilyHistory] = useState({})
    const userId = parseInt(localStorage.getItem("app_user"))
    const history = useHistory()

    useEffect(() => {
        getFamilyHistoryById(userId)
        .then((response) => {
            setfamilyHistory(response)
        })
      }, [])
    
    return (
        <section className="familyHistories">
            <h3>Relative:</h3>
            <div>{familyHistory.relation?.relation}</div>
            <h3>Conditions:</h3>
            <div>{familyHistory.condition}</div>
        </section>
    )
}


