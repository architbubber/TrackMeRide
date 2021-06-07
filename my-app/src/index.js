import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
var lat,long,i=0,z=1,speed;

put();

async function get(){
        console.log('inside get '+i);
            i++;
        const response= await fetch('https://trackmeride.herokuapp.com/db');
        //const response= await fetch('https://localhost:5000/db');
        const data= await response.json();
        console.log(data);
        //lat= await data.results[0].latitude;
        lat= await data.Latitude;
        //long= await data.results[0].longitude;
        long= await data.Longitude;
        speed=await data.Speed;
        //window.speed=100.0;
        console.log("now lat ="+parseFloat(lat)+" long="+parseFloat(long)); 
}

async function put(){

  await get();
  console.log('inside put '+i);
            i++;
  window.lat=parseFloat(lat);
  window.long=parseFloat(long);
  window.speed=parseFloat(speed);
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('noname')
);
z+=1;
setTimeout(put(),5000*z);

}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

