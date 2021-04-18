class Pet {
  /**
   *
   * @param {object} param
   * @param {string} param.species
   * @param {string} param.name
   * @param {number} param.age
   */
  constructor({ species, name, age }) {
    this.species = species;
    this.name = name;
    this.age = age;
  }

  getData() {
    return {
      species: this.species,
      name: this.name,
      age: this.age
    };
  }
}

module.exports = Pet;
