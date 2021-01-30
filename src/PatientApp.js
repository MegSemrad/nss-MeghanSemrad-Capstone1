import React from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./components/ApplicationViews";
import "./PatientApp.css";

export const PatientApp = () => (
    <>
        <Route>
            <NavBar />
            <ApplicationViews />
        </Route>
    </>
);

