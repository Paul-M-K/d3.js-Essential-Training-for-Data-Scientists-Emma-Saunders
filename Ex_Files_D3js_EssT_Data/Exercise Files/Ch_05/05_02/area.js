var dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];

//need to convert strings to data. use a parser function
var parseDate = d3.timeParse("%Y");
// console.log(parseDate('2003'));
// console.log('2003');
// console.log(d3.extent(dataYears,function(d){ return parseDate(d)}));


var height = 200;
var width = 500;

//declare margin this is an object
var margin = {left:50, right:50,top:40,bottom:0};

//enter linear scale
var y= d3.scaleLinear()
                .domain([0,d3.max(dataArray)]) //domain and range always take an array
                .range([height,0]);

// add axis generator
var yAxis = d3.axisLeft(y).ticks(3).tickPadding(10).tickSize(10);

//add x axis generator
var xAxis = d3.axisBottom(x);

var x = d3.scaleTime()
                .domain(d3.extent(dataYears,function(d){ return parseDate(d); }))
                .range([0,width]);

// add x axis generator
            
//testout in console
// console.log(y(0));
// console.log(y(90));
// console.log(y(180));

//Create area group
var area = d3.area()
                .x(function(d,i){ return i*20; })
                .y0(height)
                .y1(function(d){ return y(d); });

//Create svg
var svg = d3.select("body")
                .append("svg")
                .attr("height","100%")
                .attr("width","100%");

//Apply margins to area chart. this is done through creating a chart Group
var chartGroup = svg.append("g")
                        .attr("transform","translate("+margin.left+","+margin.top+")")


//Now instead of appending the path to the svg. Append to chartGroup
chartGroup.append("path")
        .attr("d",area(dataArray));

//Add path to svg
// svg.append("path")
//         .attr("d",area(dataArray));

//to clean this up remove transform from axis and append to chartGroup
chartGroup.append("g")
        .attr("class","axis y")
        .call(yAxis);

//call xaxis
chartGroup.append("g")
            .attr("class","axis x")
            .call(xAxis);


//Add axis to svg
// svg.append("g")
//         .attr("class","axis y")
//         .attr("transform","translate("+margin.left+","+margin.top+")")
//         .call(yAxis);

//section 04 we are going to see all the elements that make up the axis