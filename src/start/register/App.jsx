import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Register from "../../components/Register/Register";
import Quote from "../../components/Quote/Quote";

import './App.css';

export default function App(){
    return(
        <main className="content">
            <NavBar inRegister={true}/>
            <div className="main-body">
                <Register/>
                <Quote/>
            </div>
        </main>
    )
}