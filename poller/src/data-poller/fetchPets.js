const Pet = require('../domain/pet');
const mockPetsData = require('../mocks/pets.json');
const { storage } = require('../utils/storage');

module.exports.handler = async () => {
  const pets = mockPetsData.map((pet) => new Pet(pet).getData());
  return storage.save({
    bucketKeyFolder: 'pets',
    data: pets
  });
};
