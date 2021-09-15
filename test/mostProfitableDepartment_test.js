
let assert = require("assert");
const mostProfitableDepartment = require('../mostProfitableDepartment');



describe('the mostProfitableDepartment function ' , function(){
    it('the functiion should identify the departments that are the most profitabl for both datasets 1 and 2' , function(){
        assert.equal('', mostProfitableDepartment('salesData1'));
        assert.equal('', mostProfitableDepartment('salesData2'))
        
    });
   

});