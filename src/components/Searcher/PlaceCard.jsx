import React from "react";

export default function PlaceCard({el,setEl}) {
    let style = {
        backgroundImage: `url('${el.photos ? el.photos[0] : ""}')`,
    }
    let none = {
        display: 'none'
    }
    return (
        <div className="res-card"  onClick={() => { setEl(el) }}>
            <div className="img" style={style} onClick={() => window.open(el.website)}>
            </div>
            <div className="details">
                <div className="nameType">
                    <div className="name">
                        {el.title}
                    </div>
                    <div className="type" style={el.type ? {} : none}>
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
                <div className="phone withIcon" style={el.formatted_phone_number ? {} : none}>
                    <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="phoneNum">
                        {el.formatted_phone_number}
                    </div>
                </div>
                {(el.rating && el.user_ratings_total) && <div className="rating">
                    <i className="fa-regular fa-star star" ></i>
                    <p> {el.rating} ({el.user_ratings_total})</p>
                </div>}
            </div>
        </div>
    )
}