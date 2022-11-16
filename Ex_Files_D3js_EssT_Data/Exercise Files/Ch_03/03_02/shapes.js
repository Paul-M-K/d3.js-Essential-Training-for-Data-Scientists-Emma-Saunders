var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");



svg.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
                .attr("height",function(d,i){ return d*15; })
                .attr("width","50")
                .attr("fill","pink")
                .attr("x",function(d,i){ return 60*i; })
                .attr("y",function(d,i){ return 300-(d*15); });


//using circles and distributing them correctly.
var newX = 300;
svg.selectAll("circle.first")
      .data(dataArray)
      .enter().append("circle")
            .attr("class","first") //add a class to differenciate between other circles
            .attr("cx",function (d,i) {newX+=(d*3)+(i*20) ;return newX; })
            .attr("cy","100")
            .attr("r",function(d,i){return d*3;});

//add second set of circles and differenciate with Class
// var newX = 600;
// svg.selectAll("circle.second")
//       .data(dataArray)
//       .enter().append("circle")
//             .attr("class","second")
//             .attr("cx",function (d,i) {newX+=(d*3)+(i*20) ;return newX; })
//             .attr("cy","100")
//             .attr("r",function(d,i){return d*3;});
            

//Create ellispe
var newX = 600;
svg.selectAll("ellipse")
      .data(dataArray)
      .enter().append("ellipse")
            .attr("cx",function (d,i) {newX+=(d*3)+(i*20) ;return newX; })
            .attr("cy","100")
            .attr("rx",function(d,i){return d*3;})
            .attr("ry","30");


//Adding a line to the code.
//LINE requires styling to show up!!!!
var newX = 900;
svg.selectAll("line")
      .data(dataArray)
      .enter().append("line")
            //use css
            // .style("stroke","green") // Style beats css
            // .attr("stroke", "blue") // Style takes presidence over attr
            .attr("stroke-width","2")
            .attr("x1", newX)
            .attr("y1",function(d,i){ return 80+(i*20); })
            .attr("x2",function(d){ return newX+(d*15); })
            .attr("y2",function(d,i){ return 80+(i*20); });

//Create Text
svg.append("text").text("start")
      .attr("x",newX)
      .attr("y",150)
      .attr("fill","none")
      .attr("stroke","blue")
      .attr("stroke-width","2")
      .attr("font-size","30");
// try
svg.append("text").text("middle")
      .attr("x",newX)
      .attr("y",180)
      .attr("fill","blue")
      .attr("stroke","none")
      .attr("font-size","30");
// agian
svg.append("text").text("end")
      .attr("x",newX)
      .attr("y",210)
      .attr("stroke","blue")
      .attr("fill","none")
      .attr("font-size","30");



// try text again
//Create Text
var textArray = ["start", "middle", "end"]
svg.append("text").text("start")
      .attr("text-anchor","start")
      .attr("dominant-baseline","middle")
      .attr("x",newX+200)
      .attr("y",150)
      .attr("fill","none")
      .attr("stroke","blue")
      .attr("stroke-width","2")
      .attr("font-size","30");
// try
svg.append("text").text("middle")
      .attr("dominant-baseline","middle")
      .attr("text-anchor","middle")
      .attr("x",newX+200)
      .attr("y",180)
      .attr("fill","blue")
      .attr("stroke","none")
      .attr("font-size","30");
// agian
svg.append("text").text("end")
      .attr("text-anchor","end")
      .attr("dominant-baseline","middle")
      .attr("x",newX+200)
      .attr("y",210)
      .attr("stroke","blue")
      .attr("fill","none")
      .attr("font-size","30");
//add line
svg.append("line")
      .attr("x1",newX+200)
      .attr("y1","150")
      .attr("x2",newX+200)
      .attr("y2","210");