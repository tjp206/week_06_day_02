const Decorator = function (paintStock) {
    this.paintStock = [];
};

Decorator.prototype.addCanOfPaint = function (paintCan){
    this.paintStock.push(paintCan);
}

Decorator.prototype.calculateAmountOfPaint = function(){
    let total = 0;
    for (can of this.paintStock) {
        total += can.litresOfPaint;
    }
    return total;
}

Decorator.prototype.hasEnoughPaint = function (room) {

    if ( this.calculateAmountOfPaint() >= room.areaInSquareMeters ) {
        return true;
    }
    return false;
}

Decorator.prototype.paintRoom = function (room) {
    if (this.hasEnoughPaint(room) == true) {
        room.paint();
    }
}

Decorator.prototype.decreasePaintStock = function () {
    let areaToBePainted = areaInSquareMeters;

    for (const paintCan of this.paintStock) {
        if(paintCan.)
    }
}


module.exports = Decorator;
