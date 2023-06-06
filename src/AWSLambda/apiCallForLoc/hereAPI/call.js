import { callHereAPI } from "./hereAPI.js";
import { formatRes } from "./formatRes.js";

async function getLoc(query,location){
    const data=await callHereAPI(query,location);
    const res=data.items.map((el)=>formatRes(el));

    return res;
}

export {getLoc};