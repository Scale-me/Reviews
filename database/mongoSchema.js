const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RestaurantsSchema = new Schema({
  name: String
});
var CollectionName = 'Restaurants'
module.exports = mongoose.model(CollectionName, RestaurantsSchema)