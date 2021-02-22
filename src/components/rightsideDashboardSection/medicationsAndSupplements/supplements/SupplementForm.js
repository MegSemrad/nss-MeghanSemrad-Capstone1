import React, { useContext, useState } from "react";
import { supplementContext } from "./SupplementProvider";


export const SupplementForm = () => {
    const userId = parseInt(localStorage.getItem("app_user"));
    const { addSupplement } = useContext(supplementContext);
  
  
    const [supplement, setSupplement] = useState({
      userId: 0,
      supplement: "",
      supplementDosage: ""
    }); 


    const handleControlledInputChange = (event) => {
        const newSupplement = { ...supplement }
        newSupplement[event.target.id] = event.target.value
        setSupplement(newSupplement)
      };


    const handleSaveSupplement = () => {
        addSupplement({
            id: supplement.id,
            userId: userId,
            supplement: supplement.supplement,
            supplementDosage: supplement.supplementDosage
        }) 
        .then(() => {
          setSupplement({
            supplement: "",
            supplementDosage: ""
          })
        })
    };


    return (
        <form className="SupplementForm rightSideChildCSS">
            <fieldset>
              <div className="form-group">
                <label htmlFor="supplement">Supplement: </label>
                <input type="text" id="supplement" required autoFocus className="form-control"
                placeholder="Supplement"
                onChange={handleControlledInputChange}
                value={supplement.supplement}/>
              </div>
              <div className="form-group">
                <label htmlFor="supplementDosage">Supplement Dosage: </label>
                <input type="text" id="supplementDosage" required autoFocus className="form-control"
                placeholder="Dosage"
                onChange={handleControlledInputChange}
                value={supplement.supplementDosage}/>
              </div>
            </fieldset>

          <button id="app_button" className="btn btn-primary" type="reset"
            onClick={event => {
                // make it clear fields on click
              event.preventDefault()
              handleSaveSupplement()
            }}>Save</button>
        </form>
      )
};