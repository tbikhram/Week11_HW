function Shape(sideOne, sideTwo, sideThree, sideFour) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.sideFour = sideFour;
}

Shape.prototype.get_type = function(){

    
	console.log("Square dimensions are:" + this.sideOne + "," +  this.sideTwo + ","
		+ this.sideThree + "," + this.sideFour
		);



};

var shape = new Shape(20, 30, 20, 30);

shape.get_type();

module.exports = Shape;