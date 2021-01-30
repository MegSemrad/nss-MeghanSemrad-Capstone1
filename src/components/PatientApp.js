import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import "./PatientApp.css";

export const PatientApp = () => (
    <>
        <Route>
            <NavBar />
            <ApplicationViews />
        </Route>
    </>
);