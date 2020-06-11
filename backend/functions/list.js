const DynamoDB = require('aws-sdk/clients/dynamodb');

module.exports.handle = async event => {
    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }

    const dynamoDb = new DynamoDB.DocumentClient();
    
    const result = await dynamoDb.query({
        TableName: process.env.tableName,
        KeyConditionExpression: '#type = :type',
        ExpressionAttributeNames: {
            '#type': 'type'
        },
        ExpressionAttributeValues: {
            ':type': 'Movie',
        },
    }).promise();

    return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true'
        },
        body: JSON.stringify(result.Items),
    }
}

