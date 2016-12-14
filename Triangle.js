function Shape(sideOne, sideTwo, sideThree) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
   
}

Shape.prototype.get_type = function(){
	console.log("Triangle dimensions are:" + this.sideOne + "," +  this.sideTwo + "," + this.sideThree);
};

var shape = new Shape(20, 30,40);

shape.get_type();

module.exports=Shape;