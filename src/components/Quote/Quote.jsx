import React from "react";

import $ from 'jquery';

import quote from '../../data/quote.json';

import './Quote.css';

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
        $(".quoteSec .quoteText-wrapper .quoteText").text(quote[1].quote);
        $(".quoteSec .quoteAuthor-wrapper .quoteAuthor").text("- " + quote[1].author);
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