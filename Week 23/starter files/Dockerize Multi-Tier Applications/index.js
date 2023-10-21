var express     = require('express');
var app         = express();
var MongoClient = require('mongodb').MongoClient;

// the name "mongo" comes from the docker link, in the docker-compose.yml
var url = "mongodb://127.0.0.1/dockerdemo";
var db;

MongoClient.connect(url, function (err, database) {
    if(err){ console.log('failed to connect: ' + err); return;}
    db = database;
    console.log("Connected correctly to server!!");
});

app.get('/', function(req, res){
    res.send('Greetings from the server!!');
    console.log("Up & running!");
});

app.get('/createMongo', function(req, res){ 
    console.log("Hello man");
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';
    console.log(name);

    var collection = db.collection('customers');

    var doc = {'name':name, 'email':email};
    collection.insert(doc, {w:1}, function(err, result) {
        console.dir(result);
        res.send(result);
    });      
});


app.get('/readMongo', function(req, res){  

    var results = null;    
    var collection = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.dir(docs);
            res.send(docs);
        });
});

app.listen(3000);