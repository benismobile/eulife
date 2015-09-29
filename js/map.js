var country_lookup = {} ;

function drawMap()
{

//var width = 960,
//    height = 1160;

var width = 620,
    height = 700;    
    
var countryCodes = {} ;
// .center([3.9,43.0]) 
    // .scale(1700)
   // .clipExtent([[0, 50], [width-285, height-400]])
var projection = d3.geo.stereographic()
    .scale(1700)
    .center([-7.5,49.0])    
    .translate([width / 2, height / 2])
    .rotate([-20, 0])
    .clipAngle(180 - 1e-4)
    .clipExtent([[0, 0], [width, height]])
    .precision(.1);

var path = d3.geo.path()
    .projection(projection)
    .pointRadius(2);

var flagcodes = 
    
    {
        "A":"\uD83C\uDDE6",
        "B":"\uD83C\uDDE7",
        "C":"\uD83C\uDDE8",
        "D":"\uD83C\uDDE9",
        "E":"\uD83C\uDDEA",
        "F":"\uD83C\uDDEB",
        "G":"\uD83C\uDDEC",
        "H":"\uD83C\uDDED",
        "I":"\uD83C\uDDEE",
        "J":"\uD83C\uDDEF",
        "K":"\uD83C\uDDF0",
        "L":"\uD83C\uDDF1",
        "M":"\uD83C\uDDF2",
        "N":"\uD83C\uDDF3",
        "O":"\uD83C\uDDF4",
        "P":"\uD83C\uDDF5",
        "Q":"\uD83C\uDDF6",
        "R":"\uD83C\uDDF7",
        "S":"\uD83C\uDDF8",
        "T":"\uD83C\uDDF9",
        "U":"\uD83C\uDDFA",
        "V":"\uD83C\uDDFB",
        "W":"\uD83C\uDDFC",
        "X":"\uD83C\uDDFD",
        "Y":"\uD83C\uDDFE",
        "Z":"\uD83C\uDDFF"        
    };
    
 country_lookup =
    {
        "eu27":{"country":"European Union", "filter":"22:2", "code":"eu27", "emoji":"" + flagcodes.E + flagcodes.U} ,
        "AT":{"country":"Austria", "filter":"2:1", "code":"AT", "emoji":"" + flagcodes.A + flagcodes.T } ,
        "BE":{"country":"Belgium", "filter":"2:2", "code":"BE","emoji":"" + flagcodes.B + flagcodes.E} ,
        "BG":{"country":"Bulgaria", "filter":"2:3", "code":"BG", "emoji":"" + flagcodes.B + flagcodes.G} ,
        "CY":{"country":"Cyprus", "filter":"2:4", "code":"CY", "emoji":"" + flagcodes.C + flagcodes.Y} ,
        "CZ":{"country":"Czech Republic", "filter":"2:5", "code":"CZ", "emoji":"" + flagcodes.C + flagcodes.Z} ,
        "DE":{"country":"Germany", "filter":"2:6", "code":"DE", "emoji":"" + flagcodes.D + flagcodes.E} ,
        "DK":{"country":"Denmark", "filter":"2:7", "code":"DK","emoji":"" + flagcodes.D + flagcodes.K},
        "EE":{"country":"Estonia", "filter":"2:8", "code":"EE","emoji":"" + flagcodes.E + flagcodes.E},
        "EL":{"country":"Greece", "filter":"2:9", "code":"EL","emoji":"" + flagcodes.G + flagcodes.R},
        "ES":{"country":"Spain", "filter":"2:10", "code":"ES","emoji":"" + flagcodes.E + flagcodes.S},
        "FI":{"country":"Finland", "filter":"2:11", "code":"FI","emoji":"" + flagcodes.F + flagcodes.I},
        "FR":{"country":"France", "filter":"2:12", "code":"FR","emoji":"" + flagcodes.F + flagcodes.R},
        "HU":{"country":"Hungary", "filter":"2:13", "code":"HU", "emoji":"" + flagcodes.H + flagcodes.U},
        "IE":{"country":"Ireland", "filter":"2:14", "code":"IE", "emoji":"" + flagcodes.I + flagcodes.E},
        "IT":{"country":"Italy", "filter":"2:15", "code":"IT","emoji":"" + flagcodes.I + flagcodes.T},
        "LT":{"country":"Lithuania", "filter":"2:16", "code":"LT","emoji":"" + flagcodes.L + flagcodes.T},
        "LU":{"country":"Luxembourg", "filter":"2:17", "code":"LU","emoji":"" + flagcodes.L + flagcodes.U},
        "LV":{"country":"Latvia", "filter":"2:18", "code":"LV","emoji":"" + flagcodes.L + flagcodes.V},
        "MT":{"country":"Malta", "filter":"2:19", "code":"MT","emoji":"" + flagcodes.M + flagcodes.T},
        "NL":{"country":"Neverlands", "filter":"2:20", "code":"NL","emoji":"" + flagcodes.N + flagcodes.L},
        "PL":{"country":"Poland", "filter":"2:21", "code":"PL","emoji":"" + flagcodes.P + flagcodes.L},
        "PT":{"country":"Portugal", "filter":"2:22", "code":"PT","emoji":"" + flagcodes.P + flagcodes.T},
        "RO":{"country":"Romania", "filter":"2:23", "code":"RO","emoji":"" + flagcodes.R + flagcodes.O},
        "SE":{"country":"Sweden", "filter":"2:24", "code":"SE","emoji":"" + flagcodes.S + flagcodes.E},
        "SI":{"country":"Slovenia", "filter":"2:25", "code":"SI","emoji":"" + flagcodes.S + flagcodes.I},
        "SK":{"country":"Slovakia", "filter":"2:26", "code":"SK","emoji":"" + flagcodes.S + flagcodes.K},
        "UK":{"country":"United Kingdom", "filter":"2:27", "code":"UK","emoji":"" + flagcodes.G + flagcodes.B}
          
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
        .attr("dy", ".5em")
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
       
           svg.selectAll(".countryemoji")
        .data(topojson.feature(eu, eu.objects.countries).features)
        .enter()
        .append("text")
        .attr("class", function(d) { return "countryemoji countryemoji"  + d.properties.CNTR_ID; })
        .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
        .attr("dy", "-0.35em")
        .attr("code", function(d) { return  d.properties.CNTR_ID })
        .attr("font-size",32)
        .attr("style", "fill-opacity:1.0;")
        .style("text-anchor", function(d) { return "middle" ; })
        .text(function(d) {  
            var country = countryCodes.features.filter( function(p) {
                    return d.properties.CNTR_ID && d.properties.CNTR_ID == p.properties.CNTR_ID ;
                 }) ;
                  
              return  country[0].properties.EU_TERR !== null && country_lookup[country[0].properties.CNTR_ID]  ? country_lookup[country[0].properties.CNTR_ID].emoji  : ""   ;
              

             });
       
       
    
  });    
    
});

    
} // ends draw map

function showCountryEmotion(closestEmotion, country) {
    
    var countryemoji = d3.select(".countryemoji" + country) ;
            
    // show flag and emotion for country
     countryemoji.transition()
            .duration(250)                              
            .attr("font-size", "20px")
            .text(function(d){ 
               // return closestEmotion.emoji ;
               //var countryName = country_lookup[country].country ;
               return country_lookup[country].emoji + closestEmotion.emoji ;
            }) ;
    
    
    var countrylabel = d3.select(".countrylabel" + country) ;
            
    // do not show country label anymore
     countrylabel.transition()
            .duration(250)                              
            .attr("font-size", "20px")
            .attr("fill","none") ;
    
} // ends showCountryEmotion

function clearMap() 
{

     var countrylabels = d3.selectAll(".countrylabel") ;
            
     countrylabels.transition()
            .duration(250)                              
            .attr("font-size", "12px")
            .text(function(d){ return d.code } ) ;
}