import $ from 'jquery';

function getLoc(locObj){
    localStorage.setItem('location', `${locObj.coords.latitude},${locObj.coords.longitude}`);
}

function callHERE(query) {
    const URL="https://discover.search.hereapi.com/v1/discover";
    const apiKey = "K177Fw63831tLMIveyyOH1-gkTxLlxyEdwyRDmidt2k";
    navigator.geolocation.getCurrentPosition(getLoc);
    const location=localStorage.getItem('location');
    const limit=1;
    return $.ajax({
        method: 'GET',
        url: URL,
        crossDomain: true,
        dataType: "jsonp",
        data: {
            q: query,
            limit: limit,
            apiKey:apiKey,
            at:location,
            lang: 'en'
        },
        contentType: 'application/json',
        success: function (data, status) {
            console.log("yay");
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

/////////////////////////////////////////////

function formatRes(hereEl){
    let place_id="";
    try {
        place_id=hereEl.id;
    } catch (error) {
        place_id="";
    }

    let formatted_address="";
    try {
        formatted_address=hereEl.address.label;
    } catch (error) {
        formatted_address="";
    }

    let title="";
    try {
        title=hereEl.title;
    } catch (error) {
        title="";
    }
    
    let country="";
    try {
        country=hereEl.address.countryName;
    } catch (error) {
        country="";
    }

    let type="";
    try {
        type=hereEl.categories[0].name;
    } catch (error) {
        type="";
    }

    let formatted_phone_number="";
    try {
        formatted_phone_number=hereEl.contacts[0].phone[0].value;
    } catch (error) {
        formatted_phone_number="";
    }

    let website="";
    try {
        website=hereEl.contacts[0].www[0].value;
    } catch (error) {
        website="";
    }
    
    let taRef=[];
    try {
        taRef=hereEl.references.filter(el => {
            try {
                return el.supplier.id==="tripadvisor";
            } catch (error) {
                return false;
            }
        });
    } catch (error) {
        taRef=[];
    }
    
    console.log(taRef);
    return {
        place_id,
        formatted_address,
        title,
        country,
        type,
        formatted_phone_number,
        website
    }
}

export {callHERE,formatRes};