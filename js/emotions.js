var emotions = {
    "0":{ "vector":{"x":0, "y":0}, "emotionId":0, "emotion":"neutral", "level":0},   
    "1":{ "vector":{"x":0, "y":-1}, "emotionId":1, "emotion":"pensieve", "level":1, "emoji":"\ud83d\ude14"},
    "2":{ "vector":{"x":0, "y":-2}, "emotionId":2, "emotion":"pensieve", "level":2, "emoji":"\ud83d\ude14"},
    "3":{ "vector":{"x":0, "y":-3}, "emotionId":3, "emotion":"pensieve", "level":3, "emoji":"\ud83d\ude14"},
    "4":{ "vector":{"x":0, "y":-4}, "emotionId":4, "emotion":"sadness", "level":1, "emoji":"\ud83d\ude14"},
    "5":{ "vector":{"x":0, "y":-5}, "emotionId":5, "emotion":"sadness", "level":2,"emoji":"\ud83d\ude14"},
    "6":{ "vector":{"x":0, "y":-6}, "emotionId":6, "emotion":"sadness", "level":3,"emoji":"\ud83d\ude14"},
    "7":{ "vector":{"x":0, "y":-7}, "emotionId":7, "emotion":"sadness", "level":4,"emoji":"\ud83d\ude14"},
    "8":{ "vector":{"x":0, "y":-8}, "emotionId":8, "emotion":"sadness", "level":5,"emoji":"\ud83d\ude14"},
    "9":{ "vector":{"x":0, "y":-9}, "emotionId":9, "emotion":"grief", "level":1, "emoji":"\ud83d\ude20"},
    "10":{ "vector":{"x":0, "y":-10}, "emotionId":10, "emotion":"grief", "level":2, "emoji":"\ud83d\ude20"},
    
    "11":{ "vector":{"x":0, "y":1}, "emotionId":11, "emotion":"serenity", "level":1,"emoji":"\ud83d\uDE0C"},
    "12":{ "vector":{"x":0, "y":2}, "emotionId":12, "emotion":"serenity", "level":2, "emoji":"\ud83d\uDE0C"},
    "13":{ "vector":{"x":0, "y":3}, "emotionId":13, "emotion":"serenity", "level":3,"emoji":"\ud83d\uDE0C"},
    "14":{ "vector":{"x":0, "y":4}, "emotionId":14, "emotion":"joy", "level":1,"emoji":"\ud83d\uDE0A"},
    "15":{ "vector":{"x":0, "y":5}, "emotionId":15, "emotion":"joy", "level":2, "emoji":"\ud83d\uDE0A"},
    "16":{ "vector":{"x":0, "y":6}, "emotionId":16, "emotion":"joy", "level":3, "emoji":"\ud83d\uDE0A"},
    "17":{ "vector":{"x":0, "y":7}, "emotionId":17, "emotion":"joy", "level":4,"emoji":"\ud83d\uDE06"},
    "18":{ "vector":{"x":0, "y":8}, "emotionId":18, "emotion":"joy", "level":5, "emoji":"\ud83d\uDE03"},
    "19":{ "vector":{"x":0, "y":9}, "emotionId":19, "emotion":"ectasy", "level":1,"emoji":"\ud83d\uDE04"},
    "20":{ "vector":{"x":0, "y":10}, "emotionId":20, "emotion":"ectasy", "level":2,"emoji":"\ud83d\uDE02"},
    
     "21":{ "vector":{"x":1, "y":0}, "emotionId":21, "emotion":"apprehension", "level":1},
     "22":{ "vector":{"x":2, "y":0}, "emotionId":22, "emotion":"apprehension", "level":2},
     "23":{ "vector":{"x":3, "y":0}, "emotionId":23, "emotion":"apprehension", "level":3},
     "24":{ "vector":{"x":4, "y":0}, "emotionId":24, "emotion":"fear", "level":1},
     "25":{ "vector":{"x":5, "y":0}, "emotionId":25, "emotion":"fear", "level":2},
     "26":{ "vector":{"x":6, "y":0}, "emotionId":26, "emotion":"fear", "level":3},
     "27":{ "vector":{"x":7, "y":0}, "emotionId":27, "emotion":"fear", "level":4},
     "28":{ "vector":{"x":8, "y":0}, "emotionId":28, "emotion":"fear", "level":5},
     "29":{ "vector":{"x":9, "y":0}, "emotionId":29, "emotion":"terror", "level":1},
     "30":{ "vector":{"x":10, "y":0}, "emotionId":30, "emotion":"terror", "level":2},
     
     "31":{ "vector":{"x":-1, "y":0}, "emotionId":31, "emotion":"annoyance", "level":1},
     "32":{ "vector":{"x":-2, "y":0}, "emotionId":32, "emotion":"annoyance", "level":2},
     "33":{ "vector":{"x":-3, "y":0}, "emotionId":33, "emotion":"annoyance", "level":3},
     "34":{ "vector":{"x":-4, "y":0}, "emotionId":34, "emotion":"anger", "level":1},
     "35":{ "vector":{"x":-5, "y":0}, "emotionId":35, "emotion":"anger", "level":2},
     "36":{ "vector":{"x":-6, "y":0}, "emotionId":36, "emotion":"anger", "level":3},
     "37":{ "vector":{"x":-7, "y":0}, "emotionId":37, "emotion":"anger", "level":4},
     "38":{ "vector":{"x":-8, "y":0}, "emotionId":38, "emotion":"anger", "level":5},
     "39":{ "vector":{"x":-9, "y":0}, "emotionId":39, "emotion":"rage", "level":1},
     "40":{ "vector":{"x":-10, "y":0}, "emotionId":40, "emotion":"rage", "level":2},
    
     "41":{ "vector":{"x":1*cos45, "y":1*sine45}, "emotionId":41, "emotion":"acceptance", "level":1},
     "42":{ "vector":{"x":2*cos45, "y":2*sine45}, "emotionId":42, "emotion":"acceptance", "level":2},
     "43":{ "vector":{"x":3*cos45, "y":3*sine45}, "emotionId":43, "emotion":"acceptance", "level":3},
     "44":{ "vector":{"x":4*cos45, "y":4*sine45}, "emotionId":44, "emotion":"trust", "level":1},
     "45":{ "vector":{"x":5*cos45, "y":5*sine45}, "emotionId":45, "emotion":"trust", "level":2},
     "46":{ "vector":{"x":6*cos45, "y":6*sine45}, "emotionId":46, "emotion":"trust", "level":3},
     "47":{ "vector":{"x":7*cos45, "y":7*sine45}, "emotionId":47, "emotion":"trust", "level":4},
     "48":{ "vector":{"x":8*cos45, "y":8*sine45}, "emotionId":48, "emotion":"trust", "level":5},
     "49":{ "vector":{"x":9*cos45, "y":9*sine45}, "emotionId":49, "emotion":"admiration", "level":1},
     "50":{ "vector":{"x":10*cos45, "y":10*sine45}, "emotionId":50, "emotion":"admiration", "level":2},
    
     "51":{ "vector":{"x":1*cos225, "y":1*sine225}, "emotionId":51, "emotion":"boredom", "level":1},
     "52":{ "vector":{"x":2*cos225, "y":2*sine225}, "emotionId":52, "emotion":"boredom", "level":2},
     "53":{ "vector":{"x":3*cos225, "y":3*sine225}, "emotionId":53, "emotion":"boredom", "level":3},
     "54":{ "vector":{"x":4*cos225, "y":4*sine225}, "emotionId":54, "emotion":"disgust", "level":1},
     "55":{ "vector":{"x":5*cos225, "y":5*sine225}, "emotionId":55, "emotion":"disgust", "level":2},
     "56":{ "vector":{"x":6*cos225, "y":6*sine225}, "emotionId":56, "emotion":"disgust", "level":3},
     "57":{ "vector":{"x":7*cos225, "y":7*sine225}, "emotionId":57, "emotion":"disgust", "level":4},
     "58":{ "vector":{"x":8*cos225, "y":8*sine225}, "emotionId":58, "emotion":"disgust", "level":5},
     "59":{ "vector":{"x":9*cos225, "y":9*sine225}, "emotionId":59, "emotion":"loathing", "level":1},
     "60":{ "vector":{"x":10*cos225, "y":10*sine225}, "emotionId":60, "emotion":"loathing", "level":2},
    
    
     "71":{ "vector":{"x":1*cos135, "y":1*sine135}, "emotionId":71, "emotion":"interest", "level":1},
     "72":{ "vector":{"x":2*cos135, "y":2*sine135}, "emotionId":72, "emotion":"interest", "level":2},
     "73":{ "vector":{"x":3*cos135, "y":3*sine135}, "emotionId":73, "emotion":"interest", "level":3},
     "74":{ "vector":{"x":4*cos135, "y":4*sine135}, "emotionId":74, "emotion":"anticipation", "level":1},
     "75":{ "vector":{"x":5*cos135, "y":5*sine135}, "emotionId":75, "emotion":"anticipation", "level":2},
     "76":{ "vector":{"x":6*cos135, "y":6*sine135}, "emotionId":76, "emotion":"anticipation", "level":3},
     "77":{ "vector":{"x":7*cos135, "y":7*sine135}, "emotionId":77, "emotion":"anticipation", "level":4},
     "78":{ "vector":{"x":8*cos135, "y":8*sine135}, "emotionId":78, "emotion":"anticipation", "level":5},  
     "79":{ "vector":{"x":9*cos135, "y":9*sine135}, "emotionId":79, "emotion":"vigilance", "level":1},
     "80":{ "vector":{"x":10*cos135, "y":10*sine135}, "emotionId":80, "emotion":"vigilance", "level":2},
    
     "81":{ "vector":{"x":1*cos315, "y":1*sine315}, "emotionId":81, "emotion":"distraction", "level":1},
     "82":{ "vector":{"x":2*cos315, "y":2*sine315}, "emotionId":82, "emotion":"distraction", "level":2},
     "83":{ "vector":{"x":3*cos315, "y":3*sine315}, "emotionId":83, "emotion":"distraction", "level":3}, 
     "84":{ "vector":{"x":4*cos315, "y":4*sine315}, "emotionId":84, "emotion":"surprise", "level":1},
     "85":{ "vector":{"x":5*cos315, "y":5*sine315}, "emotionId":85, "emotion":"surprise", "level":2},
     "86":{ "vector":{"x":6*cos315, "y":6*sine315}, "emotionId":86, "emotion":"surprise", "level":3},
     "87":{ "vector":{"x":7*cos315, "y":7*sine315}, "emotionId":87, "emotion":"surprise", "level":4},
     "88":{ "vector":{"x":8*cos315, "y":8*sine315}, "emotionId":88, "emotion":"surprise", "level":5},
     "89":{ "vector":{"x":9*cos315, "y":9*sine315}, "emotionId":89, "emotion":"amazement", "level":1},
     "90":{ "vector":{"x":10*cos315, "y":10*sine315}, "emotionId":90, "emotion":"amazement", "level":2},
    
     "91":{ "vector":{"x":1*cos22_5, "y":1*sine22_5}, "emotionId":91, "emotion":"submission", "level":1},
     "92":{ "vector":{"x":2*cos22_5, "y":2*sine22_5}, "emotionId":92, "emotion":"submission", "level":2},
     "93":{ "vector":{"x":3*cos22_5, "y":3*sine22_5}, "emotionId":93, "emotion":"submission", "level":3},
     "94":{ "vector":{"x":4*cos22_5, "y":4*sine22_5}, "emotionId":94, "emotion":"submission", "level":4},
     "95":{ "vector":{"x":5*cos22_5, "y":5*sine22_5}, "emotionId":95, "emotion":"submission", "level":5},
     "96":{ "vector":{"x":6*cos22_5, "y":6*sine22_5}, "emotionId":96, "emotion":"submission", "level":6},
     "97":{ "vector":{"x":7*cos22_5, "y":7*sine22_5}, "emotionId":97, "emotion":"submission", "level":7},
     "98":{ "vector":{"x":8*cos22_5, "y":8*sine22_5}, "emotionId":98, "emotion":"submission", "level":8},
     "99":{ "vector":{"x":9*cos22_5, "y":9*sine22_5}, "emotionId":99, "emotion":"submission", "level":9},
     "100":{ "vector":{"x":10*cos22_5, "y":10*sine22_5}, "emotionId":100, "emotion":"submission", "level":10},
    
     "101":{ "vector":{"x":1*cos67_5, "y":1*sine67_5}, "emotionId":101, "emotion":"love", "level":1},
     "102":{ "vector":{"x":2*cos67_5, "y":2*sine67_5}, "emotionId":102, "emotion":"love", "level":2},
     "103":{ "vector":{"x":3*cos67_5, "y":3*sine67_5}, "emotionId":103, "emotion":"love", "level":3},
    "104":{ "vector":{"x":4*cos67_5, "y":4*sine67_5}, "emotionId":104, "emotion":"love", "level":4},
    "105":{ "vector":{"x":5*cos67_5, "y":5*sine67_5}, "emotionId":105, "emotion":"love", "level":5},
    "106":{ "vector":{"x":6*cos67_5, "y":6*sine67_5}, "emotionId":106, "emotion":"love", "level":6},
    "107":{ "vector":{"x":7*cos67_5, "y":7*sine67_5}, "emotionId":107, "emotion":"love", "level":7},
    "108":{ "vector":{"x":8*cos67_5, "y":8*sine67_5}, "emotionId":108, "emotion":"love", "level":8},
    "109":{ "vector":{"x":9*cos67_5, "y":9*sine67_5}, "emotionId":109, "emotion":"love", "level":9},
    "110":{ "vector":{"x":10*cos67_5, "y":10*sine67_5}, "emotionId":110, "emotion":"love", "level":10},
    
    "111":{ "vector":{"x":1*cos112_5, "y":1*sine112_5}, "emotionId":111, "emotion":"optimism", "level":1},
    "112":{ "vector":{"x":2*cos112_5, "y":2*sine112_5}, "emotionId":112, "emotion":"optimism", "level":2},
    "113":{ "vector":{"x":3*cos112_5, "y":3*sine112_5}, "emotionId":113, "emotion":"optimism", "level":3},
    "114":{ "vector":{"x":4*cos112_5, "y":4*sine112_5}, "emotionId":114, "emotion":"optimism", "level":4},
    "115":{ "vector":{"x":5*cos112_5, "y":5*sine112_5}, "emotionId":115, "emotion":"optimism", "level":5},
    "116":{ "vector":{"x":6*cos112_5, "y":6*sine112_5}, "emotionId":116, "emotion":"optimism", "level":6},
    "117":{ "vector":{"x":7*cos112_5, "y":7*sine112_5}, "emotionId":117, "emotion":"optimism", "level":7},
    "118":{ "vector":{"x":8*cos112_5, "y":8*sine112_5}, "emotionId":118, "emotion":"optimism", "level":8},
    "119":{ "vector":{"x":9*cos112_5, "y":9*sine112_5}, "emotionId":119, "emotion":"optimism", "level":9},
    "120":{ "vector":{"x":10*cos112_5, "y":10*sine112_5}, "emotionId":120, "emotion":"optimism", "level":10},
    
    "121":{ "vector":{"x":1*cos157_5, "y":1*sine157_5}, "emotionId":121, "emotion":"aggressiveness", "level":1},
    "122":{ "vector":{"x":2*cos157_5, "y":2*sine157_5}, "emotionId":122, "emotion":"aggressiveness", "level":2},
    "123":{ "vector":{"x":3*cos157_5, "y":3*sine157_5}, "emotionId":123, "emotion":"aggressiveness", "level":3},
    "124":{ "vector":{"x":4*cos157_5, "y":4*sine157_5}, "emotionId":124, "emotion":"aggressiveness", "level":4},
    "125":{ "vector":{"x":5*cos157_5, "y":5*sine157_5}, "emotionId":125, "emotion":"aggressiveness", "level":5},
    "126":{ "vector":{"x":6*cos157_5, "y":6*sine157_5}, "emotionId":126, "emotion":"aggressiveness", "level":6},
    "127":{ "vector":{"x":7*cos157_5, "y":7*sine157_5}, "emotionId":127, "emotion":"aggressiveness", "level":7},
    "128":{ "vector":{"x":8*cos157_5, "y":8*sine157_5}, "emotionId":128, "emotion":"aggressiveness", "level":8},
    "129":{ "vector":{"x":9*cos157_5, "y":9*sine157_5}, "emotionId":129, "emotion":"aggressiveness", "level":9},
    "130":{ "vector":{"x":10*cos157_5, "y":10*sine157_5}, "emotionId":130, "emotion":"aggressiveness", "level":10},
    
    "131":{ "vector":{"x":1*cos202_5, "y":1*sine202_5}, "emotionId":131, "emotion":"contempt", "level":1},
    "132":{ "vector":{"x":2*cos202_5, "y":2*sine202_5}, "emotionId":132, "emotion":"contempt", "level":2},
    "133":{ "vector":{"x":3*cos202_5, "y":3*sine202_5}, "emotionId":133, "emotion":"contempt", "level":3},
    "134":{ "vector":{"x":4*cos202_5, "y":4*sine202_5}, "emotionId":134, "emotion":"contempt", "level":4},
    "135":{ "vector":{"x":5*cos202_5, "y":5*sine202_5}, "emotionId":135, "emotion":"contempt", "level":5},
    "136":{ "vector":{"x":6*cos202_5, "y":6*sine202_5}, "emotionId":136, "emotion":"contempt", "level":6},
    "137":{ "vector":{"x":7*cos202_5, "y":7*sine202_5}, "emotionId":137, "emotion":"contempt", "level":7},
    "138":{ "vector":{"x":8*cos202_5, "y":8*sine202_5}, "emotionId":138, "emotion":"contempt", "level":8},
    "139":{ "vector":{"x":9*cos202_5, "y":9*sine202_5}, "emotionId":139, "emotion":"contempt", "level":9},
    "140":{ "vector":{"x":10*cos202_5, "y":10*sine202_5}, "emotionId":140, "emotion":"contempt", "level":10},
    
    "141":{ "vector":{"x":1*cos247_5, "y":1*sine247_5}, "emotionId":141, "emotion":"remorse", "level":1},
    "142":{ "vector":{"x":2*cos247_5, "y":2*sine247_5}, "emotionId":142, "emotion":"remorse", "level":2},
    "143":{ "vector":{"x":3*cos247_5, "y":3*sine247_5}, "emotionId":143, "emotion":"remorse", "level":3},
    "144":{ "vector":{"x":4*cos247_5, "y":4*sine247_5}, "emotionId":144, "emotion":"remorse", "level":4},
    "145":{ "vector":{"x":5*cos247_5, "y":5*sine247_5}, "emotionId":145, "emotion":"remorse", "level":5},
    "146":{ "vector":{"x":6*cos247_5, "y":6*sine247_5}, "emotionId":146, "emotion":"remorse", "level":6},
    "147":{ "vector":{"x":7*cos247_5, "y":7*sine247_5}, "emotionId":147, "emotion":"remorse", "level":7},
    "148":{ "vector":{"x":8*cos247_5, "y":8*sine247_5}, "emotionId":148, "emotion":"remorse", "level":8},
    "149":{ "vector":{"x":9*cos247_5, "y":9*sine247_5}, "emotionId":149, "emotion":"remorse", "level":9},
    "150":{ "vector":{"x":10*cos247_5, "y":10*sine247_5}, "emotionId":149, "emotion":"remorse", "level":10},
    
    "161":{ "vector":{"x":1*cos292_5, "y":1*sine292_5}, "emotionId":161, "emotion":"disapproval", "level":1},
    "162":{ "vector":{"x":2*cos292_5, "y":2*sine292_5}, "emotionId":162, "emotion":"disapproval", "level":2},
    "163":{ "vector":{"x":3*cos292_5, "y":3*sine292_5}, "emotionId":163, "emotion":"disapproval", "level":3},
    "164":{ "vector":{"x":4*cos292_5, "y":4*sine292_5}, "emotionId":164, "emotion":"disapproval", "level":4},
    "165":{ "vector":{"x":5*cos292_5, "y":5*sine292_5}, "emotionId":165, "emotion":"disapproval", "level":5},
    "166":{ "vector":{"x":6*cos292_5, "y":6*sine292_5}, "emotionId":166, "emotion":"disapproval", "level":6},
    "167":{ "vector":{"x":7*cos292_5, "y":7*sine292_5}, "emotionId":167, "emotion":"disapproval", "level":7},
    "168":{ "vector":{"x":8*cos292_5, "y":8*sine292_5}, "emotionId":168, "emotion":"disapproval", "level":8},
    "169":{ "vector":{"x":9*cos292_5, "y":9*sine292_5}, "emotionId":169, "emotion":"disapproval", "level":9},
    "170":{ "vector":{"x":10*cos292_5, "y":10*sine292_5}, "emotionId":170, "emotion":"disapproval", "level":10},
    
     "171":{ "vector":{"x":1*cos337_5, "y":1*sine337_5}, "emotionId":171, "emotion":"awe", "level":1},
     "172":{ "vector":{"x":2*cos337_5, "y":2*sine337_5}, "emotionId":172, "emotion":"awe", "level":2},
    "173":{ "vector":{"x":3*cos337_5, "y":3*sine337_5}, "emotionId":173, "emotion":"awe", "level":3},
    "174":{ "vector":{"x":4*cos337_5, "y":4*sine337_5}, "emotionId":174, "emotion":"awe", "level":4},
    "175":{ "vector":{"x":5*cos337_5, "y":5*sine337_5}, "emotionId":175, "emotion":"awe", "level":5},
    "176":{ "vector":{"x":6*cos337_5, "y":6*sine337_5}, "emotionId":176, "emotion":"awe", "level":6},
    "177":{ "vector":{"x":7*cos337_5, "y":7*sine337_5}, "emotionId":177, "emotion":"awe", "level":7},
    "178":{ "vector":{"x":8*cos337_5, "y":8*sine337_5}, "emotionId":178, "emotion":"awe", "level":8},
    "179":{ "vector":{"x":9*cos337_5, "y":9*sine337_5}, "emotionId":179, "emotion":"awe", "level":9},
    "180":{ "vector":{"x":10*cos337_5, "y":10*sine337_5}, "emotionId":180, "emotion":"awe", "level":10}
    
    } ;

function deriveEmotion(nodes, year)
{
    
  var xSum = 0 ;// sum of X vector values
  var ySum = 0 ;  // sum of Y vector values
  var sumResponses = 0 ; // total number of responses 
    
    nodes.forEach(function(d) {
   
        if(d.data && d.data.length > 0)
        {
            for(var i = 0 ; i < d.data.length ; i++)
            {
                var dataPoint = d.data[i] ;
               
                if((year && dataPoint.Year == year) || !year)
                {
                    sumResponses += dataPoint.WeightedFrequency ;
                    xSum += (d.emotion.vector.x * dataPoint.WeightedFrequency) ;
                    ySum += (d.emotion.vector.y * dataPoint.WeightedFrequency) ;
                }        
            }
        } // end if d.data
    }); // end nodes.forEach
        
    // console.log("sumResponsesAllYears: " + sumResponses + " xSum:" + xSum + " ySum:" + ySum );
    var averageEmotionVectorX = xSum/sumResponses ;
    var averageEmotionVectorY = ySum/sumResponses ;
        
   // "1":{ "vector":{"x":0, "y":-1}, "emotionId":1, "emotion":"pensieve", "level":1},

   // console.log("averageEmotionVector X:" + averageEmotionVectorX) ;
   // console.log("averageEmotionVector Y:" + averageEmotionVectorY) ;
           
    var derivedEmotion = {};
    var v = {} ;
    v.x = averageEmotionVectorX ;
    v.y = averageEmotionVectorY ;
    derivedEmotion.vector = v ;
   
    return derivedEmotion ;
}
        
function findClosestEmotion(derivedEmotion)
{
   var minDistance = 1000 ;
    var closestEmotion = emotions["0"] ;
    
    for (var emotionId in emotions) {
    if( emotions.hasOwnProperty(emotionId) ) {
        
        var referenceEmotion = emotions[emotionId] ;
       
        var deltaX = referenceEmotion.vector.x - derivedEmotion.vector.x ;
        var deltaY = referenceEmotion.vector.y - derivedEmotion.vector.y ;
        var distance = Math.sqrt((Math.pow(deltaX,2) + Math.pow(deltaY,2))) ;
      
        
        if(distance < minDistance)
        { 
            minDistance = distance ;
            closestEmotion = referenceEmotion ;
        }
      
    } 
  }
  // expand the derived emotion with valuees from closest match
  derivedEmotion.emotion = closestEmotion.emotion ;
  derivedEmotion.emotionId = closestEmotion.emotionId ;
  derivedEmotion.level = closestEmotion.level ;
  return closestEmotion ;
   
            
}
