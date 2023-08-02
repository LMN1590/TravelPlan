

async function callSerpAPI(query){
    const fetch = await import('node-fetch');
    
    const apiKey="API-Key";
    const engine="google";
    
    const params={
        q:query,
        engine:engine,
        api_key:apiKey
    }
    
    const URL="https://serpapi.com/search?" + new URLSearchParams(params);
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    
    const data= await fetch.default(URL, options).then(res=>res.json());
    return data;
}

export {callSerpAPI};