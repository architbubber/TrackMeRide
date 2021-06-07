const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

var lat=26.901014, long=75.828654,speed=0.0;
  app.get('/db', async (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.json({ Latitude:`${lat}`,Longitude:`${long}` ,Speed :`${speed}`});
  });

app.use(express.static(path.join(__dirname, '../my-app/build')));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../my-app/build')));
  //
  app.get('/', (req, res) => {
    console.log('me1');
    //res.sendFile(path.join(__dirname = '../my-app/build/index.html'));
  })
}
//build mode
app.use('/verify', function(req, res, next){
    console.log("Authenticate and Redirect");
    res.redirect('http://localhost:3006');
    next();
});
app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname+'../my-app/public/index.html'));
  res.redirect('http://localhost:3006');
  console.log('me2');
})

app.get('/update', async(req, res) =>{
    lat = parseFloat(req.query.lat);
    long = parseFloat(req.query.long);
    speed = parseFloat(req.query.speed);
    console.log("New Lat:" + lat+"And Speed: "+speed);
    res.send("<h1>UPDATED</h1><br> Lat="+lat+"&nbsp;&nbsp;&nbsp;Long="+long+"&nbsp;&nbsp;&nbsp;Speed="+speed);
  }
);
app.listen(port,() => console.log(`Server Node Listening on port ${port}`));
