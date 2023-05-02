import { serpAPI } from "./serpAPI";
import {formatRes} from './formatRes';

function apiCallForPost(query){
    const data=serpAPI(query);

    const postRes=data.organic_results;

    if(!postRes){
        return [[]];
    }
    else{
        const formattedData=postRes.map(el => formatRes(el));
        return [formattedData]
    }
    
}

export {apiCallForPost};