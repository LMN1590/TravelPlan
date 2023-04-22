import React from "react";

import Signin from "../../components/Signin/Signin"
import Quote from "../../components/Quote/Quote";

import './Signin_Page.css';

export default function Signin_Page(){
    return(
        <main className="content">
            <div className="main-body">
                <Signin/>
                <Quote/>
            </div>
        </main>
    )
}