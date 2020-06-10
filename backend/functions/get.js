

const DynamoDB = require('aws-sdk/clients/dynamodb');


module.exports.handle = async event => {
    if (!process.env.tableName) {
        throw new Error('env.tableName must be defined');
    }

    const dynamoDb = new DynamoDB.DocumentClient();
    const result = await dynamoDb.get({
        TableName: process.env.tableName,
        Key: {
            type: 'Movie',
            uuid: event.pathParameters.uuid,
        },
    }).promise();

    if (result.Item) {
        return {
            statusCode: 200,
            body: JSON.stringify(result.Item),
        }
    } else {
        return {
            statusCode: 404,
            body: 'Not found'
        }
    }
}

