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
import { SpecialistTypeProvider } from "./rightsideDashboardSection/specialistTypes/SpecialistTypeProvider";
import { SpecialistTypeList } from "./rightsideDashboardSection/specialistTypes/SpecialistTypeList"
import { SpecialistTypeForm } from "./rightsideDashboardSection/specialistTypes/SpecialistTypeForm";
import { SpecialistTypeDetail } from "./rightsideDashboardSection/specialistTypes/SpecialistTypeDetail";
import { FamilyHistoryProvider } from "./rightsideDashboardSection/familyHistories/FamilyHistoryProvider";
import { FamilyHistoryList } from "./rightsideDashboardSection/familyHistories/FamilyHistoryList";
import { FamilyHistoryForm } from "./rightsideDashboardSection/familyHistories/FamilyHistoryForm";
import { FamilyHistoryDetail } from "./rightsideDashboardSection/familyHistories/FamilyHistoryDetail";

import "./permanentDashboardSection/permanentDashboardSection.css"


export const ApplicationViews = () => {
     return (
          <>
               <BasePatientDetailsProvider>
                    <Route exact path="/">
                         <PermanentDashboardSection  />
                    </Route>
               </BasePatientDetailsProvider>
               
               



               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetailsForm">
                         <PermanentDashboardSection  />
                         <PatientDetailForm />
                    </Route>
               </BasePatientDetailsProvider>
               
               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetails/edit/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection  />
                         <PatientDetailForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetails/details/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection  />
                         <PatientDetailList />
                    </Route>
               </BasePatientDetailsProvider>





               <BasePatientDetailsProvider>
                    <Route exact path="/alertsForm">
                         <PermanentDashboardSection  />
                         <AlertForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/alerts/edit/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection  />
                         <AlertForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/alerts/details/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection  />
                         <AlertList />
                    </Route>
               </BasePatientDetailsProvider>
               
               
               
               
               
               <BasePatientDetailsProvider>
                    <Route exact path="/preferredPharmaciesForm">
                         <PermanentDashboardSection  />
                         <PreferredPharmacyForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/preferredPharmacies/edit/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection  />
                         <PreferredPharmacyForm />
                    </Route>
               </BasePatientDetailsProvider>

               <BasePatientDetailsProvider>
                    <Route exact path="/preferredPharmacies/details/:basePatientDetailsId(\d+)">
                         <PermanentDashboardSection  />
                         <PreferredPharmacyList />
                    </Route>
               </BasePatientDetailsProvider>
              




               <BasePatientDetailsProvider>
               <SpecialistTypeProvider>
                    <Route exact path="/SpecialistType">
                         <PermanentDashboardSection  />
                         <SpecialistTypeList />
                    </Route>
                    
                    <Route exact path="/SpecialistType/create">
                         <PermanentDashboardSection  />
                         <SpecialistTypeForm />
                    </Route>
                    
                    <Route exact path="/SpecialistType/edit/:specialistTypeId(\d+)">
                         <PermanentDashboardSection  />
                         <SpecialistTypeForm />
                    </Route>
                   
                    <Route exact path="/SpecialistType/detail/:specialistTypeId(\d+)">
                         <PermanentDashboardSection  />
                         <SpecialistTypeDetail />
                    </Route>
               </SpecialistTypeProvider>
               </BasePatientDetailsProvider>





               <BasePatientDetailsProvider>
               <FamilyHistoryProvider>
                    <Route exact path="/familyHistory">
                         <PermanentDashboardSection  />
                         <FamilyHistoryList />
                    </Route>
                    
                    <Route exact path="/familyHistory/create">
                         <PermanentDashboardSection  />
                         <FamilyHistoryForm />
                    </Route>
                    
                    <Route exact path="/familyHistory/edit/:familyHistoryId(\d+)">
                         <PermanentDashboardSection  />
                         <FamilyHistoryForm />
                    </Route>
                    
                    <Route exact path="/familyHistory/detail/:familyHistoryId(\d+)">
                         <PermanentDashboardSection  />
                         <FamilyHistoryDetail />
                    </Route>
               </FamilyHistoryProvider>
               </BasePatientDetailsProvider>
          </>
     )
};