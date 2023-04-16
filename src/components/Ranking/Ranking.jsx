import React from "react";

import './Ranking.css'

import countryData from '../../data/country.json'
import actData from '../../data/act.json'

export default function Ranking({ src }) {
    const [data,setData]=React.useState([]);
    let cards=[];

    React.useEffect(()=>{
        let im;
        if(src==='countries'){
            im=countryData;
        }
        else if(src==='activities'){
            im=actData;
        }
        setData(im);
    },[])

    if (data != []) {
        cards = data.map(el => {
            const style={
                backgroundImage: `url('${el.link}')`,
            };
            return (
                <li className="rank" style={style} key={el.id}>
                    <div className="cover">
                        <div className="rank-header">
                            <h4>{el.header}</h4>
                        </div>
                    </div>
                </li>
            )
        })
    }
    return (
        <div className="ranking">
            <div className="title-ranking">
                <h3>Top {src.charAt(0).toUpperCase() + src.slice(1)}</h3>
            </div>
            <div className="list-ranking">
                <ul className="ranking-cards">
                    {cards}
                </ul>
            </div>
        </div>
    )
}