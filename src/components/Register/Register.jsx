import React from "react";

import Button from 'react-bootstrap/Button';

import './Register.css';

export default function Register() {
    return (
        <div className="regBar">
            <div className="formDiv">
                <h4>
                    Register for a new Account
                </h4>
                <div className="formLayout">
                    <p className="descText">
                        Please provide username, email and password to continue
                    </p>
                    <div className="input usr">
                        <p>Username</p>
                        <input type="text" name="usr" id="usr" />
                    </div>
                    <div className="input email">
                        <p>Email</p>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input pass">
                        <p>Password</p>
                        <input type="password" name="pass" id="pass" />
                    </div>
                    <div className="input rePass">
                        <p>Confirm your Password</p>
                        <input type="password" name="rePass" id="rePass" />
                    </div>
                    <Button variant="primary" className="regBtn">Register for a new Account</Button>
                </div>

                <p>Already got an account? <a href="/signin">Sign in here!</a></p>
            </div>
        </div>
    )
}