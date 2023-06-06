

async function callSerpAPI(query){
    const fetch = await import('node-fetch');
    
    const apiKey="22313043abbf0dbccfcbbb89b0b2b6c1f87e90738308be9d6d3e3dd47f5b6adf";
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