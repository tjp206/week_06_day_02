const Pet = function (name, species) {
    this.name = name;
    this.species = species;
}

Pet.prototype.eat = function (food) {
    console.log(`${this.name} has eaten ${food}`);
}

module.exports = Pet;


