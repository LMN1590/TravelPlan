function formatRes(el){

    return{
        position: el.position,
        title:el.title,
        link:el.link,
        diplayed_link:el.displayed_link,
        snippet:el.snippet,
        source_info:{
            name: el.source,
            thumbnail: undefined
        }
    }
}


async function handler(event){
    let body=[];
    const {callSerpAPI} = await import('./serpAPI/call.js')
    
    const query=event.queryStringParameters.query;

    const data= await callSerpAPI(query);
    const postRes=data.organic_results;
    
    if(!postRes){
        body=JSON.stringify([]);
    }
    else{
        const formattedData=postRes.map(el => formatRes(el));
        body=JSON.stringify(formattedData);
    }
    
    const statusCode='200';
    
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    
    const res= {
        statusCode,
        body,
        headers,
    };
    return res;
}
exports.handler=handler;