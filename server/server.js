const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 6000;

app.use(cors());
app.use(bodyParser.json());

const mysql = require('mysql2');

// create a connection to the database

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test',
});



// Define your routes here

app.get('/users', (req, res) => {
  const userName = req.query.userName
  db.query('SELECT * FROM users WHERE username = ?', [userName],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/users", (req, res) => {
  const userName = req.body.userName
  const password = req.body.password

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)", [userName, password], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/personal_info", (req, res) => {
  const userId = req.body.userId
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const birthDate = req.body.birthDate
  const mobile = req.body.mobile
  const city = req.body.city
  const address = req.body.address
  
  db.query(
    "INSERT INTO personal_info (user_id, first_name, last_name, birth_date, mobile, city, address) VALUES (?,?,?,?,?,?,?)", 
    [userId, firstName, lastName, birthDate, mobile, city, address], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});




  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
