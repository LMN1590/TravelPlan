import React from "react";

import $ from 'jquery'

import quote from '../../data/quote.json'

import './Result.css';

function getQuote() {
    let category = "inspirational";
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'nftx9aLPsDhbbOK4p5w5cw==DnAcw5zo6Ld31x2C' },
        contentType: 'application/json',
        success: function (data, status) {
            console.log(data);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

export default function Result({ ele, setEl }) {
    let style = {
        backgroundImage: `url('${ele ? ele.photos : ""}')`,
    }
    React.useEffect(() => {
        if (!ele) {
            $(".quoteText-wrapper .quoteText").text(quote[0].quote);
            $(".quote .quoteAuthor").text("- " + quote[0].author)
        }
    }, [])
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
                <div className="header-img" style={style}>

                </div>
                <div className="loc-details">
                    <div className="loc-name">
                        <p>{ele.name}</p>
                    </div>
                    <div className="loc-type">
                        <p><span className="loc-header">TYPE OF ESTABLISHMENT</span>: {ele.type}</p>
                    </div>
                    <div className="loc-addr">
                        <p><span className="loc-header">ADDRESS</span>: {ele.formatted_address}</p>
                    </div>
                    <div className="loc-code">
                        <p><span className="loc-header">PLUS CODE</span>: {ele.plus_code}</p>
                    </div>
                    <div className="loc-phone">
                        <p><span className="loc-header">PHONE NUMBER</span>: {ele.formatted_phone_number}</p>
                    </div>
                    <div className="loc-web">
                        <p><span className="loc-header">WEBSITE</span>: {ele.website}</p>
                    </div>
                    <div className="loc-desc">
                        <p><span className="loc-header">DESCRIPTION</span>: {ele.desc}</p>
                    </div>
                    <div className="loc-rating">
                        <div className="loc-score">
                            <div className="loc-star">
                                <span><span className="loc-header">USER SCORE</span>: {ele.rating} </span>
                                <i className="fa-solid fa-star star" ></i> 
                            </div>
                            <div className="loc-reviewCount">
                                <span className="loc-header">TOTAL</span>:
                                {`${ele.user_ratings_total} reviews`}
                            </div>
                        </div>
                        <div className="loc-reviews">
                            <div className="loc-single-review">
                                <div className="loc-review-author">
                                    <p>{`From: John Doe`}</p>
                                </div>
                                <div className="loc-review-content">
                                    <p>The place was nice and clean. The staff was friendly and attentive. 
                                        The atmosphere was relaxing and comfortable. 
                                        Overall, it was a pleasant experience.</p>
                                </div>
                            </div>
                        </div>
                        <div className="loc-reviews">
                            <div className="loc-single-review">
                                <div className="loc-review-author">
                                    <p>{`From: John Doe`}</p>
                                </div>
                                <div className="loc-review-content">
                                    <p>The place was nice and clean. The staff was friendly and attentive. 
                                        The atmosphere was relaxing and comfortable. 
                                        Overall, it was a pleasant experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}