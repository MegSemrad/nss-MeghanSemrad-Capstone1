import React, { useContext, useEffect, useState } from "react";
import { supplementContext } from "./supplements/SupplementProvider";
import { medicationContext } from "./medications/MedicationProvider";
import { SupplementForm } from "./supplements/SupplementForm";
import { SupplementList } from "./supplements/SupplementList";
import { MedicationForm } from "./medications/MedicationForm";
import { MedicationList } from "./medications/MedicationList";
import "./MedicationAndSupplementSection.css";


export const MedicationAndSupplementSection = (props) => {
    const { supplements, getSupplements, deleteSupplement } = useContext(supplementContext);
    const { medications, getMedications } = useContext(medicationContext);
    const userId = parseInt(localStorage.getItem("app_user"));
    const [matchedSupplements, setMatchedSupplements] = useState([]);
    const [matchedMedications, setMatchedMedications] = useState([]);


    useEffect(() => {
        getSupplements()
        .then(() => {
            getMedications()
        })
    }, []);

    useEffect(() => {
        const matchedSupplements = supplements.filter(s => s.userId === userId)
            setMatchedSupplements(matchedSupplements)
        }, 
        [supplements]);
   
    useEffect(() => {
        const matchedMedications = medications.filter(m => m.userId === userId)
            setMatchedMedications(matchedMedications)
        }, 
        [medications]);

    const  handleDeleteSupplement = (id) => {
        deleteSupplement(id)
        .then(() => {
            getSupplements()
        })
    };


    return (
        <section>
            <div className="medsSection rightSideChildCSS">
                <h3 className="medsSection__title">Medications</h3>
                <MedicationForm className="medsSection__form" />
                {matchedMedications.map(matchedMedication => {
                    return <div className="medsSection__list">
                        <MedicationList 
                            matchedMedication={matchedMedication}/>
                    </div>
                })}
            </div>

            <div className="supplementSection rightSideChildCSS">
                <h3 className="supplementSection__title">Supplements</h3>
                <SupplementForm />
                {matchedSupplements.map(matchedSupplement => {
                    return <SupplementList matchedSupplement={matchedSupplement}
                    handleDeleteSupplement={handleDeleteSupplement}/>
                })}
            </div>
        </section>
    )
};