

let assert = require("assert");
const greet = require('../greet');

describe('The greet function', function(){

    it('should return "Hello Lorna" when I greet Lorna', function(){
        assert.equal('Hello, Lorna', greet('Lorna'));
    });
});


