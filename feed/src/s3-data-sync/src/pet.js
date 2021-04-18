const { PetRepository, PetDomain } = require('pet-shop-feed-data-access-layer');
const genericBulkSave = require('./utils/genericBulkSave');

module.exports.handler = async (events) => {
  return genericBulkSave({
    DomainMapping: PetDomain,
    repository: new PetRepository()
  })(events);
};
