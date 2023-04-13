import React from "react";

import './Picture.css'

export default function Picture({linkin}){
    const style={
        backgroundImage: `url('${linkin}')`,
        backgroundColor: 'black'
    };
    console.log(style);
    const pic=(
        <div className="picture" style={style}>
            The thousand step journy start from somewhere or something i dunno!
        </div>
    )

    return pic;
}