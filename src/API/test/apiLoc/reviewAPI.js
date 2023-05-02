import reviews from '../../../data/tripadvisorReview.json';

function getReviewWrapper(loc_id){
    if(reviews){
        const filteredReview=reviews.data.map(el => {
            return {
                username: el.user.username,
                location: el.user.user_location.name,
                title: el.title,
                tripType: el.trip_type,
                text: el.text,
                rating: el.rating,
            }
        });
        return {
            reviews: filteredReview
        };
    }
    else{
        return{
            reviews:[]
        };
    }
}

export {getReviewWrapper};