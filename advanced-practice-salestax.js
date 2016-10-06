var salesTaxRates = {
 AB: 0.05,
 BC: 0.12,
 SK: 0.10
};

var companySalesData = [
 {
   name: "Telus",
   province: "BC",
   sales: [ 100, 200, 400 ]
 },
 {
   name: "Bombardier",
   province: "AB",
   sales: [ 80, 20, 10, 100, 90, 500 ]
 },
 {
   name: "Telus",
   province: "SK",
   sales: [ 500, 100 ]
 }
];

function calculateSalesTax(salesData, taxRates) {
   var companySalesReport = {};
   //creating an empty object to populate in our answer.
   for (var index of companySalesData) {
      if (!companySalesReport.hasOwnProperty(index.name)) {
         companySalesReport[index.name] = {};
         companySalesReport[index.name].salesTotal = 0;
         companySalesReport[index.name].taxTotal = 0;   //THIS IS HOW YOU ADD A KEY! salesTotal was just created. By me.
      }
      var subTotal = add(index.sales);
      index.subTotal = subTotal;
      //console.log(index)
      //console.log(subTotal)
   }
   for (var index of companySalesData) {
      var province = index.province;
      var taxProvince = salesTaxRates[province];
      var subTax = (taxProvince * index.subTotal); //subtotal becomes a "key" in our previous for loop.
      index.subTax = subTax; //
      companySalesReport[index.name].taxTotal += index.subTax;
      companySalesReport[index.name].salesTotal += index.subTotal;
    //  console.log(index) //shows all keys and subtotals!
   }
   return companySalesReport;
}
//console.log(calculateSalesTax);
function add (salesArray) {
   var total = 0;
   for (var i in salesArray) {
     total += salesArray[i];
   }
   return total;
}
//console.log(calculateSalesTax(companySalesData, salesTaxRates));
//console.log(companySalesData[0].subTotal);

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
 Telus: {
   totalSales: 1300
   totalTaxes: 144
 },
 Bombardier: {
   totalSales: 800,
   totalTaxes: 40
 }
}
*/