import img from '../../../data/tripadvisorImg.json';

function getImgWrapper(loc_id){
    if(img){
        const filteredImg= img.data.map(el => el.images.original.url);
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