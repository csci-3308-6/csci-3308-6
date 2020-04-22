const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
var session = require('express-session')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))
app.use(cookieParser())

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

/* Cookie */
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/views/index.html');
    } else {
        next();
    }
};

/*Variables*/

var userID = 1;
var displayID = 1;

/*Home Page*/
app.get('/', sessionChecker, (req, res) => {
    res.redirect('/home');
});
app.route('/home')
    .get(sessionChecker, (req, res) => {
        res.sendFile('/views/index.html',{
        		root:__dirname
        	});
    })
// app.get('/', function(req, res){
//   	res.sendFile('./views/index.html',{
// 		root:__dirname
// 	});
// });


/* sign-up */
app.route('/sign-up')
    .get(sessionChecker, (req, res) => {
        res.sendFile('/views/sign-up.html',{
        		root:__dirname
        	});
    })
    .post((req, res) => {
      var email = req.body.email;
      var pwd   = req.body.password;
      var query = 'INSERT INTO users (username, user_password) VALUES (\''+ email +'\', \''+ pwd +'\');'
      db.query(query)
        .then(user => {
            req.session.user = user.dataValues;
            res.redirect('/sign-upcc');
        })
        .catch(error => {
            res.redirect('/sign-up');
        });
    });

// app.get('/sign-up', sessionChecker, function(req, res){
//   	res.sendFile('./views/sign-up.html',{
// 		root:__dirname
// 	});
// });
//
// app.post('/sign-up', sessionChecker, function(req, res){
// 	currentUserID = req.body.email;
// 	var email = req.body.email;
// 	var pwd   = req.body.password;
// 	var query = 'INSERT INTO users (username, user_password) VALUES (\''+ email +'\', \''+ pwd +'\');'
// 	db.query(query)
//   	res.sendFile('./views/character-customization.html',{
// 		root:__dirname
// 	});
// });



/* sign-in */
app.route('/sign-in')
    .get(sessionChecker, (req, res) => {
      res.sendFile('/views/sign-up.html',{
          root:__dirname
        });
  })
    .post((req, res) => {
        var username = req.body.inputEmail,
            password = req.body.inputPassword;
        var query = "SELECT * FROM users WHERE username = "+ username +", userpassword = "+ password +";"
        // db.query(query)
        // if(query){ // this check should probably be changed somehow idk
        //   res.redirect('/game-room')
        // }
        // else{
        //   res.redirect('/sign-in')
        // }
    });


/* character customization */

app.post('/sign-upcc', function(req, res){
  var name = req.body.characterName;
  var color = req.body.characterColor.value;
  console.log(color);
  var query = 'INSERT INTO display (display_id, display_name, shape, color) VALUES ('+ displayID +', '+ name +', square, '+ color +');'
  db.query(query)
  	res.redirect('/views/game.html',{
		root:__dirname
	});
});


/* black-jack */

/* game-room */



/* sign-out */

app.get('/sign-out', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/sign-in');
    }
});


app.listen(3000);
console.log('Running on port 3000');
