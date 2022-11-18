//declare data
var dataArray = [{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];
var interpolateTypes = [d3.curveLinear,d3.curveNatural,d3.curveStep,
d3.curveBasis, d3.curveBundle, d3.curveCardinal];

//create svg
var svg = d3.select("body").append("svg")
                .attr("height","100%")
                .attr("width","100%");


//Place all code into a loop to generate the charts
for (var p=0; p<6; p++){

        //create line generator
        //this generates a path element.
        var line = d3.line()
                        .x(function(d,i){ return d.x*6; })
                        .y(function(d,i){ return d.y*4; })
                        //add a curve to the line
                        .curve(interpolateTypes[p]);


        //declare variables to translate
        var shiftX = p*250;
        var shiftY = 0;
        //Declare group as variable
        var chartGroup = svg.append("g")
                            .attr("transform","translate("+shiftX+",0)");

        //create a path
        chartGroup.append("path")
                .attr("fill","none")
                .attr("stroke","blue")
                .attr("d",line(dataArray));

        //We are going to GROUP things together!!!
        chartGroup.selectAll("circle.grp"+p)
                .data(dataArray)
                .enter().append("circle")
                        .attr("class",function(d,i){ return "grp"+i})
                        .attr("cx",function(d,i){ return d.x*6; })
                        .attr("cy",function(d,i){ return d.y*4; })
                        .attr("r","2")
}
