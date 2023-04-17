import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import places from '../../data/place.json'

import './Searcher.css';

export default function Searcher() {
    const placesCard = places.map(el => {
        let style = {
            backgroundImage: `url('${el.photos}')`,
        }
        return (
            <div className="res-card" key={el.place_id}>
                <div className="img" style={style} onClick={() => window.open(el.website)}>
                </div>
                <div className="details">
                    <div className="nameType">
                        <div className="name">
                            {el.name}
                        </div>
                        <div className="type">
                            {el.type}
                        </div>
                    </div>
                    <div className="addrCode">
                        {el.formatted_address ? el.formatted_address : el.plus_code}
                    </div>
                    <div className="phone">
                        {el.formatted_phone_number}
                    </div>
                    <div className="rating">
                        {el.rating} {el.user_ratings_total}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="searcher">
            <div className="searchbar-wrapper">
                <InputGroup className="mb-3 searchbar">
                    <Form.Control
                        placeholder="Search locations"
                        aria-label="Location"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="secondary" className="searchBtn">
                        Search
                    </Button>
                </InputGroup>
            </div>
            <div className="res-cards-wrapper">
                <div className="res-cards">
                    {placesCard}
                </div>
            </div>
        </div>
    )
}