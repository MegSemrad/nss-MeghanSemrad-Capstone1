import React from "react";
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./NavBar";
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/login";
import { Register } from "./auth/register";
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

<Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);