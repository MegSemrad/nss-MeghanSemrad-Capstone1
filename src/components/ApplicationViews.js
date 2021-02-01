import React from "react";
import { Route } from "react-router-dom";
import { PatientDetailProvider } from "./permanentDashboardSection/patientDetails/PatientDetailProvider";
import { AlertProvider } from "./permanentDashboardSection/alerts/AlertProvider";
import { PermanentDashboardSection } from "./permanentDashboardSection/permanentDashboardSection";


export const ApplicationViews = () => {
     return (
          <>
               <PatientDetailProvider>
               <AlertProvider>
                    <Route exact path="/">
                         <PermanentDashboardSection />
                    </Route>
               </AlertProvider>
               </PatientDetailProvider>
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