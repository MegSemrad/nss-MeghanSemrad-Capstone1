import React from "react";
import { Route } from "react-router-dom";
import { BasePatientDetailsProvider } from "./permanentDashboardSection/permanentDashboardProvider";
import { PermanentDashboardSection } from "./permanentDashboardSection/permanentDashboardSection";
import { PatientDetailForm } from "./permanentDashboardSection/patientDetails/PatientDetailForm";
import { PatientDetailList } from "./permanentDashboardSection/patientDetails/PatientDetailList";
import { AlertForm } from "./permanentDashboardSection/alerts/AlertForm";
import { AlertList } from "./permanentDashboardSection/alerts/AlertList";
import { PreferredPharmacyForm } from "./permanentDashboardSection/preferredPharmacies/PreferredPharmacyForm";
import { PreferredPharmacyList } from "./permanentDashboardSection/preferredPharmacies/PreferredPharmacyList";



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
                         <PatientDetailList />
                    </Route>
               </BasePatientDetailsProvider>





               <BasePatientDetailsProvider>
                    <Route exact path="/alertsForm">
                         <PermanentDashboardSection />
                         <AlertForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/alerts/edit/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection />
                         <AlertForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/alerts/details/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection />
                         <AlertList />
                    </Route>
               </BasePatientDetailsProvider>
               
               
               
               
               
               <BasePatientDetailsProvider>
                    <Route exact path="/preferredPharmaciesForm">
                         <PermanentDashboardSection />
                         <PreferredPharmacyForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/preferredPharmacies/edit/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection />
                         <PreferredPharmacyForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/preferredPharmacies/details/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection />
                         <PreferredPharmacyList />
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