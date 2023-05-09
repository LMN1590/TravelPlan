import $ from 'jquery';

import { apiCallForLoc } from './apiLoc/apiCall';
import { apiCallForPost } from './apiPost/apiCall';
import { writeTable } from './writeTable/writeTable';


function queryExc(query,setLoc,setPost){
    console.log("API call baby");
    getLoc(query,setLoc).catch((err)=>{
        setLoc([]);
    });
    getPost(query,setPost).catch((err)=>{
        setPost([]);
    });
}

function getLoc(query,setLoc){
    return apiCallForLoc(query).then((dataLoc)=>{
        console.log("This is for loc: %o",dataLoc);
        setLoc(dataLoc);
        return JSON.stringify(dataLoc);
    }).then(
        writeTable
    )
}

function getPost(query,setPost){
    return apiCallForPost(query).then((dataPost)=>{
        console.log("This is for post: %o",dataPost);
        setPost(dataPost);
        return dataPost;
    })
}

export {queryExc};