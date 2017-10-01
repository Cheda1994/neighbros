const express = require('express')
const app = express()

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://DanielC.:qweqweqwelfybr92@ds147454.mlab.com:47454/neightbor";


app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port') , function () {
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
  var myobj = { name: "Company Inc", address: "Highway" };
  db.collection("Test").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
})