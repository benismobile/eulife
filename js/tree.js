      

var i = 0,
    duration = 750,
    rootNode;

var tree = d3.layout.tree() ;
    

var diagonal = d3.svg.diagonal()
    .projection(function(d) { return [d.y, d.x]; });

var margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;
 
 tree.size([height, width]);
        
 var svg = d3.select("#tree").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(rootNode).reverse(),
      links = tree.links(nodes);
  var maxDepth = 0 ;    

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { 
                                d.y = d.depth * 180;
                                if(d.depth > maxDepth) maxDepth = d.depth ;
                            
                            });

  // Update the nodes…
  var node = svg.selectAll("g.node")
      .data(nodes, function(d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", click);

  nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeEnter.append("text")
      .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
      .attr("dy", ".35em")
      .attr("font","Ariel")
      .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
      .text(function(d) { return  d.name ; })
      .style("fill-opacity", 1e-6);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
      .attr("r", 4.5)
      .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
      .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

  nodeExit.select("circle")
      .attr("r", 1e-6);

  nodeExit.select("text")
      .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
      });

  // Transition links to their new position.
  link.transition()
      .duration(duration)
      .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
      .duration(duration)
      .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
      })
      .remove();

    
    d3.selectAll('.node').select("text")
        .attr("text-anchor", function(d) { return d.depth >= maxDepth ?  "start" : "end" ; })
         .attr("x", function(d) { 
            if(d.depth >= maxDepth)
            {
                return  10; 
            }
            else
            {
                return -10 ;
            }
        
        })
        .attr("dy", ".35em")
        .text(function(d) { 
                          
                                if(d.depth >= maxDepth)
                                {
                                       return d.name ;
                                }
                                if(d.depth == (maxDepth -1) )
                                {
                                    return d.name ;   
                                }
                                else
                                {
                                    return "" ;   
                                }
                                    
                          });
    
   // calculate emotions
 
  
  var derivedEmotion = deriveEmotion(nodes) ;

  console.log("derived emotion: x:" + derivedEmotion.vector.x + " y:"+ derivedEmotion.vector.y) ;
    
  var derivedEmotion2007 = deriveEmotion(nodes, "2007") ;

  console.log("derived emotion (2007): x:" + derivedEmotion2007.vector.x + " y:"+ derivedEmotion2007.vector.y) ;

  var derivedEmotion2011 = deriveEmotion(nodes, "2011") ;

  console.log("derived emotion (2011): x:" + derivedEmotion2011.vector.x + " y:"+ derivedEmotion2011.vector.y) ;
   
   var closestEmotion = findClosestEmotion(derivedEmotion) ;
   console.log("closest emotion:" + closestEmotion.emotion + "\u1F60A level:" +  closestEmotion.level ) ;    
    
  var closestEmotion2007 = findClosestEmotion(derivedEmotion2007) ;
   console.log("closest emotion (2007):" + closestEmotion2007.emotion + " level:" +  closestEmotion2007.level) ; 
    
  var closestEmotion2011 = findClosestEmotion(derivedEmotion2011) ;
   console.log("closest emotion (2011):" + closestEmotion2011.emotion + " level:" +  closestEmotion2011.level) ; 
        
  var closestSelection = d3.select("#" + closestEmotion2011.emotion) ;
  segmentFocus(closestSelection, 1.0) ;
    
  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}



        
// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
    update(d) ;
  } 
  else {
    
    d.children = d._children;
    d._children = null;
   // if question variable node clicked get variable data and append to child ctegory nodes    
    if(d.variableId)
    {
        var varNode = d ;
        // get variable data
        // TODO chack for cached results
        
        if( varNode.children[0].data && varNode.children[0].data.length > 0)
        {
            update(d) ;
        }
        else
        {
           d3.json("https://api.ukdataservice.ac.uk/V1/datasets/EQLS/TimeseriesFrequency?user_key=7a33ae85e08913180dd1bad6a3059acc&variableId="+d.variableId, function(error, varData) {
               
              varData.TimeSeries.forEach(function(dataPoint){
                   // match the datapoint to the mathing answer (category) child nodes for this question (variable)
                   // should return a single node in the filter array for the matching answer 
                    categoryNode = varNode.children.filter(function(d) { 
                        return d.categoryValue == dataPoint.Value 
                    }) ;
                  
                    if(categoryNode.length > 0) {
                        if(!categoryNode[0].data ) {
                            categoryNode[0].data = [] ;
                        }
                  
                        categoryNode[0].data.push(dataPoint) ;
                        // append data to node label for both years
                        // TODO maybe shift to update function?
                        if(categoryNode[0].data.length <= 2) 
                        {
                       //  categoryNode[0].name = categoryNode[0].name + " " + dataPoint.Year +":" + dataPoint.WeightedFrequency + " " ;
                        } 
                    }
                     
                  
              });
              
              update(d) ;
           });
        }
    }
    else
    {
        update(d) ;      
    }
    
    
  }
    
}

  function wrap(text, width) {
      width = width + 10 ;
  text.each(function() {
     var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 10).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 10).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          
      }
    }
  });
}

function type(d) {
  d.value = +d.value;
  return d;
}      


var questionNodes = [] ;
    // process VARIABLES dataset
 d3.json("https://api.ukdataservice.ac.uk/V1/datasets/EQLS/variables?user_key=7a33ae85e08913180dd1bad6a3059acc", function(error, questions) {
    if (error) throw error;    
    // process TOPICS dataset
        d3.json("https://api.ukdataservice.ac.uk/V1/datasets/EQLS/topics?user_key=7a33ae85e08913180dd1bad6a3059acc", function(error, topics) {
            if (error) throw error;

            var topicNodes = [] ;
            var questionNodes = [] ;
            topics.Topics.forEach(function(d) {
                var topicNode = {};
                topicNode.name = d.TopicId + ":" + d.TopicValue  ;
                
                var variables = questions.Variables ;
                
                variables.forEach(function(v) {
               
                    if (v.Topic != null && v.Topic.TopicId == d.TopicId && v.Topic.TopicId == 16 )
                    {
                        var question = v.Question ;
                        var questionNode = {} ;
                        questionNode.name = v.VariableId + ":" + question ;
                        questionNode.variableId = v.VariableId ;
                        
                        var categories = v.Categories ;
                        var categoryNodes = [] ;
                        categories.forEach(function(c){
                            
                            var categoryNode = {} ;
                            var categoryLabel = c.CategoryLabel ;
                            
                            
                            categoryNode.name = " " + c.CategoryId + ":" + categoryLabel ;
                            categoryNode.categoryId = c.CategoryId ;
                            categoryNode.categoryLabel = c.CategoryLabel ;
                            categoryNode.categoryValue = c.CategoryValue ;
                           
                            
                                cEmotion = categoryEmotions[c.CategoryId] ;
                                if(cEmotion && c.CategoryId == cEmotion.categoryId)
                                {
                                     var emotion =   emotions[cEmotion.emotionId] ;
                                    categoryNode.name =  c.CategoryValue + " " + emotion.emotion + " \u27A4  \ud83d\ude01";
                                    // categoryNode.name ='\u27A4  \ud83d\ude01';
                                     categoryNode.emotionId = cEmotion.emotionId ;
                                     categoryNode.emotion = emotion ;
                                }
                               
                            
                                     categoryNodes.push(categoryNode) ; 
                            
                            
                        }) ;
                        
                        questionNode.children = categoryNodes ; 
                        
                        if(questionFilter.indexOf(questionNode.variableId) > -1)
                        {
                            questionNodes.push(questionNode) ; 
                        }
                        
                        return ;
                    }
                }); // ends variables.forEach
                
                topicNode.children = questionNodes ;
                if(d.TopicId == 16)
                {
                   topicNodes.push(topicNode) ;
                }
            }); // ends Topics.forEach
                           
            rootNode = {"name": "Questions", "children": questionNodes } ;               
            
           
            rootNode.x0 = height / 2;
            rootNode.y0 = 0;

            function collapse(d) {
                if (d.children) {
                    d._children = d.children;
                    d._children.forEach(collapse);
                    d.children = null;
                }
            }

            rootNode.children.forEach(collapse);
            update(rootNode);
                            
        }); // ends processing TOPICS data
     
 }); // ends processing VARIABLES data



