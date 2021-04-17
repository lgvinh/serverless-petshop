const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const { BUCKET } = process.env;

const storage = {
  save: ({ bucketKeyFolder, data }) => {
    const currentDate = Date.now();

    return s3
      .putObject({
        Bucket: BUCKET,
        Key: `${bucketKeyFolder}/${currentDate}.json`,
        Body: JSON.stringify(data)
      })
      .promise();
  }
};

module.exports = {
  storage
};
