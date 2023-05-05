import React from "react";

import './BoardItem.css'

export default function BoardItem({ el, index }) {
    return (
        <div className="board-item">
            <div className="board-item-index">
                <div className="board-location-index">
                    {index+1}
                </div>
            </div>
            <div className="board-item-info">
                <div className="board-item-name-wrapper">
                    <div className="board-item-name">
                        {el.title.S}
                    </div>
                    <div className="board-item-country">
                        {el.country.S}
                    </div>
                </div>
                <div className="board-item-address-wrapper">
                    <div className="board-item-address">
                        {el.formatted_address.S}
                    </div>
                    <div className="board-item-type">
                        {el.type.S}
                    </div>
                </div>
            </div>
            <div className="board-item-rating">
                <div className="board-location-rating">
                    {el.rating.S} 
                    <i className="fa-regular fa-star star" style={{color: "#000000"}}></i>
                </div>
                <div className="board-location-view">
                    Views: {el.view.N}
                </div>
            </div>
        </div>
    )
}