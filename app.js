// this is a comment
/* my block comments
 * hear hear
 */

/*
var obj = require ("./score.js");

console.log(obj);

var score = obj.myhandler;

score.addGrade(100);
score.addGrade(90);
score.addGrade(85);
score.addGrade(96);
score.addGrade(95.5);

console.log("Total Grades are: " + score.getTotalGrades());
console.log("Average Grades is: " + score.getAverage());
*/

var express = require('express');
//var mongoose = require('mongoose');

//var db=mongoose.connect('mongodb://localhost/bookAPI');

//var Book = require('./models/bookModel');

var app = express();
var port = process. env.PORT || 3000; //check for environment PORT, if not there, use 3000 as default

app.listen(port, function () {
  console.log('Running on PORT: ' + port);
});

process.on('uncaughtException', function(err) {
    if(err.errno === 'EADDRINUSE')
         console.log(err);
    else
         console.log(err);
    process.exit(1);
});

app.get('/', function (req, res) {
  res.send('Welcome to my API2');
});

var bookRouter = express.Router();
bookRouter.route('/books').get(function(req,res){
    var responseJson={
      hello: "This is my API in json"
    };
    res.json(responseJson);
  });
app.use('/api', bookRouter);
