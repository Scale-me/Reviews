


// // const Mongo = require('mongodb');
// // const conn = new Mongo();
// // const mongoDb = conn.getDB("reviewsDB");
// const mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var mongodb = mongoose.connection;
// mongodb.on('error', console.error.bind(console, 'connection error:'));
// mongodb.once('open', function() {
//   console.log('connected')
// });

//   // define a schema
//   var RestaurantsSchema = new Schema({ name: 'string'});

//   // assign a function to the "methods" object of our animalSchema
//   RestaurantsSchema.methods.findSimilarTypes = function(cb) {
//     return this.model('Restaurants').find({ name: this.name }, cb);
//   };

//   var Restaurants = mongodb.model('Restaurants', RestaurantsSchema);
//   var McDonald = new Restaurants({ name: 'McDonald' });

//   //insert one
//   Restaurants.create({ name: 'McDonalds' }, function (err, small) {
//     if (err) return handleError(err);
//     console.log('saved')
//   });

//   //insert many

//   var arr = [{ name: 'Popeyes' }, { name: 'Burger King' }];
//   Restaurants.insertMany(arr, function(error, docs) {});


// module.exports = mongodb;
// var tank = mongoose.connection;
// var schema = new mongoose.Schema({ name: 'string', size: 'string' });
// var Tank = tank.model('Tank', schema);

// var Tank = tank.model('Tank', schema);

// var small = new Tank({ size: 'small' });
// small.save(function (err) {
//   if (err) return handleError(err);
//   // saved!
// });

// // or

// Tank.create({ size: 'small' }, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// });

// // or, for inserting large batches of documents
// Tank.insertMany([{ size: 'small' }], function(err) {

// });