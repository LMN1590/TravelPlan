import $ from 'jquery';

function writeTable(locationData){
    const URL="https://riqoukioq0.execute-api.eu-central-1.amazonaws.com/prod/writelocationresult";

    return $.ajax({
        method: 'POST',
        url: URL,
        crossDomain: true,
        data: {
            data:locationData
        },
        contentType: 'application/json',
    });
}

export {writeTable};