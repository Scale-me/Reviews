const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviewsDB', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongo connected')
});
 
let RestaurantsSchema = mongoose.Schema({
  name: String,
});

let Restaurants = mongoose.model('reviewsDB', RestaurantsSchema);

let save = (restaurant) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let processedRestaurant = new Restaurants(restaurant);
  processedRestaurant.save();
}

save({name: 'mcdonald'})
module.exports = {
  save,
  Restaurants
}
