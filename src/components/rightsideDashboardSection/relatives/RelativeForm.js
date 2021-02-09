import React, { useContext, useEffect, useState } from "react";
import { RelativesContext } from "./RelativeProvider";

import { useHistory, useParams } from 'react-router-dom';

export const RelativeForm = () => {
    const { addFamilyHistory, getFamilyHistoryById, updateFamilyHistory } = useContext(RelativesContext)
    const { relatives, getRelatives } = useContext(RelativesContext) //need relatives for dropdown and getRelatives

    const [familyHistory, setFamilyHistory] = useState({
        condition: "",
        relativeId: 0
    })

    const [isLoading, setIsLoading] = useState(true);

    const { matchedRelativeId } = useParams();
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newFamilyHistory = { ...familyHistory }
        newFamilyHistory[event.target.id] = event.target.value
        setFamilyHistory(newFamilyHistory)
      }

      const handleSaveFamilyHistory = () => {
        if (parseInt(familyHistory.relativeId) === 0) {
            window.alert("Please select a relative")
        } else {
          setIsLoading(true);
          if (matchedRelativeId){
            updateFamilyHistory({
                id: familyHistory.id,
                condition: familyHistory.condition,
                relativeId: parseInt(familyHistory.relativeId)
            })
            .then(() => history.push("/FamilyHistory"))
          }else {
            addFamilyHistory({
                condition: familyHistory.condition,
                relativeId: parseInt(familyHistory.relativeId)
            })
            .then(() => history.push("/FamilyHistory"))
          }
        }
      }
  

      useEffect(() => {
        getRelatives()
        .then(() => {
          if (matchedRelativeId) {
            getFamilyHistoryById(matchedRelativeId)
            .then(familyHistory => {
                setFamilyHistory(familyHistory)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
        })
      }, [])
  
      return (
        <form className="familMedicalHistoryForm">
          <h2 className="familMedicalHistoryForm__title">Family Medical History Form</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="condition">Conditions: </label>
              <input type="textarea" id="condition" required autoFocus className="form-control"
              placeholder="Condition(s)"
              onChange={handleControlledInputChange}
              value={familyHistory.condition}/>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="condition">Assign to relative: </label>
              <select value={familyHistory.matchedRelativeId} id="matchedRelativeId" className="form-control" onChange={handleControlledInputChange}>
                <option value="0">Select a relative</option>
                {relatives.map(relative => (
                  <option key={relative.id} value={relative.id}>
                    {relative.relative}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
              event.preventDefault() // Prevent browser from submitting the form and refreshing the page
              handleSaveFamilyHistory()
            }}>
          {matchedRelativeId ? "Save" : "Add"}</button>
        </form>
      )


}