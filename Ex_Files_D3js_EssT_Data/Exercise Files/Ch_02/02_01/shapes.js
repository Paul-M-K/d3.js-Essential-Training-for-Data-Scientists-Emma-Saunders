//Create data
var dataArray = [5, 11,18];

//Add SVG element to HTML page
//svg is a canvas that we add lines and text


//Change width and hight with attributes
// d3.select("body").append("svg")
//     .attr("height","100%")
//     .attr("width","100%");

//Create short cut to make life easier. set d3 to a variable.
var svg = d3.select("body").append("svg")
                .attr("height","100%")
                .attr("width","100%");

//Add rectangles to svg.
svg.selectAll("rect") //seach svg to find rectangles
        .data(dataArray)
        .enter().append("rect");