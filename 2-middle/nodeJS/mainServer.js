const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

var pgp = require('pg-promise')();

const Pool = require('pg').Pool
const db= new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'casino',
  password: 'password',
  port: 5432,
})

app.use(express.static(__dirname + '/'));


/* sign-up */

app.get('/', function(req, res){
  	res.sendFile('./views/sign-up.html',{
		root:__dirname
	});
});

app.post('/', function(req, res){
	var email = req.body.email;
	var pwd   = req.body.password;
	var query = 'INSERT INTO users (username, user_password) VALUES (\''+ email +'\', \''+ pwd +'\');'
	db.query(query)
  	res.sendFile('./views/sign-up.html',{
		root:__dirname
	});
});

/* sign-in */

var currentUserID =  ;



/*
  charcter-customization.html --> game-room.js --> game.html

  store color choice and display name from customization.html
  saves that information
  game-room.js needs to get that information when game.html loads
*/

app.get('/', function(req, res){
  	res.sendFile('./views/charcter-customization.html',{
		root:__dirname
	});
});
app.post('/', function(req, res){
  var name = req.body.characterName;
  var color = req.body.characterColor;
  var query = 'UPDATE display SET display_name = ' + name + ', shape = square, color = ' + color + ' WHERE display_id = ' + displayID + ';'
  db.query(query)
  	res.sendFile('./views/charcter-customization.html',{
		root:__dirname
	});
});

/* black-jack */

/* game-room */



app.listen(3000);
console.log('Running on port 3000');
