import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RelativesContext } from "./RelativeProvider";
import { RelativeCard } from "./RelativeCard";

export const RelativeList = () => {
    const { relatives, getFamilyHistories } = useContext(RelativesContext)
    const history = useHistory
    const userId = parseInt(localStorage.getItem("app_user"))


useEffect(() => {
  getFamilyHistories()
}, []);


let matchedRelativesArray = []
  const matchedRelatives = relatives.filter(relative => {
    if(relative.userId === userId) {
    matchedRelativesArray.push(relative)
  }
});
console.log(matchedRelativesArray)
  return (
    <div className="relatives">
        <h2 className="titleWord">Family Medical History</h2>
          <button onClick={() => { history.push("/relative/create") }}>
            Add
          </button>
          {
            matchedRelativesArray.map(matchedRelative => {
              return <RelativeCard key={matchedRelative.id} //argument
                matchedRelative={matchedRelative} /> 
            })
          }
    </div>
  )
};