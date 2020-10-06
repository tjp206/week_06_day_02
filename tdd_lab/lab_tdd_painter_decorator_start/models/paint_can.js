const PaintCan = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint;
};


PaintCan.prototype.isEmpty = function () {
    if (this.litresOfPaint !== 0) {
        return false;
    }
    return true;
};

PaintCan.prototype.empty = function () {
    this.litresOfPaint = 0;
}

module.exports = PaintCan;

