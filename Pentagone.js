function Shape(sideOne, sideTwo, sideThree, sideFour, sideFIve) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.sideFour = sideFour;
    this.sideFIve = sideFIve;
}

Shape.prototype.get_type = function(){
	console.log("Pentagon dimensions are:" + this.sideOne + "," +  this.sideTwo + ","
		+ this.sideThree + "," + this.sideFour + "," + this.sideFIve
		);
};

var shape = new Shape(20, 30, 20, 30, 20);

shape.get_type();

module.exports = Shape;