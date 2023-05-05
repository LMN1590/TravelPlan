import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import PlaceCard from "./PlaceCard";
import PostCard from "./PostCard";

import './Searcher.css';


import { queryExc } from "../../API/test/query";

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
        return <PlaceCard el={el} setEl={setEl} key={el.place_id}/>
    })

    const postCard=res.post.map(el => {
        return <PostCard el={el} key={el.position}/>
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
                    {postCard}
                </div>
            </div>
        </div>
    )
}