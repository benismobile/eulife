
function drawWheel(viz)
{



var svgContainer = d3.select("#wheel").append("svg")
                                    .attr("width", viz.width)
                                   .attr("height", viz.height);      
    
    
var wheelColors = [
         "blue",
         "purple",
         "red",
         "orange",
         "yellow",
         "greenyellow",
         "green",
         "lightseagreen"
         ];

    var emotionalStates = {
     
        "1":["grief","sadness","pensieveness"], 
        "2":["loathing","disgust","boredom"], 
        "3":["rage","anger","annoyance"], 
        "4":["vigilance","anticipation","interest"], 
        "5":["ectasy","joy","serenity"],
        "6":["admiration","trust","acceptance"], 
        "7":["terror","fear","apprehension"], 
        "8":["amazement", "surprise", "fear"]
    }
     
     var r1 = (viz.width * (1/5)) - 5 ; 
     var r2 = viz.width * (1.5 / 5) - 5  ;
     var r3 = viz.width * (2/5) - 5 ;
     var r4 = viz.width * (2.5/5)  - 5;
    
     var pathCommand = "" ;
     
     var centerX = (viz.width / 2) ;
     var centerY = (viz.height / 2) ;
     var lastCircumfrancePoint = {"deltaX":0, "deltaY":0} ;
     var  lastSectionAngleShifted = 0 ;
     
     for(var section = 1 ; section < 10 ; section++)
     {
        // move to the centre point 
        pathCommand = "M " + centerX + " " + centerY  ;
         // set pie angle to 45 degrees 
        angle = Math.PI/4 ; 
        // increase angle to this segment of pie
        sectionAngle = angle * section ;
         // shfit the angle by 22.5% to shift the segments in pie from default unit circle
        sectionAngleShifted = sectionAngle + (Math.PI/8) ;
        var deltaX =  Math.cos(sectionAngleShifted) * r1 ;
        var deltaY =  Math.sin(sectionAngleShifted) * r1 ;
        
        // get pie segment center for text postioning
        var deltaXTxt =  Math.cos(sectionAngle) * (r1/1.35) ;
        var deltaYTxt =  Math.sin(sectionAngle) * (r1/1.35) ;
      
         
         // drae line from centre point to the point on circle defined by segment angle and radius of pie
        pathCommand = pathCommand + " L " + (centerX + deltaX ) + " " + (centerY + deltaY) ;
         
        
        if(section > 1)
        {
            pathCommand = pathCommand + " A " + r1 + " " + r1 +" 0 0 0 " + (centerX + lastCircumfrancePoint.deltaX) + " " + (centerY + lastCircumfrancePoint.deltaY );
           
             var segmentGroup = svgContainer.append("g")
                 .attr("class","whlsegment")
                 .attr("id", function (d) { return emotionalStates[section-1][0] ; })  ;
            
            
               // add path to svg element
             segmentGroup.append("path")
                 .attr("d", pathCommand)
                 .attr("stroke", "black")
                 .attr("stroke-width", "2")
                 .attr("fill", wheelColors[section-2]  ) 
                 .attr("opacity", "0.85") ;
                      
             var txt = segmentGroup.append("text")
                 .attr("font","Ariel")
                 .attr("x", function(d){return "" + (centerX + deltaXTxt ) })
                 .attr("y", function(d){return "" + (centerY + deltaYTxt )  })
                 .attr("text-anchor", "middle")
                 .attr("font-size", "12px")
                 .attr("style", "fill-opacity:1;")
                 .text( function (d) { return emotionalStates[section-1][0] ; }) ;
            
            
            
            
            r2OffsetAngle = Math.PI / 24 ;
            var deltaOffsetXr2 =  Math.cos(sectionAngleShifted - r2OffsetAngle) * r2 ;
            var deltaOffsetYr2 =  Math.sin(sectionAngleShifted - r2OffsetAngle ) * r2 ;
            
            //offset to center text
            var sectionCenterRadius = r1 + ((r2-r1)/2) ;
        
            var deltaOffsetXr2Txt =  Math.cos(sectionAngle) * sectionCenterRadius ;
            var deltaOffsetYr2Txt =  Math.sin(sectionAngle) * sectionCenterRadius ;
            
            
            var lastDeltaOffsetXr2 =  Math.cos(lastSectionAngleShifted + r2OffsetAngle) * r2 ;
            var lastDeltaOffsetYr2 =  Math.sin(lastSectionAngleShifted + r2OffsetAngle ) * r2 ;
            
            
            var pathCommand2 = "M " + (centerX + deltaX ) + " " + (centerY + deltaY ) +
                               " L " + (centerX + deltaOffsetXr2 ) + " " + (centerY + deltaOffsetYr2 ) +
            " A " + r2 + " " + r2 +" 0 0 0 " + (centerX + lastDeltaOffsetXr2) + " " + (centerY + lastDeltaOffsetYr2 ) +
                " L " + (centerX + lastCircumfrancePoint.deltaX  ) + " " + (centerY + lastCircumfrancePoint.deltaY  ) +
                " A " + r1 + " " + r1 +" 0 0 1 " + (centerX + deltaX) + " " + (centerY + deltaY );
           
            
             var segmentGroup = svgContainer.append("g")
                 .attr("class","whlsegment")
                 .attr("id", function (d) { return emotionalStates[section-1][1] ; })  ;
            
            
            segmentGroup.append("path")
                 .attr("d", pathCommand2)
                 .attr("stroke", "black")
                 .attr("stroke-width", "2")
                 .attr("fill", wheelColors[section-2] ) 
                 .attr("opacity", "0.75") ;
            
              var txt = segmentGroup.append("text")
                 .attr("font","Ariel")
                 .attr("x", function(d){return "" + (centerX + deltaOffsetXr2Txt ) })
                 .attr("y", function(d){return "" + (centerY + deltaOffsetYr2Txt ) })
                 .attr("text-anchor", "middle")
                 .attr("font-size", "12px")
                 .attr("style", "fill-opacity:1;")
                 .attr("fill", "black")
                 .text( function (d) { return emotionalStates[section-1][1] ; }) ;
            
            
            
            
             r3OffsetAngle = Math.PI / 12 ;
            var deltaOffsetXr3 =  Math.cos(sectionAngleShifted - r3OffsetAngle) * r3 ;
            var deltaOffsetYr3 =  Math.sin(sectionAngleShifted - r3OffsetAngle ) * r3 ;
            var lastDeltaOffsetXr3 =  Math.cos(lastSectionAngleShifted + r3OffsetAngle) * r3 ;
            var lastDeltaOffsetYr3 =  Math.sin(lastSectionAngleShifted + r3OffsetAngle ) * r3 ;
            
            
            //offset to center text
            var sectionCenterRadius = r2 + ((r3-r2)/2) ;
        
            var deltaOffsetXr3Txt =  Math.cos(sectionAngle) * sectionCenterRadius ;
            var deltaOffsetYr3Txt =  Math.sin(sectionAngle) * sectionCenterRadius ;
            
            
            var pathCommand3 = "M " + (centerX + deltaOffsetXr2 ) + " " + (centerY + deltaOffsetYr2 ) +
                               " L " + (centerX + deltaOffsetXr3 ) + " " + (centerY + deltaOffsetYr3 ) +
            " A " + r3 + " " + r3 +" 0 0 0 " + (centerX + lastDeltaOffsetXr3) + " " + (centerY + lastDeltaOffsetYr3 ) +
                " L " + (centerX + lastDeltaOffsetXr2 ) + " " + (centerY + lastDeltaOffsetYr2 ) +
                " A " + r2 + " " + r2 +" 0 0 1 " + (centerX + deltaOffsetXr2) + " " + (centerY + deltaOffsetYr2 )
                
                ;
            
            
            var segmentGroup = svgContainer.append("g")
                 .attr("class","whlsegment")
                 .attr("id", function (d) { return emotionalStates[section-1][2] ; })  ;
            
             svgContainer.append("path")
                 .attr("d", pathCommand3)
                 .attr("stroke", "black")
                 .attr("stroke-width", "2")
                 .attr("fill", wheelColors[section-2] ) 
                 .attr("opacity", "0.5") ;
            
             var txt = segmentGroup.append("text")
                 .attr("font","Ariel")
                 .attr("x", function(d){return "" + (centerX + deltaOffsetXr3Txt ) })
                 .attr("y", function(d){return "" + (centerY + deltaOffsetYr3Txt ) })
                 .attr("text-anchor", "middle")
                 .attr("font-size", "12px")
                 .attr("style", "fill-opacity:1;")
                 .attr("fill", "black")
                 .text( function (d) { return emotionalStates[section-1][2] ; }) ;
            
            
            
            r4OffsetAngle = Math.PI / 8 ;
            var deltaOffsetXr4 =  Math.cos(sectionAngleShifted - r4OffsetAngle) * r4 ;
            var deltaOffsetYr4 =  Math.sin(sectionAngleShifted - r4OffsetAngle ) * r4 ;
            var lastDeltaOffsetXr4 =  Math.cos(lastSectionAngleShifted + r4OffsetAngle) * r4 ;
            var lastDeltaOffsetYr4 =  Math.sin(lastSectionAngleShifted + r4OffsetAngle ) * r4 ;
            
            var pathCommand4 = " M " + (centerX + deltaOffsetXr3) + " " + (centerY + deltaOffsetYr3) +
             " L " + (centerX + deltaOffsetXr4 ) + " " + (centerY + deltaOffsetYr4 ) +
                " L " +  (centerX + lastDeltaOffsetXr3) + " " + (centerY + lastDeltaOffsetYr3 ) + 
                " A " + r3 + " " + r3 +" 0 0 1 " + (centerX + deltaOffsetXr3) + " " + (centerY + deltaOffsetYr3) ;
            
            
              var segmentGroup = svgContainer.append("g")
                 .attr("class","whlsegment")
                 .attr("id", function (d) { return emotionalStates[section-1][2] ; })  ;
         
                
                                           
             var path = segmentGroup.append("path")
                 .attr("d", pathCommand4)
                 .attr("stroke", "black")
                 .attr("stroke-width", "2")
                 .attr("fill", wheelColors[section-2] ) 
                 .attr("opacity", "0.25")
                 .on("mouseover", function(d) { 
                     var segment = d3.select(this)
                         segment.transition()
                                .duration(500)
                                .ease("linear")
                                .attr("stroke-width", "5")
                                .attr("opacity", "1.0") ; }
                    
                    
                    )
                  .on("mouseout", function(d) { 
                     var segment = d3.select(this)
                         segment.transition()
                                .duration(500)
                                .ease("linear")
                                .attr("stroke-width", "2")
                                .attr("opacity", "0.25") ;; }
                    
                    
                    );
            
             
             
        }
         
         
         lastCircumfrancePoint.deltaX = deltaX ;
        lastCircumfrancePoint.deltaY = deltaY ;
         lastSectionAngleShifted = sectionAngleShifted ;
      
     }
}