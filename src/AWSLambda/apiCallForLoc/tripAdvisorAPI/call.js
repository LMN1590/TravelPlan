import { getImgWrapper } from "./imgAPI.js";
import {getReviewWrapper} from "./reviewAPI.js";
import {getDetailsWrapper} from "./detailsAPI.js";

async function callTripAdvisor(loc_item){
    const loc_id=loc_item.taRef;
    if(loc_id){
        return await Promise.all([
            getDetailsWrapper(loc_id),
            getImgWrapper(loc_id),
            getReviewWrapper(loc_id)
        ]).then(([details,img,reviews])=>{
            return {
                ...loc_item,
                ...details,
                ...img,
                ...reviews
            }
        })
    }
    else{
        return loc_item;
    }
}

export {callTripAdvisor};