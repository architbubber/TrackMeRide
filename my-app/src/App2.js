import React from 'react';
//var spd={0:"-40.0",1:"-26.0",2:"-10.0",4:"15.0",5:"27.0",6:"40.0",7:"50.0",8:"65.0",9:"79.0",10:"89.0",11:"100.0",12:"114.0",13:"125.0",14:"140.0",15:"152.0",16:"166.0",17:"180.0",18:"195.0",19:"208.0",20:"225.0"};
var spd={0:-40.0,1:-26.0,2:-12.5,4:15.0,5:27.0,6:40.0,7:50.0,8:65.0,9:79.0,10:89.0,11:100.0,12:114.0,13:125.0,14:140.0,15:152.0,16:166.0,17:180.0,18:195.0,19:208.0,20:225.0};


function App2() {
    console.log("speed = "+window.speed);
    if(window.speed<210){
    var deg=parseInt(window.speed/10);
    deg=spd[deg];
    //var deg1=spd[deg]+parseFloat(window.speed%10)*parseFloat((spd[deg+1]-spd[deg])/10);
    //deg=spd[deg]+parseFloat(window.speed%10)*parseFloat((spd[deg+1]-spd[deg])/10);
    //console.log("deg="+deg1);
    }
    return (
        <div> 
            <style>
            {`\.needle1 {\
            transform: rotate(${deg}deg);\
    }\
    `}</style></div>
           );
    
    
}


export default App2;




