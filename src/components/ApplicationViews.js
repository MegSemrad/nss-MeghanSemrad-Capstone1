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
import { SpecialistTypeList } from "./rightsideDashboardSection/specialistTypes/SpecialistTypeList"
import { SpecialistTypeProvider } from "./rightsideDashboardSection/specialistTypes/SpecialistTypeProvider";
import { SpecialistTypeForm } from "./rightsideDashboardSection/specialistTypes/SpecialistTypeForm";
import { SpecialistTypeDetail } from "./rightsideDashboardSection/specialistTypes/SpecialistTypeDetail";

import "./permanentDashboardSection/permanentDashboardSection.css"


export const ApplicationViews = () => {
     return (
          <>
               <BasePatientDetailsProvider>
                    <Route path="/home">
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
               <SpecialistTypeProvider>
                    <Route exact path="/SpecialistType">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <SpecialistTypeList />
                    </Route>
                    
                    <Route exact path="/SpecialistType/create">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <SpecialistTypeForm />
                    </Route>
                    
                    <Route exact path="/SpecialistType/edit/:specialistTypeId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <SpecialistTypeForm />
                    </Route>
                   
                    <Route exact path="/SpecialistType/detail/:specialistTypeId(\d+)">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                         <SpecialistTypeDetail />
                    </Route>
               </SpecialistTypeProvider>
               </BasePatientDetailsProvider>





               <BasePatientDetailsProvider>
                    <Route exact path="/FamilyHistory">
                         <PermanentDashboardSection className="leftSideParentCSS" />
                    </Route>
               </BasePatientDetailsProvider>
          </>
     )
};