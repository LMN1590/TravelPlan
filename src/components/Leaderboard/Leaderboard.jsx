import React, { useEffect } from "react";

import './Leaderboard.css';

import BoardItem from "./BoardItem";

import boardItems from '../../data/board.json';

export default function LeaderBoard(){
    const [items,setItems]=React.useState([]);

    React,useEffect(()=>{
        setItems(boardItems)
    }
    ,[]);

    const board_bar=items.map((el,index)=>{
        return <BoardItem el={el} key={el.place_id.S} index={index}/>
    })


    return (
        <div className="leaderboard">
            <div className="board-title">
                <i className="fa-solid fa-star star" ></i>
                Most Viewed Location Results Ranking
                <i className="fa-solid fa-star star" ></i>
            </div>
            <div className="board-wrapper">
                {board_bar}
            </div>
        </div>
    )
}