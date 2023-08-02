async function getReview(loc_id){
    const fetch = await import('node-fetch');

    const params={
        language: 'en',
        key:'API-Key'
    };

    const url= `https://api.content.tripadvisor.com/api/v1/location/${loc_id}/reviews?` 
        + new URLSearchParams(params);
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    const data = await fetch.default(url, options).then(data => data.json());
    return data;
}
async function getReviewWrapper(loc_id){
    let reviews=undefined;
    try {
        reviews = await getReview(loc_id);
    } catch (error) {
        reviews=undefined;
    }
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