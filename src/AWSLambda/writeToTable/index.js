const AWS = require('aws-sdk');

var ddb = new AWS.DynamoDB();

async function writeTable(el){
    try{
        await ddb.executeStatement({
            Statement: 
                `INSERT INTO "locationResult" 
                    value {
                        'place_id': ?,
                        'formatted_address': ?,
                        'title': ?,
                        'country': ?,
                        'type': ?,
                        'formatted_phone_number': ?,
                        'website': ?,
                        'taRef': ?,
                        'view': ?,
                        'desc': ?,
                        'rating': ?,
                        'user_ratings_total': ?
                    }
                `,
            Parameters: 
                [
                    {S: el.place_id},
                    {S: el.formatted_address},
                    {S: el.title},
                    {S: el.country},
                    {S: el.type},
                    {S: el.formatted_phone_number},
                    {S: el.website},
                    {S: el.taRef},
                    {N: '1'},
                    {S: el.desc},
                    {S: el.rating},
                    {S: el.user_ratings_total}
                ]
            }
        ).promise();
    }
    catch(err){
        await ddb.executeStatement({
            Statement: 
                `UPDATE "locationResult" 
                    SET "view" = "view" + 1
                    WHERE "place_id" = ?
                `,
            Parameters: 
                [
                    {S: el.place_id}
                ]
            }
        ).promise()
    }
    console.log("write complete");
}

async function handler(event){
    const bodyEvent=event.body;
    const decoded=decodeURIComponent(bodyEvent);

    const data=JSON.parse(decoded.slice(5));
    
    let res=undefined;
    
    try{
        const result = await Promise.all(
            data.map(el => writeTable(el))
        )
        res= "yay";
    }
    catch(error){
        res= `Nay ,${error}`;
    }
    console.log(res);
    const statusCode='200';
    const body=JSON.stringify(res);
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    
    return {
        statusCode,
        body,
        headers,
    };
}

exports.handler = handler;