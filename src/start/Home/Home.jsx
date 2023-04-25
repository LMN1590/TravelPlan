import React from "react";

import $ from 'jquery'

import Menu from "../../components/Menu/Menu";
import Picture from "../../components/Picture/Picture";
import Ranking from "../../components/Ranking/Ranking";
import Footer from "../../components/Footer/Footer";



export default function Home() {
    const [link,setLink]=React.useState('');
    function setLinkWrapper(){
        $.ajax({
            method: 'GET',
            url: 'https://nc9d2gsl4a.execute-api.eu-central-1.amazonaws.com/prod/getpic',
            success: function (data, status) {
                setLink(data.url.S);
            },
        })
    }
    React.useEffect(()=>{
        setLinkWrapper();
    },[])

    const countryRank='countries';
    const actRank='activities';
    return (
        <main className="content">
            <Menu />
            <Picture linkin={link}/>
            <Ranking src={countryRank}/>
            <Ranking src={actRank}/>
            <Footer/>
        </main>
    );
}