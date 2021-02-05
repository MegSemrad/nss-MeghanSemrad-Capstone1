import React from "react";
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { LoginOrRegister } from "./auth/LoginOrRegister";
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
                    return <Redirect to="/loginOrRegister" />;
                }
            }}
        />

        <Route path="/loginOrRegister">
            <LoginOrRegister />
        </Route>
    </>
);