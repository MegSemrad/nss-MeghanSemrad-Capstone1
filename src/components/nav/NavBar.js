import React from "react";
import { Nav } from "react-bootstrap";
import "./NavBar.css";


export const NavBar = (props) => {
    return (
        <>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Appointments by Speciality</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Family History</Nav.Link>
                </Nav.Item>
            </Nav>
        </>

    )
};