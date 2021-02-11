import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { basePatientDetailsContext } from "../permanentDashboardSection/permanentDashboardProvider";
import "./login.css";

export const Register = (props) => {
    const username = useRef()
    const email = useRef()
    const conflictDialog = useRef()
    const history = useHistory()
    const { addBasePatientDetails } = useContext(basePatientDetailsContext)

    const existingUserCheck = () => {
        return fetch(`http://localhost:8090/users?username=${username.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8090/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            username: username.current.value
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("app_user", createdUser.id)
                                addBasePatientDetails({
                                    userId: createdUser.id,
                                    name: "",
                                    birthday: "",
                                    conditions: "",
                                    allergies: "",
                                    other: "",
                                    emergencyContactName: "",
                                    emergencyContactRelation: "",
                                    emergencyContactPhoneNumber: "",
                                    preferredPharmacyName: "",
                                    preferredPharmacyAddress: "",
                                    preferredPharmacyPhoneNumber: ""
                                })
                                .then(() => {
                                    history.push("/home")
                                })
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                <fieldset>
                    <label htmlFor="username"> Username </label>
                    <input ref={username}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
};