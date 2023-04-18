import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Signin from "../../components/Signin/Signin"
import Quote from "../../components/Quote/Quote";

import './App.css';

export default function App(){
    return(
        <main className="content">
            <NavBar inSignin={true}/>
            <div className="main-body">
                <Signin/>
                <Quote/>
            </div>
        </main>
    )
}