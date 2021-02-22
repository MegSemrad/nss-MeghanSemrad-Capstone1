import React, { useContext, useEffect, useState } from "react";
import { supplementContext } from "./supplements/SupplementProvider";
import { SupplementList } from "./supplements/SupplementList";


export const MedicationAndSupplementSection = (props) => {
    const { getSupplements } = useContext(supplementContext);
    const userId = parseInt(localStorage.getItem("app_user"));
    const [matchedSupplements, setMatchedSupplements] = useState([]);


    useEffect(() => 
        getSupplements()
        .then((fetchedSupplements) => {
            const selectedUser = fetchedSupplements.find(s => s.userId === userId)
            setMatchedSupplements(selectedUser)
        })
        , []);


    return (
        <section>
            {/* <div>
                <h3>Medications</h3>
                <MedicationForm />
                <MedicationList />
            </div> */}

            <div>
                <h3>Supplements</h3>
                {/* <SupplementForm /> */}
                <SupplementList matchedSupplements={matchedSupplements}/>
            </div>
        </section>
    )
};