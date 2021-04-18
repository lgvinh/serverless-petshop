const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const bucketName = process.env.BUCKET_NAME;
const getDataByFileName = async (key) => {
  console.debug('key: ', key);
  const params = {
    Bucket: bucketName,
    Key: key
  };

  const s3Data = await s3.getObject(params).promise();
  const result = s3Data.Body.toString('utf-8');

  return JSON.parse(result);
};

const extractKeyFromEvent = ({ Records }) => {
  const [record] = Records;
  return decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));
};

module.exports = {
  getDataByFileName,
  extractKeyFromEvent
};
