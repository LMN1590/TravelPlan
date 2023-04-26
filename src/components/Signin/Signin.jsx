import React from "react";

import Button from 'react-bootstrap/Button';

import './Signin.css';

export default function Signin() {
    return (
        <div className="sidebar">
            <div className="formDiv">
                <h4>
                    Sign-In
                </h4>
                <div className="formLayout">
                    <p className="descText">
                        Please provide username and password to continue
                    </p>
                    <div className="input usr">
                        <p>Username</p>
                        <input type="email" name="usr" id="usr" />
                    </div>
                    <div className="input pass">
                        <p>Password</p>
                        <input type="password" name="pass" id="pass" />
                    </div>
                    <Button variant="primary" className="signinBtn">Sign-In</Button>
                </div>

                <p>Don't have an account yet? <a href="/register">Sign up here!</a></p>
            </div>
        </div>
    )
}