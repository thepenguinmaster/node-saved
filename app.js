var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var labCode = require('./lab-code');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/', indexRouter);
app.use('/lab', labCode);

app.listen(3000, () => {
  console.log("Server running on port 3000");
 });

module.exports = app;
