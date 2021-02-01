import React, { useRef } from "react";
import { Link, useHistory} from "react-router-dom";
import "./login.css"


export const Login = props => {
    const username = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8090/users?username=${username.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("app_user", exists.id)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Health In One</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputUsername"> Username </label>
                        <input ref={username} type="text"
                            id="username"
                            className="form-control"
                            placeholder="Username"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}











    // import React, { useRef } from "react";
    // import { useHistory } from "react-router-dom";
    // import { Form, Button } from "react-bootstrap";
    // // will need css
    
    // export const LoginOrRegister = () => {
    
    //     return (
    //         <Form>
    //             <Form.Group controlId="formBasicEmail">
    //                 <Form.Label>Username</Form.Label>
    //                 <Form.Control type="text" placeholder="Username" />
    //                 {/* <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text> */}
    //             </Form.Group>
    
    //             <Form.Group controlId="formBasicEmail">
    //                 <Form.Label>Email</Form.Label>
    //                 <Form.Control type="email" placeholder="Email" />
    //             </Form.Group>
    //             <Button variant="primary" type="submit">
    //                 Register
    //             </Button>
    //         </Form>
    //     )
    // };
