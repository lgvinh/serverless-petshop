const BaseRepository = require('./base');

class PetRepository extends BaseRepository {
  constructor() {
    super({ tableName: process.env.PET_TABLE_NAME });
  }
}

module.exports = PetRepository;
