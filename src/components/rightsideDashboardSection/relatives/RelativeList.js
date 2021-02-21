import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RelativesContext } from "./RelativeProvider";
import { RelativeCard } from "./RelativeCard";


export const RelativeList = () => {
  const { familyHistories, getFamilyHistories, deleteFamilyHistory } = useContext(RelativesContext);
  const history = useHistory();
  const userId = parseInt(localStorage.getItem("app_user"));
  const [matchedRelatives, setMatchedRelatives] = useState([]);


  useEffect(() => {
    getFamilyHistories()
  }, []);


  useEffect( () => {
    const matchedRelatives = familyHistories.filter(relative => relative.userId === userId)
    setMatchedRelatives(matchedRelatives)
  }, [familyHistories]);


  const handleDelete = (id) => {
    deleteFamilyHistory(id)
    .then(() => {
      getFamilyHistories()
    })
  };


  return (
    <div className="relatives">
        <h2 className="titleWord">Family Medical History</h2>
          <button onClick={() => { 
            history.push("/relative/create")
          }}>
            Add
          </button>
          {
            matchedRelatives.map(matchedRelative => {
              return <RelativeCard key={matchedRelative.id} 
              matchedRelative={matchedRelative} 
              handleDelete={handleDelete}/> 
            })
          }
    </div>
  )
};