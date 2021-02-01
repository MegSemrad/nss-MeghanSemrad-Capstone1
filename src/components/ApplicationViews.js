import React from "react";
import { Route } from "react-router-dom";
import { BasePatientDetailsProvider } from "./permanentDashboardSection/permanentDashboardProvider";
import { PermanentDashboardSection } from "./permanentDashboardSection/permanentDashboardSection";


export const ApplicationViews = () => {
     return (
          <>
               <BasePatientDetailsProvider>
                    <Route exact path="/">
                         <PermanentDashboardSection />
                    </Route>
               </BasePatientDetailsProvider>


               <BasePatientDetailsProvider>
                    <Route exact path="/appointmentbyspeciality">
                         <PermanentDashboardSection />
                    </Route>
               </BasePatientDetailsProvider>


               <BasePatientDetailsProvider>
                    <Route exact path="/familyhistory">
                         <PermanentDashboardSection />
                    </Route>
               </BasePatientDetailsProvider>
          </>
     )
};


{/* <index.js>
     <AppName.js>
          <NavBar>
          <ApplicationViews.js>
               <Route exact path="/">
                    <PermanentDashboardSection>
                         <PatientInfoList>
                         <AlertList>
                         <PharmacyList>
                    <where changeable side would be invoked>
               </Route>
               <Route exact path="/appointmentBySpecialist">
                    <PermanentDashboardSection>
                         <PatientInfoList>
                         <AlertList>
                         <PharmacyList>
                    <where changeable side would be invoked>
               </Route>
               <Route exact path="/familyHistory">
                    <PermanentDashboardSection>
                         <PatientInfoList>
                         <AlertList>
                         <PharmacyList>
                    <where changeable side would be invoked>
               </Route> */}