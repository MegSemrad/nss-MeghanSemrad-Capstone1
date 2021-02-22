import React from "react";
import { Route } from "react-router-dom";
import { Login } from "./login";
import { Register } from "./register";


export const LoginOrRegister = () => {
    return (
        <>
            <Route exact path="/loginOrRegister">
                <Login />
                <Register />
            </Route>
        </>
    )
};