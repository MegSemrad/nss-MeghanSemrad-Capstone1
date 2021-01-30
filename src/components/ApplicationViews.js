import React from "react";
import { Route } from "react-router-dom";
import { PermanentDashboardSection } from "./permanentDashboardSection/permanentDashboardSection";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <PermanentDashboardSection />
            </Route>
        </>
    )
}


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