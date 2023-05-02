import $ from 'jquery';

import { serpAPI } from './serpAPI';
import { formatRes } from './formatRes';

function apiCallForPost(query){
    const postRes=serpAPI(query).organic_results;

    if(!postRes) return [[]];

    const formattedData=postRes.map(el => formatRes(el));

    return [formattedData];
}

export {apiCallForPost};