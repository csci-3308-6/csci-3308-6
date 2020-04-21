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


/*Variables*/
var currentUserID = '';

/*Home Page*/


app.get('/', function(req, res){
  	res.sendFile('./views/index.html',{
		root:__dirname
	});
});

/* sign-up */

app.get('/sign-up', function(req, res){
  	res.sendFile('./views/sign-up.html',{
		root:__dirname
	});
});

app.post('/sign-up', function(req, res){
	currentUserID = req.body.email;
	var email = req.body.email;
	var pwd   = req.body.password;
	var query = 'INSERT INTO users (username, user_password) VALUES (\''+ email +'\', \''+ pwd +'\');'
	db.query(query)
  	res.sendFile('./views/character-customization.html',{
		root:__dirname
	});
});

/* sign-in */

/*
  charcter-customization.html --> game-room.js --> game.html

  store color choice and display name from customization.html
  saves that information
  game-room.js needs to get that information when game.html loads
*/

/*Might not need app-get, never called.*/
//app.get('/sign-upcc', function(req, res){
//  	res.sendFile('./views/character-customization.html',{
//		root:__dirname
//	});
//});

app.post('/sign-upcc', function(req, res){
  var name = req.body.characterName;
  var color = req.body.characterColor.value;
  console.log(color);
  var query = 'UPDATE display SET display_name = ' + name + ', shape = square, color = ' + color + ' WHERE display_id = ' + currentUserID+ ';'
  db.query(query)
  	res.sendFile('./views/index.html',{
		root:__dirname
	});
});

/* black-jack */

/* game-room */



app.listen(3000);
console.log('Running on port 3000');
