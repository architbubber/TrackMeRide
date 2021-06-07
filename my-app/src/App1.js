import React, { Component } from 'react';

import Map from "mapmyindia-react";
import './App.css';
import {lat1,long1} from './location.js';
var lat,long;

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  componentDidMount() {
    
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    console.log(window.location.href.substring(33));
    if(window.location.href.search('update')>0){
    const response = await fetch(window.location.href.substring(33));
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
    }
  };
  
    get(){
    lat=lat1;
    long=long1;
    console.log('lat='+lat+" long="+long);
    return 1;
  }
  
render() {
  if(this.get()){
  return (
    <Map
      markers={[
          { 
              position: [ parseFloat(lat) , parseFloat(long)],
              draggable: true, 
              title:"Am here!!",
          }
      ]}
      />
 );
    }
  

}
}

export default App;




