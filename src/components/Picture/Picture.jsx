import React from "react";

import Button from 'react-bootstrap/Button';

import './Picture.css'

export default function Picture({linkin}){
    const style={
        backgroundImage: `url('${linkin}')`,
        backgroundColor: 'black'
    };
    const pic=(
        <div className="picture" style={style}>
            <div className="text-container">
                <div className="left-text">
                    <i>"A journey of a thousand miles begins with a single step"</i>
                </div>
                <div className="right-btn">
                    <h2>Join now</h2>
                    <Button href="/search" variant="primary" className="sign-in btn">
                        Search
                    </Button>
                </div>
            </div>
            
        </div>
    )

    return pic;
}