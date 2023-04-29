import $ from 'jquery';

import { callHERE,formatRes } from './hereapi';

function queryExc(query,setRes){
    getPlace(query,setRes);
    getPost(query);
}

async function getPlace(query,setRes){
    let items=await callHERE(query);
    const hereDone=items.items.map(el=>{
        return formatRes(el);
    })
    setRes(hereDone);
}

async function getPost(query){
    console.log(query);
}

export {queryExc};