import React, { useEffect } from "react";
import $ from 'jquery';

import './Leaderboard.css';

import BoardItem from "./BoardItem";

import boardItems from '../../data/board.json';

function cmp(a,b){
    return -(Number.parseFloat(a.view.N) - Number.parseFloat(b.view.N));
}

function callRanking(){
    const URL="https://riqoukioq0.execute-api.eu-central-1.amazonaws.com/prod/writelocationresult"
    return $.ajax({
        method: 'GET',
        url: URL,
        contentType: 'application/json',
    });
}

export default function LeaderBoard(){
    const [items,setItems]=React.useState([]);

    React,useEffect(()=>{
        callRanking().then(data=>{
            const temp=data.Items.sort(cmp);
            setItems(temp);
        }).catch(err =>{
            console.log(err);
        })
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