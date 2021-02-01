import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./auth/login";
import { Register } from "./auth/register";

export const HomePage = () => {
    return (
        <>
            <Route exact path="/HomePage">
                <Login />
                <Register />
            </Route>
        </>
    )
};