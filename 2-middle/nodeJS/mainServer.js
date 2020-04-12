// node.js connection to Postgres database
// website I got info from to make this:
// https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/

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

//app.set('view engine', 'ejs');
//app.use(express.static(__dirname + '/'));

	//var query = 'SELECT * from users;'
	//var res = db.query(query);

//console.log(res);
app.get('/', function(req, res){
	//var email = req.query.email;
	//var pwd   = req.query.pwd;
	var query = 'INSERT INTO users (username, user_password) VALUES (\'hello\', \'hello\');'
	//var query = 'SELECT * from users;'
	db.query(query)
});

app.listen(3000);
console.log('Running on port 3000');
