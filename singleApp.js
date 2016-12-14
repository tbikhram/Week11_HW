// 'use strict';

//Square File =====================================

function Square(sideOne, sideTwo, sideThree, sideFour) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.sideFour = sideFour;
}

Square.prototype.printInfo = function(){
	console.log("Square dimensions are:" + this.sideOne + "," +  this.sideTwo + ","
		+ this.sideThree + "," + this.sideFour
		);
};

var shape = new Square(20, 30, 20, 30);

shape.printInfo();

//Triangle file=================================================


function Triangle(sideOne, sideTwo, sideThree) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
   
}

Triangle.prototype.printInfo = function(){
	console.log("Triangle dimensions are:" + this.sideOne + "," +  this.sideTwo + "," + this.sideThree);
};

var shape = new Triangle(20, 30,40);

shape.printInfo();


// pemtgone shape =======================================

function Pentagon(sideOne, sideTwo, sideThree, sideFour, sideFIve) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.sideFour = sideFour;
    this.sideFIve = sideFIve;
}

Pentagon.prototype.newShape = function(){
	console.log("Pentagon dimensions are:" + this.sideOne + "," +  this.sideTwo + ","
		+ this.sideThree + "," + this.sideFour + "," + this.sideFIve
		);
};

var shape = new Pentagon(20, 30, 20, 30, 20);

shape.newShape();

console.log( "Instance of contractors" + "\n" +
    (Pentagon instanceof Object) + "\n" + 
    (Pentagon instanceof Object) + "\n" +
    (Square instanceof Object) + "\n" +
    (Square instanceof Number));





