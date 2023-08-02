async function getImg(loc_id){
    const fetch = await import('node-fetch');

    const params={
        language: 'en',
        key:'API-Key'
    };

    const url= `https://api.content.tripadvisor.com/api/v1/location/${loc_id}/photos?` 
        + new URLSearchParams(params);
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    const data = await fetch.default(url, options).then(data => data.json());
    return data;
}

async function getImgWrapper(loc_id){
    let img=undefined;
    try {
        img=await getImg(loc_id);
    } catch (error) {
        img=undefined;
    }
    console.log("This is for post: %o",img);
    if(img){
        const filteredImg= img.data.map(el => {
            try{
                return el.images.original.url
            }
            catch(err){
                return el.images.large.url
            }
            
        });
        return {
            photos: filteredImg
        };
    }
    else{
        return{
            photos:undefined
        };
    }
}

export {getImgWrapper};