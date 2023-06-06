const AWS = require('aws-sdk');

var ddb = new AWS.DynamoDB();


exports.handler = async (event) => {
    // TODO implement
    let params={
        TableName:"Random_Image",
        ExpressionAttributeNames: {
            "#u": "url"
         }, 
        ProjectionExpression: "#u"
    };
    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    body = await ddb.scan(params).promise();
    const end=body.ScannedCount;
    const index=Math.floor(Math.random()*end);
    console.log(body);
    console.log(index);
    body=JSON.stringify(body.Items[index]);
    return {
        statusCode,
        body,
        headers,
    };
};
