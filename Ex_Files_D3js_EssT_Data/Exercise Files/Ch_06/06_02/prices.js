var parseDate = d3.timeParse("%m/%d/%Y");

//write data handler
d3.csv("prices.csv")
    .row(function(d){return {month: parseDate(d.month), price:Number(d.price.trim().slice(1))};})
    .get(function(error,data){
console.log(data);
})

