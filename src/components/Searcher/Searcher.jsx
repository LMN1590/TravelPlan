import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import places from '../../data/place.json'

import './Searcher.css';

export default function Searcher({ele,setEl}) {
    const placesCard = places.map(el => {
        let style = {
            backgroundImage: `url('${el.photos}')`,
        }
        let none={
            display: 'none'
        }
        return (
            <div className="res-card" key={el.place_id} onClick={()=>{setEl(el)}}>
                <div className="img" style={style} onClick={() => window.open(el.website)}>
                </div>
                <div className="details">
                    <div className="nameType">
                        <div className="name">
                            {el.name}
                        </div>
                        <div className="type" style={el.type?{}:none}>
                            {el.type}
                        </div>
                    </div>
                    <div className="addrCode withIcon">
                        <div className="icon">
                            <i className="fa-solid fa-map"></i>
                        </div>
                        <div className="addr">
                            {el.formatted_address ? el.formatted_address : el.plus_code}
                        </div>
                    </div>
                    <div className="phone withIcon" style={el.formatted_phone_number?{}:none}>
                        <div className="icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="phoneNum">
                            {el.formatted_phone_number}
                        </div>
                    </div>
                    <div className="rating">
                        <i className="fa-regular fa-star star" ></i> 
                        <p> {el.rating} ({el.user_ratings_total})</p>
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