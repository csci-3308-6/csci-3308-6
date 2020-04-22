const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
var session = require('express-session')
var pgp = require('pg-promise')();
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))
app.use(cookieParser())
app.use(express.static(__dirname + '/'));

const Pool = require('pg').Pool
const db = new Pool({
  user: 'nattobiason',
  host: 'localhost',
  database: 'casino',
  password: 'password',
  port: 5432,
})


/* Cookie */
var user = {
  userID: "",
  displayID: "",
  statsID: ""
}
app.get('/setuser', function(req, res){
  var user = 'SELECT user_ID FROM users WHERE user_ID = '+ user.userID +';';
  var display = 'SELECT display_ID FROM display WHERE display_ID = '+ user.displayID +';';
  res.cookie("userData", user);
  res.send('user data added to cookie');
});

/*Variables*/


/* basic route to home page */
app.get('/', function(req, res){
  	res.sendFile('./views/index.html',{
		root:__dirname
	});
});

/* sign-up */
app.get('/sign-up', function(req, res){
  	res.sendFile('/views/sign-up.html',{
		root:__dirname
	});
});
app.post('/sign-up', function(req, res){
	user.userID = req.body.email;
	var email = req.body.email;
	var pwd   = req.body.password;
	var query = 'INSERT INTO users (username, user_password) VALUES (\''+ email +'\', \''+ pwd +'\');'
	db.query(query)
  	res.sendFile('/views/character-customization.html',{
		root:__dirname
	});
});

/* character customization */
// app.get('/sign-upcc', function(req, res){
//   var query = 'SELECT user_ID FROM users WHERE username = '+ user.userID +');'
//   db.query(query)
//   //user.userID = query.user_ID;
//   console.log(query);
// });
app.post('/sign-up/cc', function(req, res){
  var name = req.body.characterName;
  var color = req.body.characterColor.value;
  var query = 'INSERT INTO display (display_ID, display_name, shape, color) VALUES (2, \''+ name +'\', \'square\', \''+ color +'\');'
  db.query(query)
  	res.sendFile('/views/sign-in.html',{
		root:__dirname
	});
});



/* black-jack */

/* game-room */



/* sign-out -- delete cookies */
app.get('/sign-out', (req, res) => {
  res.clearCookie('userID');
  res.clearCookie('displayID');
});


app.listen(3000);
console.log('Running on port 3000');
