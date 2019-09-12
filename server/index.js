const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const path = require('path');
const compression = require('compression');
const mongodb = require('../database/index_mongodb.js')

const PORT = 3003;

app.use(express.static(path.join(__dirname,  '../public')));

app.use(bodyParser.json());

app.use(compression());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/', (req, res) => {
  mongodb.save('helloooo')
  res.send('get complete')
});

// app.post('/api/:restaurantName/reviews/', (req, res) => {
//   mongodb.save('helloooo')
//   res.send('get complete')
// });

// app.put('/api/reviews/:restaurantName', (req, res) => {
//   mongodb.save('helloooo')
//   res.send('get complete')
// });

// app.delete('/api/reviews/:restaurantName', (req, res) => {
//   mongodb.save('helloooo')
//   res.send('get complete')
// });

app.get('/api/:restaurantName/reviews', (req, res) => {
  let input = `SELECT id FROM Restaurants where name='${req.params.restaurantName}';`;

  db.query(input, (error, results) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      let joinQuery = `SELECT * FROM Users JOIN Reviews ON Reviews.restaurant_id= '${results[0].id}' AND Reviews.user_id=Users.id;`
      db.query(joinQuery, (error, results) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          res.send(results);
        }
      })
    }
  });
});

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
