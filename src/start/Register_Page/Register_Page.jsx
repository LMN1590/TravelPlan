import React from "react";

import Register from "../../components/Register/Register";
import Quote from "../../components/Quote/Quote";

import './Register_Page.css';

export default function Register_Page({setNavState}){
    /*setNavState({
        inSignin: false,
        inRegister: true
    });*/
    return(
        <main className="content">
            <div className="main-body">
                <Register/>
                <Quote/>
            </div>
        </main>
    )
}