import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';
import { useState } from 'react';

const handlePasswordChange = e => {
    console.log(e.target.value)
}
const handleEmailChange = e => {
    console.log(e.target.value)
}

const handleRegistration = e => {
    console.log('kaj hoise bhai')
    e.preventDefault();
}

const Login = () => {
    const { signInUsingGoogle } = useAuth()
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
                <Button className="my-5" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <hr />
            <button onClick={signInUsingGoogle} className="btn btn-warning mb-5" >Google Sign In</button>
        </div>
    );
};

export default Login;