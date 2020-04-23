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
  user: 'postgres',
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
  res.cookie("userID", user.userID);
  res.cookie("displayID", user.displayID);
  res.cookie("statID", user.statID);
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
	user.userID = req.body.email; // somehow get the actual user_ID not the email
	var email = req.body.email;
	var pwd   = req.body.password;
	var query = 'INSERT INTO users (username, user_password) VALUES (\''+ email +'\', \''+ pwd +'\');'
	db.query(query)
  	res.sendFile('/views/character-customization.html',{
		root:__dirname
	});
});

/* sign in */
app.get('/sign-in', function(req, res){
  var email = req.body.email;
  var pwd = req.body.password;
  var query = 'SELECT user_ID, display_ID, stat_ID FROM users WHERE username = '+ email +', user_password = '+ pwd +';'
  // check if query exist
  // if it does send user_ID, display_ID, and stat_ID to user.userID etc --> and send user to game room page
  // if query does not exsist then ask to re-enter username/password or whatever
})

/* character customization */
app.post('/sign-up/cc', function(req, res){
  var name = req.body.characterName;
  var color = req.body.characterColor.value;
  var query = 'INSERT INTO display (display_name, shape, color) VALUES ( \''+ name +'\', \'square\', \''+ color +'\');'
  db.query(query)
  	res.sendFile('/views/game.html',{
		res_color: color
		res_name: name
		root:__dirname
	});
  // match display_ID incremented in display table to the empty display_ID in user table
});

/blacedwsed
jack */

/* game-room */

/* sign-out -- delete cookies */
app.get('/sign-out', (req, res) => {
  res.clearCookie('userID');
  res.clearCookie('displayID');
});


app.listen(3000);
console.log('Running on port 3000');
