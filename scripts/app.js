var express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", 
  database: "test",
  password: "root"
});

connection.connect(err => {
  if (err) {
    console.log(err);
    return err;
  } else {

  console.log("Loaded");
  }
});


var res1 = null;
let query = "SELECT `var` FROM `a`";
connection.query(query, (err, result) => {
	res1 = result[0]["var"];
});


var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(function (req, res, next) {
	console.log ('Time: ', Date.now() );
	console.log(res1);
	next();
}) 


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
	res.render('index' , {
		title : res1
	});
});

app.listen(3000);
console.log ('Server is running on port 3000');

module.exports = app;