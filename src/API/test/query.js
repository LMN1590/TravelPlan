import $ from 'jquery';

import { apiCallForLoc } from './apiLoc/apiCall';
import { apiCallForPost } from './apiPost/apiCall';
import { writeTable } from './writeTable/writeTable';


function queryExc(query,setLoc,setPost){
    console.log("API call baby");
    $.when(
        getLoc(query,setLoc),
        getPost(query,setPost)
    ).catch((err)=>{
        setLoc([]);
        setPost([]);       
    })
}

function getLoc(query,setLoc){
    return apiCallForLoc(query).then((dataLoc)=>{
        console.log("This is for loc: %o",dataLoc);
        setLoc(dataLoc[0]);
        return JSON.stringify(dataLoc[0]);
    }).then(
        writeTable
    )
}

function getPost(query,setPost){
    return apiCallForPost(query).then((dataPost)=>{
        console.log("This is for post: %o",dataPost);
        setPost(dataPost[0]);
        return dataPost;
    })
}

export {queryExc};