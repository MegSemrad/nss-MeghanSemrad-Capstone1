import React from "react";
import { Route } from "react-router-dom";
import { BasePatientDetailsProvider } from "./permanentDashboardSection/permanentDashboardProvider";
import { PermanentDashboardSection } from "./permanentDashboardSection/permanentDashboardSection";
import { PatientDetailForm } from "./permanentDashboardSection/patientDetails/PatientDetailForm";
import { PatientDetailCard } from "./permanentDashboardSection/patientDetails/PatientDetailCard"


export const ApplicationViews = () => {
     return (
          <>
               <BasePatientDetailsProvider>
                    <Route exact path="/landingpage">
                         <PermanentDashboardSection />
                    </Route>
               </BasePatientDetailsProvider>
               
               
               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetailsForm">
                         <PermanentDashboardSection />
                         <PatientDetailForm />
                    </Route>
               </BasePatientDetailsProvider>
               
               
               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetails/edit/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection />
                         <PatientDetailForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetails/details/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection />
                         <PatientDetailCard />
                    </Route>
               </BasePatientDetailsProvider>
              

               <BasePatientDetailsProvider>
                    <Route exact path="/AppointmentBySpeciality">
                         <PermanentDashboardSection />
                    </Route>
               </BasePatientDetailsProvider>


               <BasePatientDetailsProvider>
                    <Route exact path="/FamilyHistory">
                         <PermanentDashboardSection />
                    </Route>
               </BasePatientDetailsProvider>
          </>
     )
};