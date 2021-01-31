import React from "react";
import { Link } from "react-router-dom";


export const NavBar = (props) => {
    return (
        <>
            <div className="navbarCss">
                <ul className="navbar">
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/">Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/appointmentbyspeciality">Appointments by Speciality</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/familyhistory">Family History</Link>
                    </li>
                </ul>
            </div>
        </>
    )
};
