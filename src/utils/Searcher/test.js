//////////////  TEST    ///////////////
function checkQuery(checkString, query) {
    const queryArr = query.toLowerCase().split(/[-_,./;:\[\]\s\(\)\{\}]+/);
    for (const index in queryArr) {
        if (checkString.toLowerCase().includes(queryArr[index])) {
            return true;
        }
    }
    return false;
}

function createResult(data, query, setRes) {
    const filteredData = data.filter(place => checkQuery(place.title, query));
    setRes(filteredData);
}

export {createResult};