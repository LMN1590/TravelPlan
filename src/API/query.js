import $ from 'jquery';

import { apiCallForLoc } from './apiLoc/apiCall';
import { apiCallForPost } from './apiPost/apiCall';
import { writeTable } from './writeTable/writeTable';

function queryExc(query,setRes){
    console.log("API call baby");
    $.when(
        apiCallForLoc(query),
        apiCallForPost(query)
    ).then(
        (loc,post)=>{
            console.log("This is for loc: %o",loc);
            console.log("This is for post: %o",post);
            setRes({
                loc:loc[0],
                post:post[0]
            });
            return JSON.stringify(loc[0]);
        }
    ).then(
        writeTable
    ).catch(
        (err)=>{
            setRes({
                loc: [],
                post: []
            })
        }
    )
}

export {queryExc};