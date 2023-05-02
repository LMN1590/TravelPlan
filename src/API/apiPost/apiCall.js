import $ from 'jquery';

function apiCallForPost(query){
    const URL="https://riqoukioq0.execute-api.eu-central-1.amazonaws.com/prod/getpostresult";
    return $.ajax({
        method: 'GET',
        url: URL,
        crossDomain: true,
        data: {
            query: query,
        },
        contentType: 'application/json',
    });
}

export {apiCallForPost};