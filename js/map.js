function drawMap()
{

var width = 960,
    height = 1160;

var countryCodes = {} ;

var projection = d3.geo.stereographic()
    .scale(1700)
    .center([3.9,43.0])    
    .translate([width / 2, height / 2])
    .rotate([-20, 0])
    .clipAngle(180 - 1e-4)
    .clipExtent([[0, 50], [width-285, height-400]])
    .precision(.1);

var path = d3.geo.path()
    .projection(projection)
    .pointRadius(2);


var svg = d3.select("body").select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("data/codes.json", function(error, codes) {

  if (error) 
     return console.error(error);
  
  countryCodes = codes ;   

   d3.json("data/eu.json", function(error, eu) {
      if (error) return console.error(error);

     var countries = svg.selectAll(".country")
       .data(topojson.feature(eu, eu.objects.countries).features)
        .enter().append("g")
           .attr("class", function(d) { 
             
               var eu_terr = "" ;

               var country = countryCodes.features.filter( function(p) {
                   return d.properties.CNTR_ID && d.properties.CNTR_ID == p.properties.CNTR_ID ;
               }) ;

               eu_terr =  country[0].properties.EU_TERR !== null ?  "eu" : ""   ;
               return "country " + d.properties.CNTR_ID + " " + eu_terr; 
           })
           .attr("code", function(d)
           {
              var country = countryCodes.features.filter( function(p) {
                   return d.properties.CNTR_ID && d.properties.CNTR_ID == p.properties.CNTR_ID ;
              }) ;

              return country[0].properties.CNTR_ID ;
           })
          .attr("name", function(d)
          {
               var country = countryCodes.features.filter( function(p) {
               return d.properties.CNTR_ID && d.properties.CNTR_ID == p.properties.CNTR_ID ;
                 }) ;

               return country[0].properties.NAME_ENGL ;
          })
          .append("path")
             .attr("d", d3.geo.path().projection(projection))
             .attr("fill","#ddc") 
             .attr("stroke-width", 1)
             .attr("stroke", "white")
             .attr("class", function(d) { 
             
                 var eu_terr = "" ;

                 var country = countryCodes.features.filter( function(p) {
                   return d.properties.CNTR_ID && d.properties.CNTR_ID == p.properties.CNTR_ID ;
               }) ;

               eu_terr =  country[0].properties.EU_TERR !== null ?  "eupath" : ""   
               return eu_terr; 
           });

         


    
    

    svg.selectAll(".country-label")
        .data(topojson.feature(eu, eu.objects.countries).features)
        .enter()
        .append("text")
        .attr("class", function(d) { return "country-label "  })
        .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .attr("font-size",10)
        .attr("style", "fill-opacity:1.0;")
        .style("text-anchor", function(d) { return "middle" ; })
        .text(function(d) {  
            var country = countryCodes.features.filter( function(p) {
                    return d.properties.CNTR_ID && d.properties.CNTR_ID == p.properties.CNTR_ID ;
                 }) ;
              return  country[0].properties.EU_TERR !== null ?  country[0].properties.NAME_ENGL + " " + d.properties.CNTR_ID: ""   ;
              

             });
    
  });    
    
});

    
}