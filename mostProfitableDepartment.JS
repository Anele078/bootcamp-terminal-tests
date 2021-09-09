
module.exports = function mostProfitableDepartment(salesData1){
    var DeptMap = {};
    for(var i=0; i<salesData1.length; i++){
      var DepProfit = salesData1[i];
      DeptMap[DepProfit.department]=0;
      //console.log(DeptMap);
    }
    for(var i=0; i<salesData1.length; i++){
      var DepProfit = salesData1[i];
      var DeptSales = DeptMap[DepProfit.department];
      DeptSales += DepProfit.sales;
      DeptMap[DepProfit.department] = DeptSales;
       //console.log( DeptMap)
    
    }
    var maxSales = 0;
    var currentSales = '';
    for(var highestSales in  DeptMap) {
      var totalSales = DeptMap[highestSales];
      if(totalSales > maxSales) {
        maxSales = totalSales;
        currentSales = highestSales;
      }
    }
    //console.log(DeptMap)
     return currentSales;  
  }
 
 