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
// import { AppointmentBySpecialistList } from "./rightsideDashboardSection/appointmentsBySpecialist/AppointmentBySpecialistList";
// import { AppointmentBySpecialistProvider } from "./rightsideDashboardSection/appointmentsBySpecialist/AppointmentBySpecialistProvider";
// import { AppointmentBySpecialistForm} from "./rightsideDashboardSection/appointmentsBySpecialist/AppointmentBySpecialistForm";
// import { AppointmentBySpecialistDetail } from "./rightsideDashboardSection/appointmentsBySpecialist/AppointmentBySpecialistDetail";

import "./permanentDashboardSection/permanentDashboardSection.css"


export const ApplicationViews = () => {
     return (
          <>
               <BasePatientDetailsProvider>
                    <Route exact path="/home">
                         <PermanentDashboardSection className="leftSideParentCSS"  />
                    </Route>
               </BasePatientDetailsProvider>
               
               



               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetailsForm">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <PatientDetailForm />
                    </Route>
               </BasePatientDetailsProvider>
               
               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetails/edit/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <PatientDetailForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetails/details/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <PatientDetailList />
                    </Route>
               </BasePatientDetailsProvider>





               <BasePatientDetailsProvider>
                    <Route exact path="/alertsForm">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <AlertForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/alerts/edit/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <AlertForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/alerts/details/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <AlertList />
                    </Route>
               </BasePatientDetailsProvider>
               
               
               
               
               
               <BasePatientDetailsProvider>
                    <Route exact path="/preferredPharmaciesForm">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <PreferredPharmacyForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/preferredPharmacies/edit/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <PreferredPharmacyForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/preferredPharmacies/details/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <PreferredPharmacyList />
                    </Route>
               </BasePatientDetailsProvider>
              




               <BasePatientDetailsProvider>
               <AppointmentBySpecialistProvider>
                    <Route exact path="/AppointmentBySpecialist">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <AppointmentBySpecialistList />
                    </Route>
                    
                    <Route exact path="/AppointmentBySpecialist/create">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <AppointmentBySpecialistForm />
                    </Route>
                    
                    <Route exact path="/AppointmentBySpecialist/edit/:appointmentBySpecialistId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <AppointmentBySpecialistForm />
                    </Route>
                   
                    <Route exact path="/AppointmentBySpecialist/detail/:appointmentBySpecialistId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <AppointmentBySpecialistDetail />
                    </Route>
               </AppointmentBySpecialistProvider>
               </BasePatientDetailsProvider>





               <BasePatientDetailsProvider>
                    <Route exact path="/FamilyHistory">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                    </Route>
               </BasePatientDetailsProvider>
          </>
     )
};