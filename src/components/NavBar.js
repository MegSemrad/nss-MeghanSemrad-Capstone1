import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./NavBar.css";


export const NavBar = (props) => {
    const history = useHistory()


    return (
        <>
            <Navbar id="navbar">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/Providers">Providers</Nav.Link>
                    <Nav.Link href="/FamilyHistory">Family Medical History</Nav.Link>

                </Nav>
                    <Button id="app_button" onClick={(e) => {
                        if (e.target.id === "logout_button") {
                            localStorage.removeItem("app_user");
                            return history.push("/loginOrRegister")
                        } else {
                            return false;
                        }
                    }
                    }>Logout
                     </Button>
            </Navbar>
        </>
    )
};