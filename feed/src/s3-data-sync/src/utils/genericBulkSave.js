const { extractKeyFromEvent, getDataByFileName } = require('.');

/**
 *
 * @param {object} param
 * @param {any} param.DomainMapping
 * @param {object} param.repository
 */
const genericBulkSave = ({ DomainMapping, repository }) => async (event) => {
  const key = extractKeyFromEvent(event);

  try {
    const data = await getDataByFileName(key);

    const domains = data.map((item) => new DomainMapping(item).getData());
    await repository.bulkSave(domains);
    console.log('BulkSave successfully');
  } catch (error) {
    console.trace('param.repository', repository);
    console.log('s3-data-sync fetching error :>> ', error);
  }
};

module.exports = genericBulkSave;
