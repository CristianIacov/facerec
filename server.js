const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
//const profile = require('./controllers/profile');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const db = knex({
  client: 'pg',
  connection: {
   connectionString : process.env.DATABASE_URL, 
   ssl: true
  }
})

var reqTimer = setTimeout(function wakeUp() {
   request("https://nameless-gorge-19527.herokuapp.com", function() {
      console.log("WAKE UP DYNO");
   });
   return reqTimer = setTimeout(wakeUp, 1200000);
}, 1200000);
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send('it is working!') })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
//app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})


app.listen(process.env.PORT , ()=> {
  console.log('app is running on port ${process.env.PORT}');
})