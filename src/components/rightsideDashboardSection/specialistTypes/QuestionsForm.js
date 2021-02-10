// import React, { useContext, useEffect, useState } from "react";
// import { SpecialistTypeContext } from "./SpecialistTypeProvider";
// import { useHistory, useParams } from 'react-router-dom';

// export const QuestionsForm = () => {
//     const userId = parseInt(localStorage.getItem("app_user"))
//     const [isLoading, setIsLoading] = useState(true);
//     const { specialistTypeId } = useParams(); 
//     const history = useHistory();


//     const {questions, getQuestions, updateQuestions} = useContext(SpecialistTypeContext);


//     const [providerSpecificQuestions, setProviderSpecificQuestions] = useState({
//       userId: 0,
//       specialistTypeId: 0,
//       questions: ""
//     });


//     const handleControlledInputChange = (event) => {
//         const newQuestions = { ...providerSpecificQuestions }
//         newQuestions[event.target.id] = event.target.value
//         setProviderSpecificQuestions(newQuestions)
//     };


//     const handleSaveQuestions = () => {
//         setIsLoading(true);
//         if(specialistTypeId){
//             updateQuestions({
//                 id: providerSpecificQuestions.id,
//                 userId: userId,
//                 specialistTypeId: providerSpecificQuestions.specialistTypeId,
//                 questions: providerSpecificQuestions.questions
//             })
//             .then(() => history.push(`/SpecialistType/detail/${providerSpecificQuestions.id}`))
//         }
//     };


//     useEffect(() => {
//         getQuestions() 
//     }, [])

//     useEffect(() => {
//         if(specialistTypeId){
//             const matchedQuestions = questions.find(question => question.specialistTypeId === parseInt(specialistTypeId))
//             setProviderSpecificQuestions(matchedQuestions)
//             console.log("there?", matchedQuestions) // undefined
//         }
//     }, [questions]);


//     return (
//         <form>
//             <fieldset>
//                 <div className="form-group">
//                 <label htmlFor="questions">Questions: </label>
//                 <input type="text" 
//                     id="questions" 
//                     required autoFocus 
//                     className="form-control"
//                     placeholder="Appointment Notes"
//                     onChange={handleControlledInputChange}
//                     value={providerSpecificQuestions.questions}/>
//                 </div>
//             </fieldset>
//             <button className="btn btn-primary"
//                 disabled={isLoading}
//                 onClick={event => {
//                     event.preventDefault() // Prevent browser from submitting the form and refreshing the page
//                     handleSaveQuestions()
//             }}>Save</button>
//         </form>
//     )

// }