async function mapAsync(arr,callback){
    return (await Promise.all(
        arr.map(async el => await callback(el))
    )); 
}

async function handler(event){
    const {getLoc}=await import('./hereAPI/call.js');
    const {callTripAdvisor} = await import('./tripAdvisorAPI/call.js');
    
    const query=event.queryStringParameters.query;
    const location=event.queryStringParameters.at;

    const data= await getLoc(query,location);
    const res = await mapAsync(data,callTripAdvisor);


    const statusCode='200';
    const body=JSON.stringify(res);
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    
    return {
        statusCode,
        body,
        headers,
    };
}

exports.handler=handler;