
var Shape = require('./Square.js');

var Shape = require('./Triangle.js');

var Shape = require('./Pentagone.js');

var shape = new Shape ('Square', 'Triangle', 'Pentagone');





console.log( "The Shapes Instance of are object contractors:" + "\n" +
   
    (Shape instanceof Object));

shape.get_type();