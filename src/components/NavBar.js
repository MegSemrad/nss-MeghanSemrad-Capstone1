import React from "react";
import { useHistory } from "react-router-dom"
import { Nav, Button } from "react-bootstrap";


export const NavBar = (props) => {
    const history = useHistory()
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/AppointmentBySpeciality" eventKey="link-1">Appointments by Speciality</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/FamilyHistory" eventKey="link-2">Family History</Nav.Link>
                </Nav.Item>
                <Button id="logout_button" onClick={(e) => {
                        if(e.target.id === "logout_button"){
                            localStorage.removeItem("app_user");
                            return history.push("/")
                        } else {
                            return false;
                        }
                    }
                }>Logout
                </Button>
            </Nav>
        </>
    )
};