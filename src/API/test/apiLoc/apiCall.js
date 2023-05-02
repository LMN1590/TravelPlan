import { hereAPI } from "./hereAPI";
import {getImgWrapper} from './imgAPI';
import {getDetailsWrapper} from './detailsAPI';
import {getReviewWrapper} from './reviewAPI';
import {formatRes} from './formatRes';

function apiCallForLoc(query){
    const hereAPIres=hereAPI(query);
    const dataFull=hereAPIres.items.map(el => {
        const formattedData=formatRes(el);
        const reviews=getReviewWrapper(query);
        const details=getDetailsWrapper(query);
        const img=getImgWrapper(query);
        return {
            ...formattedData,
            ...reviews,
            ...details,
            ...img
        }
    })
    console.log(dataFull)
    return [dataFull];
}  

export {apiCallForLoc};