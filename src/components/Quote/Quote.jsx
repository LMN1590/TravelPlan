import React from "react";

import $ from 'jquery';

import './Quote.css';

function getQuote() {
    let category = "inspirational";
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'nftx9aLPsDhbbOK4p5w5cw==DnAcw5zo6Ld31x2C' },
        contentType: 'application/json',
        success: function (quote, status) {
            console.log(quote);
            $(".quoteSec .quoteText-wrapper .quoteText").text(quote[0].quote);
            $(".quoteSec .quoteAuthor-wrapper .quoteAuthor").text("- " + quote[0].author);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

export default function Quote(){
    const [quoteLink,setQuoteLink]=React.useState("");

    function setBackgroundImg(){
        $.ajax({
            method: 'GET',
            url: 'https://nc9d2gsl4a.execute-api.eu-central-1.amazonaws.com/prod/getpic',
            success: function (data, status) {
                setQuoteLink(data.url.S);
            },
        })
    }


    React.useEffect(()=>{
        getQuote();
        setBackgroundImg();
    },[])

    const style={
        backgroundImage: `url('${quoteLink}')`,
        backgroundColor: 'black'
    };

    return(
        <div className="quoteBar" style={style}>
            <div className="quoteSec">
                <div className="quoteText-wrapper">
                    <i>
                        "<span className="quoteText">

                        </span>"
                    </i>
                </div>

                <div className="quoteAuthor-wrapper">
                    <p className="quoteAuthor">

                    </p>
                </div>

            </div>
        </div>
    )
}