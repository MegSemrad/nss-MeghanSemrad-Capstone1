import React, { useContext, useEffect, useState } from "react";
import { ProviderContext } from "./ProviderDataProvider";
import { useHistory, useParams } from 'react-router-dom';

export const QuestionsForm = () => {
    const userId = parseInt(localStorage.getItem("app_user"));
    const { providerId } = useParams(); 
    const history = useHistory();


    const { addQuestion } = useContext(ProviderContext);

    
    const [providerSpecificQuestion, setProviderSpecificQuestion] = useState({
        userId: 0,
        providerId: 0,
        questions: ""
    });
    
    
    
    const handleControlledInputChange = (event) => {
        const newQuestion = { ...providerSpecificQuestion }
        newQuestion[event.target.id] = event.target.value
        setProviderSpecificQuestion(newQuestion)
    };
    
    const handleSaveQuestions = () => {
            addQuestion({
                id: providerSpecificQuestion.id,
                userId: userId,
                providerId: parseInt(providerId),
                questions: providerSpecificQuestion.questions
            })
            .then(() => history.push(`/Provider/detail/${providerId}`))
    };
    

            

    return (
        <form>
            <fieldset>
                <div className="form-group">
                <label htmlFor="questions">Questions: </label>
                <input type="text" 
                    id="questions" 
                    required autoFocus 
                    className="form-control"
                    placeholder="Appointment Notes"
                    onChange={handleControlledInputChange}
                    value={providerSpecificQuestion.questions}/>
                </div>
            </fieldset>
            <button id="app_button" className="btn btn-primary"
                onClick={event => {
                    event.preventDefault() 
                    handleSaveQuestions()
            }}>Save</button>
        </form>
    )
};