import React, { useContext, useEffect, useState } from "react";
import { ProviderContext } from "./ProviderDataProvider";
import { useParams, useHistory } from "react-router-dom";


export const ProviderDetail = () => {
  const { getProviderByIdEmbeddedItems } = useContext(ProviderContext);
  const [provider, setProvider] = useState({});
  const { providerId } = useParams();  
  const history = useHistory();


  useEffect(() => { 
    getProviderByIdEmbeddedItems(providerId)
    .then((response) => {
      setProvider(response)
    })
    }, []);

  
return (
    <section className="provider">
      <h3 className="provider__name">{provider.speciality} ({provider.providerName})</h3>
      <h5>Appointment Notes: </h5>
      <div className="provider__appointmentNote__and__date">{provider.appointmentNotes?.map(note => {return <p>{note.appointmentDate} {note.appointmentNote}</p>})} </div>
      <button onClick={() => {
        history.push(`/AppointmentNote/create/${provider.id}`) 
        }}>Add</button>
      <h5>Questions:  </h5>
      <div className="provider__questions">{provider.questions?.map(question => {
        return <p>
          {question.questions}
        </p>
      })}
      </div>
      <button onClick={() => {
        history.push(`/Questions/add/${provider.id}`) 
        }}>Add</button>
    </section>
  )
};