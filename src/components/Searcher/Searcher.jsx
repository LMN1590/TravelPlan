import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import places from '../../data/place.json'

import './Searcher.css';

import { queryExc } from "../../API/query";

export default function Searcher({ele,setEl}) {
    const [res,setRes]=React.useState({
        loc:[],
        post:[]
    });
    const [query,setQuery]=React.useState("");

    function search(q){
        queryExc(q,setRes);
    }

    const placesCard = res.loc.map(el => {
        let style = {
            backgroundImage: `url('${el.photos?el.photos[0]:""}')`,
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
                            {el.title}
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
                            {el.formatted_address ? el.formatted_address : el.country}
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
                        value={query}
                        onChange={event=>setQuery(event.target.value)}
                    />
                    <Button variant="secondary" className="searchBtn" onClick={()=>search(query)}>
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