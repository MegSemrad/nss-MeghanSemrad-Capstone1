import React from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./PatientApp.css";

export const PatientApp = () => (
    <>
        <Route>
            <NavBar />
            <ApplicationViews />
        </Route>
    </>
);

