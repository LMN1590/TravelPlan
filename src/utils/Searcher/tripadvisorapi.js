import $ from 'jquery';

import img from '../../data/tripadvisorImg.json';
import review from '../../data/tripadvisorReview.json';
import general from '../../data/tripadvisorGen.json';

function getImg(){
    const filteredImg= img.data.map(el => el.images.original.url);
    return {
        photo: filteredImg
    };
}

function getReview(){
    const filteredReview=review.data.map(el => {
        return {
            username: el.user.username,
            location: el.user.user_location,
            title: el.title,
            tripType: el.trip_type,
            text: el.text,
            rating: el.rating,
        }
    });
    return filteredReview;
}

function getGeneral(){

}

function callTripAPI(){
    
}

export {callTripAPI}