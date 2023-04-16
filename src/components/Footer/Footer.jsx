import React from "react";

import './Footer.css';

export default function Footer(){
    return (
        <footer>
            <div className="app">
                <h3>The Travel Plan</h3>
                <img src="/logo.png" alt="Logo" className="logo"/>
                <p>The Travel Plan is a one-stop-shop for all your travel needs. With a user-friendly interface and a wide range of destinations, activities, and accommodations to choose from, The Travel Plan helps you create customized travel itineraries and make the most of your next adventure.</p>
            </div>
            <div className="me">
                <div className="wrapper">
                    <p>This website was made by</p>
                    <h4>Nghia Le</h4>
                </div>
            </div>
        </footer>
    )
}