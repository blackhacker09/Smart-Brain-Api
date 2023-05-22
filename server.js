const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    // connect to your own database here:
    client: 'pg',
    connection: {
      host: "127.0.0.1",
      port: 5432,
      user: "postgres",
      password: "test",
      database: "smart-brain",

      // uncomment below for db connection
      
      // connectionString: 'postgres://mydb_edwy_user:zjrOcNWoqs50xE4Rr7fEa9bK0ZpvCFr8@dpg-chdvjlndvk4r607l8qlg-a/mydb_edwy',
      // host: "dpg-chdvjlndvk4r607l8qlg-a",
      // port: 5432,
      // user: "mydb_edwy_user",
      // password: "zjrOcNWoqs50xE4Rr7fEa9bK0ZpvCFr8",
      // database: "mydb_edwy",

    }
});


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {res.send('success')})
// app.get('/', (req, res)=> { res.send(db.users) })
app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.put('/image', (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)})

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`);
});