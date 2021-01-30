import React from "react";
import { Nav } from "react-bootstrap";


export const NavBar = (props) => {
    return (
        <>
            <Nav fill variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/appointmentbyspeciality" eventKey="link-1">Appointments by Speciality</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/familyhistory" eventKey="link-2">Family History</Nav.Link>
                </Nav.Item>
            </Nav>
        </>

    )
};