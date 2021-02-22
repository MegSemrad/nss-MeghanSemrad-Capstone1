import React, { useContext, useEffect, useState } from "react";
import { supplementContext } from "./supplements/SupplementProvider";
import { medicationContext } from "./medications/MedicationProvider";
import { SupplementForm } from "./supplements/SupplementForm";
import { SupplementList } from "./supplements/SupplementList";
import { MedicationForm } from "./medications/MedicationForm";
import { MedicationList } from "./medications/MedicationList";
import "./MedicationAndSupplementSection.css";


export const MedicationAndSupplementSection = (props) => {
    const { supplements, getSupplements } = useContext(supplementContext);
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


    return (
        <section>
            <div className="medsAndSupplementSection rightSideChildCSS">
                <h3>Medications</h3>
                <MedicationForm />
                {matchedMedications.map(matchedMedication => {
                    return <MedicationList matchedMedications={matchedMedication}/>
                })}
            </div>

            <div className="medsAndSupplementSection rightSideChildCSS">
                <h3>Supplements</h3>
                <SupplementForm />
                {matchedSupplements.map(matchedSupplement => {
                    return <SupplementList matchedSupplements={matchedSupplement}/>
                })}
            </div>
        </section>
    )
};