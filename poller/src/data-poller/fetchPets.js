const mockPetsData = require('../mocks/pets.json');
const { storage } = require('../utils/storage');

module.exports.handler = async () => {
  return storage.save({
    bucketKeyFolder: 'pets',
    data: mockPetsData
  });
};
