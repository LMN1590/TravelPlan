const AWS = require('aws-sdk');

var ddb = new AWS.DynamoDB();


exports.handler = async (event) => {
    // TODO implement
    let params={
        TableName:"locationResult",
    };
    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    body = await ddb.scan(params).promise();
    console.log(body);
    body=JSON.stringify(body);
    return {
        statusCode,
        body,
        headers,
    };
};