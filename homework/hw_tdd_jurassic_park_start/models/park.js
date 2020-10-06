const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.add = function (trex1) {
    this.dinosaurs.push(trex1);
};

Park.prototype.remove = function (velociraptor1) {
    const index = this.dinosaurs.indexOf(velociraptor1);
    this.dinosaurs.splice(index, 1);
};

Park.prototype.findMostAttractiveDinosaur = function (trex3) {
    const index = this.dinosaurs.indexOf(trex3);
    this.dinosaurs.splice(index, [2]);
};

module.exports = Park;