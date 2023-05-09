import React from "react";

import $ from 'jquery';

import quote from '../../data/quote.json';

import './Result.css';

function getQuote() {
    let category = "inspirational";
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'nftx9aLPsDhbbOK4p5w5cw==DnAcw5zo6Ld31x2C' },
        contentType: 'application/json',
        success: function (quote, status) {
            $(".quoteText-wrapper .quoteText").text(quote[0].quote);
            $(".quote .quoteAuthor").text("- " + quote[0].author)
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

export default function Result({ ele, setEl }) {
    let backPhoto="";
    try {
        backPhoto=ele.photos[0];
    } catch (error) {
        backPhoto="";
    }
    let style = {
        backgroundImage: `url('${backPhoto}')`,
    }


    React.useEffect(() => {
        if (!ele) {
            getQuote();
        }
    }, []);


    const [review, setReview] = React.useState([]);

    React.useEffect(() => {
        try {
            setReview(ele.reviews);
        } catch (error) {
            setReview([]);
        }
    }, [ele])

    const reviewDiv = review && review.map(el => {
        return (
        <div className="loc-single-review" key={el.username}>
            <div className="loc-review-author">
                <div className="loc-review-usr">
                    <span className="loc-header">From</span>: {el.username}
                </div>
                <div className="loc-review-usrLocation">
                    {el.location}
                </div>
            </div>
            <div className="loc-review-info">
                <div className="loc-review-title">
                    {el.title}
                </div>
                <div className="loc-review-type">
                    {el.tripType}
                </div>
            </div>
            <div className="loc-review-content">
                <p>{el.text}</p>
            </div>
            <div className="loc-review-score">
                <span className="loc-header">Score</span>: {el.rating} 
                <i className="fa-solid fa-star star" ></i>
            </div>
        </div>)
    })
    return (
        <div className={`result ${ele ? "result-el" : "result-quote"}`}>
            <div className="quote" style={{ display: ele ? 'none' : 'block' }}>
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
            {ele && <div className="specs" style={{ display: !ele ? 'none' : 'block' }}>
                {<div className="header-img" style={style}>

                </div>}
                <div className="loc-details">
                    <div className="loc-name">
                        <p>{ele.title}</p>
                    </div>
                    <div className="loc-type">
                        <p><span className="loc-header">TYPE OF ESTABLISHMENT</span>: {ele.type}</p>
                    </div>
                    <div className="loc-addr">
                        <p><span className="loc-header">ADDRESS</span>: {ele.formatted_address}</p>
                    </div>
                    <div className="loc-code">
                        <p><span className="loc-header">COUNTRY</span>: {ele.country}</p>
                    </div>
                    <div className="loc-phone">
                        <p><span className="loc-header">PHONE NUMBER</span>: {ele.formatted_phone_number}</p>
                    </div>
                    <div className="loc-web">
                        <p><span className="loc-header">WEBSITE</span>: {ele.website}</p>
                    </div>
                    {ele.desc && <div className="loc-desc">
                        <p><span className="loc-header">DESCRIPTION</span>: {ele.desc}</p>
                    </div>}
                    {(ele.rating && ele.user_ratings_total) && <div className="loc-rating">
                        <div className="loc-score">
                            <div className="loc-star">
                                {ele.rating && <span><span className="loc-header">USER SCORE</span>: {ele.rating} </span>}
                                {ele.rating && <i className="fa-solid fa-star star" ></i>}
                            </div>
                            <div className="loc-reviewCount">
                                { ele.user_ratings_total && <span><span className="loc-header">TOTAL</span>: {`${ele.user_ratings_total} reviews`}</span>}
                            </div>
                        </div>
                        <div className="loc-reviews">
                            {reviewDiv}
                        </div>
                    </div> }
                </div>
            </div>}
        </div>
    )
}