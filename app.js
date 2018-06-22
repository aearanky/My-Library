var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
 // Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  insertDocuments(db, function() {
    findDocuments(db, function() {
       updateDocument(db, function() {
         removeDocument(db, function() {
          db.close();
      });
      });
    });
  });
});
 
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  insertDocuments(db, function() {
    indexCollection(db, function() {
      db.close();
    });
