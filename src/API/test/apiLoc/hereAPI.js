import $ from 'jquery';

import hereAPIres from '../../../data/hereAPIres.json';

function getLoc(locObj){
    localStorage.setItem('location', `${locObj.coords.latitude},${locObj.coords.longitude}`);
}


function hereAPI(query){
    return hereAPIres;
}

export {hereAPI};