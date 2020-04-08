var express = require('express'); 
var app = express();
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var pgp = require('pg-promise')();

const dbConfig = {
	host: 'localhost',
	port: 5432, //edit port?
	database: 'casino',
	user: 'postgres',
	password: 'password' //may be different for other machines
};

var db = pgp(dbConfig);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('sign-up', function(req, res){
	var email = req.query.email;
	var pwd   = req.query.pwd;
	var query = 'INSERT INTO users (username, user_password) VALUES ('+email+', '+pwd+');'
	db.any(query)
});

app.listen(3000);
console.log('3000 is the magic port');
