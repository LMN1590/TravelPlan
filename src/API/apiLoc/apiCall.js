import $ from 'jquery';

function getLoc(locObj){
    localStorage.setItem('location', `${locObj.coords.latitude},${locObj.coords.longitude}`);
}


function apiCallForLoc(query){
    navigator.geolocation.getCurrentPosition(getLoc);
    const location=localStorage.getItem('location');
    const URL="https://riqoukioq0.execute-api.eu-central-1.amazonaws.com/prod/getlocationresult";

    return $.ajax({
        method: 'GET',
        url: URL,
        crossDomain: true,
        data: {
            query: query,
            at:location,
        },
        contentType: 'application/json',
    });
}

export {apiCallForLoc};