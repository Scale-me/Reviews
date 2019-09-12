const mongoose = require('mongoose');
const Schema = require('./mongoSchema.js');
var myDB = 'mongodb://localhost/reviewsDB';

mongoose.connect(myDB, {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

var Restaurant = Schema;

let save = (name) => {
  let processedRestaurant = new Restaurant({name: name});
  processedRestaurant.save();
  console.log('saved!', processedRestaurant)
}

module.exports = {
  save,
  Restaurant
}
