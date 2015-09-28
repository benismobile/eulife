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
        "8":["amazement", "surprise", "distraction"]
    };
    
    var blendedStates = {
     
        "1":["remorse", "sadness","disgust"], 
        "2":["contempt","disgust", "anger"], 
        "3":["aggressiveness", "anger", "anticipation"], 
        "4":["optimism", "anticipation","joy"], 
        "5":["love", "joy", "trust"],
        "6":["submission", "trust", "fear"], 
        "7":["awe", "fear", "surprise"], 
        "8":["disapproval", "surprise", "sadness"]
    };
    
     var blendedStateComponents = {
     
        "remorse":["sadness","disgust"], 
        "contempt":["disgust", "anger"], 
        "aggressiveness":["anger", "anticipation"], 
        "optimism":["anticipation","joy"], 
        "love":["joy", "trust"],
        "submission":["trust", "fear"], 
        "awe":["fear", "surprise"], 
        "disapproval":["surprise", "sadness"]
    };
     


function drawWheel(viz)
{



var svgContainer = d3.select("#wheel").append("svg")
                                    .attr("width", viz.width)
                                   .attr("height", viz.height);      
    

    
var defs = svgContainer.append("defs") ;
                
    

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
                 .attr("class",function(){ return "emotion whlsegment section" + (section-1) + " level1" })
                 .attr("id", function (d) { return emotionalStates[section-1][0] ; })  ;
            
            
               // add path to svg element
             segmentGroup.append("path")
                 .attr("d", pathCommand)
                 .attr("stroke", "black")
                 .attr("stroke-width", "2")
                 .attr("fill", wheelColors[section-2]  ) 
                 .attr("opacity", "0.85") 
                 .on("mouseover", function(d) { 
                  
                     var segment = d3.select(this.parentNode) ;
                     segmentFocus(segment, 0.9) ; 
                 })
                 .on("mouseout", function(d) { 
                     var segment = d3.select(this.parentNode) ;
                     segmentUnFocus(segment,0.85) ;
                 });
                      
             var txt = segmentGroup.append("text")
                 .attr("font","Ariel")
                 .attr("x", function(d){return "" + (centerX + deltaXTxt ) })
                 .attr("y", function(d){return "" + (centerY + deltaYTxt )  })
                 .attr("text-anchor", "middle")
                 .attr("font-size", "12px")
                 .attr("style", "fill-opacity:1;")
                 .text( function (d) { return emotionalStates[section-1][0] ; }) 
                 .on("mouseover", function(d) { 
                  
                     var segment = d3.select(this.parentNode) ;
                     segmentFocus(segment, 0.9) ; 
                 })
                 .on("mouseout", function(d) { 
                     var segment = d3.select(this.parentNode) ;
                     segmentUnFocus(segment,0.85) ;
                 });
            
            
            
            
            
            
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
                 .attr("class",function(){ return "emotion whlsegment section" + (section-1) + " level2"  })
                 .attr("id", function (d) { return emotionalStates[section-1][1] ; })  ;
            
            
            segmentGroup.append("path")
                 .attr("d", pathCommand2)
                 .attr("stroke", "black")
                 .attr("stroke-width", "2")
                 .attr("fill", wheelColors[section-2] ) 
                 .attr("opacity", "0.75") 
                 .on("mouseover", function(d) { 
                  
                     var segment = d3.select(this.parentNode) ;
                     segmentFocus(segment, 0.9) ; 
                 })
                 .on("mouseout", function(d) { 
                     var segment = d3.select(this.parentNode) ;
                     segmentUnFocus(segment,0.75) ;
                 });
            
              var txt = segmentGroup.append("text")
                 .attr("font","Ariel")
                 .attr("x", function(d){return "" + (centerX + deltaOffsetXr2Txt ) })
                 .attr("y", function(d){return "" + (centerY + deltaOffsetYr2Txt ) })
                 .attr("text-anchor", "middle")
                 .attr("font-size", "12px")
                 .attr("style", "fill-opacity:1;")
                 .attr("fill", "black")
                 .text( function (d) { return emotionalStates[section-1][1] ; }) 
                 .on("mouseover", function(d) { 
                  
                     var segment = d3.select(this.parentNode) ;
                     segmentFocus(segment, 0.9) ; 
                 })
                 .on("mouseout", function(d) { 
                     var segment = d3.select(this.parentNode) ;
                     segmentUnFocus(segment,0.75) ;
                 });
            
        
            
            
                 
            // draw text path for blended emotion
            
             var blendLineX =  Math.cos(sectionAngleShifted) * r4 ;
             var blendLineY =  Math.sin(sectionAngleShifted) * r4 ;
             var startOffset = "50%" ;
             if(section > 5)
             {
                pathCommand = "M " + centerX + " " + centerY  ;
                pathCommand = pathCommand + " L " + (centerX + blendLineX ) + " " + (centerY + blendLineY) ;
                startOffset = "70%" ;     
             }
             else
             {
                pathCommand = "M " + (centerX + blendLineX ) + " " + (centerY + blendLineY)  ;
                pathCommand = pathCommand + " L " +  centerX + " " + centerY  ;
                startOffset = "10%" ;
             }
            
            /*
             svgContainer.append("path")
                 .attr("d", pathCommand ) 
                 .attr("stroke", "black")
                 .attr("stroke-width", "2") ;
            */
               // add path to defs element
        
            defs.append("path")
                 .attr("d", pathCommand)
                 .attr("id", function (d) { return blendedStates[section-1][0] + "Path" ; }) ;
            
        
           
             var txtPath = segmentGroup.append("text")
                 .attr("font","Ariel") 
                 .attr("font-size", "12px")
                 .attr("id", function (d) { return blendedStates[section-1][0] ; })
                 .on("mouseover", function(d) { 
                  
                    // var segment = d3.select(this.parentNode) ;
                     blendedFocus(this, 0.9) ; 
                 })
                 .on("mouseout", function(d) { 
                    // var segment = d3.select(this.parentNode) ;
                     blendedUnFocus(this,0.85) ;
                 });
                 
            
             txtPath.append("textPath")
               .attr("xlink:href", function (d) { return "#" + blendedStates[section-1][0] + "Path" ; })
               .attr("startOffset", startOffset)
               .text( function (d) { return blendedStates[section-1][0] ; }) ;
                
               
            
            
            
            
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
                  .attr("class",function(){ return "emotion whlsegment section" + (section-1) + " level3" })
                 .attr("id", function (d) { return emotionalStates[section-1][2] ; }) ;   
                 
           
            
            ;
            
           
            
             segmentGroup.append("path")
                 .attr("d", pathCommand3)
                 .attr("stroke", "black")
                 .attr("stroke-width", "2")
                 .attr("fill", wheelColors[section-2] ) 
                 .attr("opacity", "0.5")
                 .on("mouseover", function(d) { 
                  
                     var segment = d3.select(this.parentNode) ;
                     segmentFocus(segment, 0.9) ; 
                 })
                 .on("mouseout", function(d) { 
                     var segment = d3.select(this.parentNode) ;
                     segmentUnFocus(segment,0.5) ;
                 });
             
            
           
              var txt = segmentGroup.append("text")
                 .attr("font","Ariel")
                 .attr("x", function(d){return "" + (centerX + deltaOffsetXr3Txt ) })
                 .attr("y", function(d){return "" + (centerY + deltaOffsetYr3Txt ) })
                 .attr("text-anchor", "middle")
                 .attr("font-size", "12px")
                 .attr("style", "fill-opacity:1.0;")
                 .attr("fill", "black")
                 .text( function (d) { return emotionalStates[section-1][2] ; }) 
                 .on("mouseover", function(d) { 
                  
                     var segment = d3.select(this.parentNode) ;
                     segmentFocus(segment, 0.9) ; 
                 })
                 .on("mouseout", function(d) { 
                     var segment = d3.select(this.parentNode) ;
                     segmentUnFocus(segment,0.5) ;
                 });
            
            
             
            
            
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
                  .attr("class",function(){ return "emotion whlsegment section" + (section-1) + " level4" })
                 .attr("id", function (d) { return emotionalStates[section-1][2] ; })  ;
         
                
                     
            
            
             var path = segmentGroup.append("path")
                 .attr("d", pathCommand4)
                 .attr("stroke", "black")
                 .attr("stroke-width", "2")
                 .attr("fill", wheelColors[section-2] ) 
                 .attr("opacity", "0.25");
                 
            
             
            
             
        }
         
         
         lastCircumfrancePoint.deltaX = deltaX ;
        lastCircumfrancePoint.deltaY = deltaY ;
         lastSectionAngleShifted = sectionAngleShifted ;
      
     }
    
    var emotionPoints = [] ;
    
    for (var emotionId in emotions) {
      if( emotions.hasOwnProperty(emotionId) ) {
        
          var referenceEmotion = emotions[emotionId] ;
        //  console.log("reference emotion" +   referenceEmotion.emotion ) ;
            referenceEmotion.id = emotionId ; 
       // var emotionVector = referenceEmotion.vector ;
            emotionPoints.push(referenceEmotion) ;          
        }
    
    }
    
  // add circles to represent each emotion point
     var circle = svgContainer.selectAll("circle")
    .data(emotionPoints)
    .enter().append("circle")
      .attr("cy", function(d) { 
         var spinePoint = (1 / 10) * (viz.width/2) ;  
         var cy = centerY - (d.display_vector.y * spinePoint) ; 
         return cy ;
       })
      .attr("cx", function(d) { 
          
          var spinePoint = (1/ 10) * (viz.width/2) ;  
          var cx =  centerX + (d.display_vector.x * spinePoint) ;
          return cx ; 
      })
      .attr("id", function(d) {
            return "ePoint" + d.id ;   
      })
      .attr("name", function(d) {
          return d.emotion ;
     })
      .attr("level", function(d) {
          return d.level ;  
     })
      .attr("class", function(d) {
            return "ePoint ePoint_" + d.id + " ePoint_" + d.emotion  
       })
       .attr("fill", "none")
       .attr("opacity", 0.5)
      .attr("r", function(d) { return 15; });
    
   
    
    
    var emojii = svgContainer.selectAll(".emojiPoint")
       .data(emotionPoints)
       .enter().append("text")
                 .attr("font","Ariel")
                 .attr("x", function(d){
                     var spinePoint = (1 / 10) * (viz.width/2) ;  
                     var x = centerX + (d.display_vector.x * spinePoint) ; 
                     return x ;
                     
                 })
                 .attr("y", function(d){
                  
                     var spinePoint = (1 / 10) * (viz.width/2) ;  
                     var y = centerY - (d.display_vector.y * spinePoint) ; 
                     return y ;
                     
                 })
                .attr("dy" , "0.5em")
                .attr("class", function(d) {
            return "emojiPoint emojiPoint_" + d.id + " emojiPoint_" + d.emotion  
                  })
                 .attr("text-anchor", "middle")
                 .attr("font-size", "24px")
                 .attr("style", "fill-opacity:1.0;")
                 .attr("style", "text-align: center;")
                 .attr("fill", "none")
                 .text( function (d) {
                     return d.emoji; 
                 }) 
  
    
    
  } // ends fuction draw wheel  
    
    function blendedFocusSelected(blendTxtNode, opacity)
    {
        var blendedNodeId = blendTxtNode.attr("id") ;
        console.log("blendTxtNode:" + blendedNodeId ) ; 
        
         
        var blendedComponent1 = blendedStateComponents[""+blendedNodeId][0];
        var blendedComponent2 = blendedStateComponents[""+blendedNodeId][1];
        var component1 = d3.select("#" + blendedComponent1) ;
        var component2 = d3.select("#" + blendedComponent2) ;
        
      
       var segmentText = component1.select("text") ;
     
      /*    
       segmentText.transition()
                .duration(1000)
                .ease("linear")
                .attr("font-size","24px")
                .attr("fill","black")
                .attr("opacity", 1.0) ;
        
       var segmentText2 = component2.select("text") ;
       segmentText2.transition()
                .duration(1000)
                .ease("linear")
                .attr("font-size","24px")
                .attr("fill","black")
                .attr("opacity", 1.0) ;
        
        */
        
        blendTxtNode.transition()
                .duration(1000)
                .ease("linear")
                .attr("font-size","20px")
                .attr("fill","black")
                .attr("opacity", 1.0) ;
        
        
        
    }

    function blendedFocus(blendTxtNode, opacity)
    {
    
        
        
        var blendedNodeId = d3.select(blendTxtNode).attr("id") ;
        var blendedComponent1 = blendedStateComponents[""+blendedNodeId][0];
        var blendedComponent2 = blendedStateComponents[""+blendedNodeId][1];
        var component1 = d3.select("#" + blendedComponent1) ;
        var component2 = d3.select("#" + blendedComponent2) ;
        
      
       var segmentText = component1.select("text") ;
       segmentText.transition()
                .duration(1000)
                .ease("linear")
                .attr("font-size","24px")
                .attr("fill","black")
                .attr("opacity", 1.0) ;
        
       var segmentText2 = component2.select("text") ;
       segmentText2.transition()
                .duration(1000)
                .ease("linear")
                .attr("font-size","24px")
                .attr("fill","black")
                .attr("opacity", 1.0) ;
        
        
        
        d3.select(blendTxtNode).transition()
                .duration(1000)
                .ease("linear")
                .attr("font-size","20px")
                .attr("fill","black")
                .attr("opacity", 1.0) ;
      
        
        
    }
    
    
    function blendedUnFocus(blendTxtNode, opacity)
    {
    
        console.log("blendedUnfocus") ;
        
        var blendedNodeId = d3.select(blendTxtNode).attr("id") ;
        var blendedComponent1 = blendedStateComponents[""+blendedNodeId][0];
        var blendedComponent2 = blendedStateComponents[""+blendedNodeId][1];
        var component1 = d3.select("#" + blendedComponent1) ;
        var component2 = d3.select("#" + blendedComponent2) ;
        
       var segmentText = component1.select("text") ;
       segmentText.transition()
                .duration(1000)
                .ease("linear")
                .attr("font-size","12px")
                .attr("fill","black")
                .attr("opacity", opacity) ;
        
       var segmentText2 = component2.select("text") ;
       segmentText2.transition()
                .duration(1000)
                .ease("linear")
                .attr("font-size","12px")
                .attr("fill","black")
                .attr("opacity", opacity) ;
        
        
        
        d3.select(blendTxtNode).transition()
                .duration(1000)
                .ease("linear")
                .attr("font-size","12px")
                .attr("fill","black")
                .attr("opacity", 1.0) ;
       
    }
    
    
    
    function segmentFocus (segment, opacity)
    {
        
        var segmentPath = segment.select("path") ;
                                    
        segmentPath.transition()
                                .duration(250)
                                .ease("linear")
                                .attr("stroke-width", "4")
                               .attr("opacity", opacity) ;
        
        var sectionClsIndex = segment.attr("class").indexOf("section") ;
        var sectionCls = segment.attr("class").substr(sectionClsIndex,8) ;
     
        
    // clear other text in this group to give space for text animation       
      var segments = d3.selectAll( ("." + sectionCls )).select("text").attr("fill","none") ;
				
       // d3.selectAll("text").attr("fill","none") ;
					 
       var segmentText = segment.select("text") ;
       segmentText.transition()
                .duration(250)
                .ease("linear")
                .attr("font-size","20px")
                .attr("fill","black")
                .attr("opacity", 1.0) ;
        
    }
    
    function unfocusAll()
    {
        d3.selectAll(".emotion").selectAll("text")
                .transition()
                .duration(250)
                .ease("linear")
                .attr("font-size","12px") 
                .attr("opacity", 1.0) ;
           
        
        d3.selectAll(".level1").select("path")
                .transition()
                .duration(250)
                .ease("linear")
                .attr("stroke-width", "2")
                .attr("opacity", 0.85) ;
        
        d3.selectAll(".level2").select("path")
                .transition()
                .duration(250)
                .ease("linear")
                .attr("stroke-width", "2")
                .attr("opacity", 0.75) ;
        
           d3.selectAll(".level3").select("path")
                .transition()
                .duration(250)
                .ease("linear")
                .attr("stroke-width", "2")
                .attr("opacity", 0.5) ;
        
        d3.selectAll(".level4").select("path")
                .transition()
                .duration(250)
                .ease("linear")
                .attr("stroke-width", "2")
                .attr("opacity", 0.25) ;
        
         var emojiPoint = d3.selectAll(".emojiPoint") ;
         emojiPoint.transition()
            .duration(250)                              
            .attr("font-size", "24px")
            .attr("fill", "none") ;
                 
        
        
    }
    
    function segmentUnFocus(segment,opacity)
    {
        
        var segmentPath = segment.select("path") ;
        segmentPath.transition()
                                .duration(250)
                                .ease("linear")
                                .attr("stroke-width", "2")
                                .attr("opacity", opacity) ;
        
        
       var segmentText = segment.select("text") ;
       segmentText.transition()
                .duration(250)
                .ease("linear")
                .attr("font-size","12px") 
                .attr("opacity", 1.0) ;
        
      var sectionClsIndex = segment.attr("class").indexOf("section") ;
        var sectionCls = segment.attr("class").substr(sectionClsIndex,8) ;
       
        
        // restore text in this group     
        var segments = d3.selectAll( ("." + sectionCls)).select("text").attr("fill","black") ;
        
	//	d3.selectAll("text").attr("fill","none").attr("fill","black") ; 
          
        
    }

    function emotionPointFocus(emotion)
    {
            var emotionPointCircle = d3.select("#ePoint" + emotion.emotionId) ;
        
        
        emotionPointCircle.transition()
                .duration(250)
                .attr("r", function(d) { return 20; });
        
    
        
    var emojiPoint = d3.select(".emojiPoint_"+ emotion.emotionId) ;
         emojiPoint.transition()
            .duration(250)                              
            .attr("font-size", "36px")
            .attr("style", "fill-opacity:1.0;")
            .attr("style", "text-align: center;")
            .attr("fill", "black") ;
                 
  
    
        
    
    }
