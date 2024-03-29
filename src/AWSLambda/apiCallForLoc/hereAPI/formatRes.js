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
    
    let taRef=undefined;
    try {
        taRef=hereEl.references.filter(el => {
            try {
                return el.supplier.id==="tripadvisor";
            } catch (error) {
                return false;
            }
        });
        taRef=taRef[0].id;
    } catch (error) {
        taRef=undefined;
    }


    return {
        place_id,
        formatted_address,
        title,
        country,
        type,
        formatted_phone_number,
        website,
        taRef
    }
}

export {formatRes};