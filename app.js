var MongoClient = require('mongodb').MongoClient ,
   assert  = require('assert');

   const url = 'mongodb+srv://Akhileshsh026:Akhilesh-123@cluster0-rsbn2.gcp.mongodb.net';
    
   MongoClient.connect(url,function(err, client) {

        assert.equal(null,err);
        console.log('sucesfully connected to server');


        const db = client.db('videos');
        // Find Some documents in our Server
        db.collection('movies').find({}).toArray(function(err,docs) {
          
          // print title of movies
           docs.forEach(function(doc) {
             console.log(doc.title);
           });
               client.close();
        });

        console.log('Colling the Find()');
   });