import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './Searcher.css';

export default function Searcher() {
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
                    <div className="res-card">
                        Something Something
                    </div>
                    <div className="res-card">
                        Something Something
                    </div>
                    <div className="res-card">
                        Something Something
                    </div>
                    <div className="res-card">
                        Something Something
                    </div>
                    <div className="res-card">
                        Something Something
                    </div>
                    <div className="res-card">
                        Something Something
                    </div>
                    <div className="res-card">
                        Something Something
                    </div>
                </div>
            </div>
        </div>
    )
}