import details from '../../../data/tripadvisorGen.json';


function getDetailsWrapper(loc_id){
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