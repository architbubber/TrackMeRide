import React from 'react';
import Map from "mapmyindia-react";
import './App.css';



function App() {
    return (
      <Map
        markers={[
            { 
                position: [ window.lat ,window.long],
                draggable: true, 
                title:"Am here!!",
            }
        ]}
        />
        
   );
    
    
}


export default App;




