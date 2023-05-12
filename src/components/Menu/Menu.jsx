import React from "react";

import Button from 'react-bootstrap/Button';

import './Menu.css'

export default function Menu() {
    return (
        <div className="menu">
            <Button className="items" href="https://www.google.com/maps/">Google Maps</Button>
            <Button className="items" href="https://www.tripadvisor.com/">Trip Advisor</Button>
            <Button className="items" href="https://www.booking.com/">Booking.com</Button>
            <Button className="items" href="https://www.agoda.com/">Agoda</Button>
            <Button className="items" href="https://www.airbnb.com/">Air BnB</Button>
            <Button className="items" href="https://www.google.com/travel/flights">Google Flights</Button>
        </div>
    )
}