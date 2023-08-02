async function getDetails(loc_id){
    const fetch = await import('node-fetch');

    const params={
        language: 'en',
        currency: "USD",
        key:'API-Key'
    };

    const url= `https://api.content.tripadvisor.com/api/v1/location/${loc_id}/details?` 
        + new URLSearchParams(params);
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    const data = await fetch.default(url, options).then(data => data.json());
    return data;
}

async function getDetailsWrapper(loc_id){
    let details=undefined;
    try {
        details=await getDetails(loc_id);
    } catch (error) {
        details=undefined;
    }
    if(details){
        return {
            rating: details.rating || "",
            user_ratings_total: details.num_reviews || "",
            desc: details.description || ""
        };
    }
    else return {

    };
}
export {getDetailsWrapper};