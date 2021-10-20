import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import useAuth from './../../hooks/useAuth';


const Login = () => {
    const {
        handleGithubLogin,
        handleUserLogin,
        handleUserRegister
    } = useFirebase();
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        handleUserRegister(email, password)
    }
    const handleLogin = () => {
        handleUserLogin(email, password);
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInUsingGoogle, users } = useAuth()
    return (
        <div className="container my-5">
            <h1 className="text-primary">Please Login</h1>
            <Form onSubmit={handleRegistration} className="mx-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>
                <Button onSubmit={handleRegistration} className="my-5 mx-2" variant="primary" type="submit">
                    Regester
                </Button>
                <button className="btn btn-success" >Login</button>
            </Form>
            <hr />
            <button onClick={signInUsingGoogle} className="btn btn-success m-3" >Google Sign In</button>
            <button onClick={handleGithubLogin} className="btn btn-secondary m-3" >Github Sign In</button>
        </div>
    );
};

export default Login;