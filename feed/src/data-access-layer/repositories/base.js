const AWS = require('aws-sdk');

const DynamoDB = new AWS.DynamoDB.DocumentClient();

class BaseRepository {
  constructor({ tableName } = {}) {
    if (!tableName) {
      throw new Error('Table name is required');
    }
    this.tableName = tableName;
  }

  /**
   * @method bulkSave
   * @param {Array<any>} items
   * @description Insert many item into db
   */
  bulkSave(items) {
    console.debug('BulkSave at', this.tableName);
    const putRequest = items.map((item) => ({
      PutRequest: {
        Item: item
      }
    }));
    console.trace('putRequest: ', JSON.stringify(putRequest, null, 2));

    return DynamoDB.batchWrite({
      RequestItems: {
        [this.tableName]: putRequest
      }
    }).promise();
  }

  create(item, options = {}) {
    return DynamoDB.put({
      ...options,
      TableName: this.tableName,
      Item: item
    });
  }
}

module.exports = BaseRepository;
