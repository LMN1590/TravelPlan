import React from "react";

import Button from 'react-bootstrap/Button';

import './Menu.css'

export default function Menu() {
    return (
        <div className="menu">
            <Button className="items">Google Maps</Button>
            <Button className="items">Trip Advisor</Button>
            <Button className="items">Booking.com</Button>
            <Button className="items">Agoda</Button>
            <Button className="items">Air BnB</Button>
            <Button className="items">Google Flights</Button>
        </div>
    )
}