const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
//const profile = require('./controllers/profile');
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const db = knex({
  client: 'pg',
  connection: {
   connectionString :"postgres://xhmsdecgqvzvmh:7d47d68ebabd371bd94a7984ab707e9fedbc81b282adf7c082cedbb1a67ce784@ec2-34-198-243-120.compute-1.amazonaws.com:5432/d7cripqnme8sim",
   ssl: true
  }
})
console.log(process.env.DATABASE_URL);

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> { res.send('it is working!') })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
//app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})


app.listen(process.env.PORT || 3001, ()=> {
  console.log('app is running on port ${process.env.PORT}');
})