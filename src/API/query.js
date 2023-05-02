import $ from 'jquery';

import { apiCallForLoc } from './apiLoc/apiCall';
import { apiCallForPost } from './apiPost/apiCall';

function queryExc(query,setRes){
    console.log("API call baby");
    $.when(
        apiCallForLoc(query),
        apiCallForPost(query)
    ).then(
        (loc,post)=>{
            console.log("This is for my boy loc: %o",loc);
            console.log("This is for my girl post: %o",post);
            setRes({
                loc:loc[0],
                post:post[0]
            })
        }
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