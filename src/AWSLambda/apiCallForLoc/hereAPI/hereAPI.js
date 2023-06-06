async function callHereAPI(query,location){
    const fetch = await import('node-fetch');
    
    const apiKey = "K177Fw63831tLMIveyyOH1-gkTxLlxyEdwyRDmidt2k";
    const limit=3;

    const params={
        q:query,
        limit:limit,
        apiKey:apiKey,
        at:location,
        lang: 'en'
    }

    const URL="https://discover.search.hereapi.com/v1/discover?" + new URLSearchParams(params);
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    const data= await fetch.default(URL, options).then(res=>res.json());
    return data;
}

export {callHereAPI};