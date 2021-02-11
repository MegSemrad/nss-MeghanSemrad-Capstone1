import React, { useContext, useEffect, useState } from "react";
import { SpecialistTypeContext } from "./SpecialistTypeProvider";
import { useHistory, useParams } from 'react-router-dom';

export const QuestionsForm = () => {
    const userId = parseInt(localStorage.getItem("app_user"))
    const { specialistTypeId } = useParams(); 
    const history = useHistory();


    const {getQuestions, updateQuestions} = useContext(SpecialistTypeContext);

    
    const [providerSpecificQuestions, setProviderSpecificQuestions] = useState({
        userId: 0,
        specialistTypeId: 0,
        questions: ""
    });
    
    
    
    const handleControlledInputChange = (event) => {
        const newQuestions = { ...providerSpecificQuestions }
        newQuestions[event.target.id] = event.target.value
        setProviderSpecificQuestions(newQuestions)
    };
    
    const handleSaveQuestions = () => {
        if(specialistTypeId){
            updateQuestions({
                id: providerSpecificQuestions.id,
                userId: userId,
                specialistTypeId: providerSpecificQuestions.specialistTypeId,
                questions: providerSpecificQuestions.questions
            })
            .then(() => history.push(`/SpecialistType/detail/${providerSpecificQuestions.id}`))
        }
    };
    
    
    
    useEffect(() => {
        getQuestions()
        .then((questions) => {
            const SelectedQuestionObject = questions.find(question => question.specialistTypeId === parseInt(specialistTypeId))
                setProviderSpecificQuestions(SelectedQuestionObject)

        })
    }, 
    [])
    
            

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
            <button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                    handleSaveQuestions()
            }}>Save</button>
        </form>
    )


}