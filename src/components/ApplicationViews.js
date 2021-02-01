import React from "react";
import { Route } from "react-router-dom";
import { PatientDetailProvider } from "./permanentDashboardSection/patientDetails/PatientDetailProvider";
// import { PermanentDashboardSection } from "./permanentDashboardSection/permanentDashboardSection"
import { PatientDetailList } from "./permanentDashboardSection/patientDetails/PatientDetailList";

export const ApplicationViews = () => {
     return (
          <>
               <PatientDetailProvider>
                    <Route exact path="/">
                         <PatientDetailList />
                    </Route>
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