import React from "react";
import { Route } from "react-router-dom";
import { HeaderLogo} from "./HeaderLogo";

import { BasePatientDetailsProvider } from "./permanentDashboardSection/permanentDashboardProvider";
import { PermanentDashboardSection } from "./permanentDashboardSection/permanentDashboardSection";
import { PatientDetailForm } from "./permanentDashboardSection/patientDetails/PatientDetailForm";
import { PatientDetailList } from "./permanentDashboardSection/patientDetails/PatientDetailList";
import { AlertForm } from "./permanentDashboardSection/alerts/AlertForm";
import { AlertList } from "./permanentDashboardSection/alerts/AlertList";
import { PreferredPharmacyForm } from "./permanentDashboardSection/preferredPharmacies/PreferredPharmacyForm";
import { PreferredPharmacyList } from "./permanentDashboardSection/preferredPharmacies/PreferredPharmacyList";

import { ProviderDataProvider } from "./rightsideDashboardSection/providers/ProviderDataProvider";
import { ProviderList } from "./rightsideDashboardSection/providers/ProviderList";
import { ProviderForm } from "./rightsideDashboardSection/providers/ProviderForm";
import { ProviderDetail } from "./rightsideDashboardSection/providers/ProviderDetail";
import { RelativeProvider } from "./rightsideDashboardSection/relatives/RelativeProvider";
import { RelativeList } from "./rightsideDashboardSection/relatives/RelativeList";
import { RelativeForm } from "./rightsideDashboardSection/relatives/RelativeForm";
import { QuestionsForm } from "./rightsideDashboardSection/providers/QuestionsForm";
import { AppointmentNoteForm } from "./rightsideDashboardSection/providers/NotesForm";



export const ApplicationViews = () => {
     return (
          <>
               <BasePatientDetailsProvider>
                    <Route exact path="/home">
                         <PermanentDashboardSection  />
                         <HeaderLogo />
                    </Route>
                    <Route exact path="/">
                         <PermanentDashboardSection  />
                         <HeaderLogo />
                    </Route>
               </BasePatientDetailsProvider>
               
               



               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetailsForm">
                         <PermanentDashboardSection  />
                         <PatientDetailForm />
                    </Route>
               </BasePatientDetailsProvider>
               
               <BasePatientDetailsProvider>
                    <Route exact path="/patientDetails/edit">
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
                    <Route exact path="/alerts/edit">
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
                    <Route exact path="/preferredPharmacies/edit">
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
               <ProviderDataProvider>
                    <Route exact path="/Providers">
                         <PermanentDashboardSection  />
                         <ProviderList />
                    </Route>
                    
                    <Route exact path="/Provider/create">
                         <PermanentDashboardSection  />
                         <ProviderForm />
                    </Route>
                    
                    <Route exact path="/AppointmentNote/create/:providerId(\d+)">
                         <PermanentDashboardSection  />
                         <AppointmentNoteForm />
                    </Route>
                    
                    <Route exact path="/Questions/add/:providerId(\d+)">
                         <PermanentDashboardSection  />
                         <QuestionsForm />
                    </Route>
                   
                    <Route exact path="/Provider/detail/:providerId(\d+)">
                         <PermanentDashboardSection  />
                         <ProviderDetail />
                    </Route>
               </ProviderDataProvider>
               </BasePatientDetailsProvider>





               <BasePatientDetailsProvider>
               <RelativeProvider>
                    <Route exact path="/FamilyHistory">
                         <PermanentDashboardSection  />
                         <RelativeList />
                    </Route>
                    
                    <Route exact path="/relative/create">
                         <PermanentDashboardSection  />
                         <RelativeForm />
                    </Route>
                    
                    <Route exact path="/relative/edit/:matchedRelativeId(\d+)">
                         <PermanentDashboardSection  />
                         <RelativeForm />
                    </Route>
               </RelativeProvider>
               </BasePatientDetailsProvider>
          </>
     )
};