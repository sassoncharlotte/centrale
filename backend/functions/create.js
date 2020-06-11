const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {

    const data = JSON.parse(event.body);

    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }
    const dynamoDb = new DynamoDB.DocumentClient();

    const item = {
        type : 'Movie',
        uuid : data.name,
        createdAt: Date.now(),
    }

    await dynamoDb.put({
        TableName: process.env.tableName,
        Item: item,
    }).promise();


    return {
        statusCode: 200,
        headers: {
<<<<<<< HEAD
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true'
=======
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true',
>>>>>>> 529cfb498c2368acdb2665cb013dfd8b54c5fb17
        },
        body: JSON.stringify(item),
    }
}
