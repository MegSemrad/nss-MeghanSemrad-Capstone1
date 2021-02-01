import React from "react";
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { HomePage } from "./HomePage";
import "./HealthInOne.css";


export const HealthInOne = (props) => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("app_user")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/HomePage" />;
                }
            }}
        />

        <Route path="/HomePage">
            <HomePage />
        </Route>
    </>
);