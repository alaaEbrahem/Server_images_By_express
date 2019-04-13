var express = require('express');
var path=require('path');
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get(`/:picName`, function (req, res) {

    res.sendFile(path.join(__dirname+`/assets/${req.url}.jpg`))
  })
 
app.listen(5000)