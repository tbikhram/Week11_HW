// 'use strict';

//Square File =====================================

function Shape_Square(sideOne, sideTwo, sideThree, sideFour) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.sideFour = sideFour;
}

Shape_Square.prototype.get_type = function(){

    
	console.log("Square dimensions are:" + this.sideOne + "," +  this.sideTwo + ","
		+ this.sideThree + "," + this.sideFour
		);



};

var shape = new Shape_Square(20, 30, 20, 30);

shape.get_type();

//Triangle file=================================================


function Shape_Triangle(sideOne, sideTwo, sideThree) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
   
}

Shape_Triangle.prototype.get_type = function(){
	console.log("Triangle dimensions are:" + this.sideOne + "," +  this.sideTwo + "," + this.sideThree);
};

var shape = new Shape_Triangle(20, 30,40);

shape.get_type();


// pemtgone shape =======================================

function Shape_Pentagon(sideOne, sideTwo, sideThree, sideFour, sideFIve) {
    this.sideOne =sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;
    this.sideFour = sideFour;
    this.sideFIve = sideFIve;
}

Shape_Pentagon.prototype.get_type = function(){
	console.log("Pentagon dimensions are:" + this.sideOne + "," +  this.sideTwo + ","
		+ this.sideThree + "," + this.sideFour + "," + this.sideFIve
		);
};

var shape = new Shape_Pentagon(20, 30, 20, 30, 20);

shape.get_type();

console.log( "Instance of contractors" + "\n" +
    (Shape_Pentagon instanceof Object) + "\n" + 
    (Shape_Triangle instanceof Object) + "\n" +
    (Shape_Square instanceof Object) + "\n" +
    (Shape_Square instanceof Number));





