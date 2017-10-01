const express = require('express')
const app = express()

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://DanielC.:qweqweqwelfybr92@ds147454.mlab.com:47454/neightbor";




app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
})

app.get("/test" , function(){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Company Inc", address: "Highway 37" };
  db.collection("Test").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
})