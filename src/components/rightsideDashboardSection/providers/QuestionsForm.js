import React, { useContext, useEffect, useState } from "react";
import { ProviderContext } from "./ProviderDataProvider";
import { useHistory, useParams } from 'react-router-dom';

export const QuestionsForm = () => {
    const userId = parseInt(localStorage.getItem("app_user"))
    const { providerId } = useParams(); 
    const history = useHistory();


    const {getQuestions, updateQuestions} = useContext(ProviderContext);

    
    const [providerSpecificQuestions, setProviderSpecificQuestions] = useState({
        userId: 0,
        providerId: 0,
        questions: ""
    });
    
    
    
    const handleControlledInputChange = (event) => {
        const newQuestions = { ...providerSpecificQuestions }
        newQuestions[event.target.id] = event.target.value
        setProviderSpecificQuestions(newQuestions)
    };
    
    const handleSaveQuestions = () => {
        if(providerId){
            updateQuestions({
                id: providerSpecificQuestions.id,
                userId: userId,
                providerId: providerSpecificQuestions.providerId,
                questions: providerSpecificQuestions.questions
            })
            .then(() => history.push(`/Provider/detail/${providerId}`))
        }
    };
    
    
    
    useEffect(() => {
        getQuestions()
        .then((questions) => {
            const SelectedQuestionObject = questions.find(question => question.providerId === parseInt(providerId))
                setProviderSpecificQuestions(SelectedQuestionObject)

        })
    }, 
    []);
    
            

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
                    value={providerSpecificQuestions.questions}/>
                </div>
            </fieldset>
            <button id="app_button" className="btn btn-primary"
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSaveQuestions()
            }}>Save</button>
        </form>
    )
};