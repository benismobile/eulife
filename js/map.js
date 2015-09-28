var country_lookup = {} ;

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


 country_lookup =
    {
        "eu27":{"country":"European Union", "filter":"22:2", "code":"eu27"} ,
        "AT":{"country":"Austria", "filter":"2:1", "code":"AT"} ,
        "BE":{"country":"Belgium", "filter":"2:2", "code":"BE"} ,
        "BG":{"country":"Bulgaria", "filter":"2:3", "code":"BG"} ,
        "CY":{"country":"Cyprus", "filter":"2:4", "code":"CY"} ,
        "CZ":{"country":"Czech Republic", "filter":"2:5", "code":"CZ"} ,
        "DE":{"country":"Germany", "filter":"2:6", "code":"DE"} ,
        "DK":{"country":"Denmark", "filter":"2:7", "code":"DE"},
        "EE":{"country":"Estonia", "filter":"2:8", "code":"EE"},
        "EL":{"country":"Greece", "filter":"2:9", "code":"EL"},
        "ES":{"country":"Spain", "filter":"2:10", "code":"ES"},
        "FI":{"country":"Finland", "filter":"2:11", "code":"FI"},
        "FR":{"country":"France", "filter":"2:12", "code":"FR"},
        "HU":{"country":"Hungary", "filter":"2:13", "code":"HU"},
        "IE":{"country":"Ireland", "filter":"2:14", "code":"IE"},
        "IT":{"country":"Italy", "filter":"2:15", "code":"IT"},
        "LT":{"country":"Lithuania", "filter":"2:16", "code":"LT"},
        "LU":{"country":"Luxembourg", "filter":"2:17", "code":"LU"},
        "LV":{"country":"Latvia", "filter":"2:18", "code":"LV"},
        "MT":{"country":"Malta", "filter":"2:19", "code":"MT"},
        "NL":{"country":"Neverlands", "filter":"2:20", "code":"NL"},
        "PL":{"country":"Poland", "filter":"2:21", "code":"PL"},
        "PT":{"country":"Portugal", "filter":"2:22", "code":"PT"},
        "RO":{"country":"Romania", "filter":"2:23", "code":"RO"},
        "SE":{"country":"Sweden", "filter":"2:24", "code":"SE"},
        "SI":{"country":"Slovenia", "filter":"2:25", "code":"SI"},
        "SK":{"country":"Slovakia", "filter":"2:26", "code":"SK"},
        "UK":{"country":"United Kingdom", "filter":"2:27", "code":"UK"}
          
   };
    
   /* 
country_lookup =
    {
       
       "eu27":{"country":"European Union", "filter":"22:2", "code":"eu27"},
      "IT":{"country":"Italy", "filter":"2:15", "code":"IT"},
    "UK":{"country":"United Kingdom", "filter":"2:27", "code":"UK"},
         "EL":{"country":"Greece", "filter":"2:9", "code":"EL"}
          
   };    
    */
    
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
               return "country country_" + d.properties.CNTR_ID + " " + eu_terr; 
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
               return  eu_terr + " path"  + d.properties.CNTR_ID ; 
           });

         


    
    

    svg.selectAll(".country-label")
        .data(topojson.feature(eu, eu.objects.countries).features)
        .enter()
        .append("text")
        .attr("class", function(d) { return "countrylabel countrylabel"  + d.properties.CNTR_ID; })
        .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
        .attr("dy", ".35em")
        .attr("code", function(d) { return  d.properties.CNTR_ID })
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

    
} // ends draw map

function showCountryEmotion(closestEmotion, country) {
    
    var countrylabel = d3.select(".countrylabel" + country) ;
            
     countrylabel.transition()
            .duration(250)                              
            .attr("font-size", "20px")
            .text(function(d){ 
               // return closestEmotion.emoji ;
               var countryName = country_lookup[country].country ;
               return countryName + "\n" + closestEmotion.emoji ;
            }) ;
    
    
} // ends showCountryEmotion

function clearMap()
{

     var countrylabels = d3.selectAll(".countrylabel") ;
            
     countrylabels.transition()
            .duration(250)                              
            .attr("font-size", "12px")
            .text(function(d){ return d.code } ) ;
}