var experss = require('express'),
   app = experss(),
   engines = require('consolidate'),
   MongoClient = require('mongodb').MongoClient,
   assert = require('assert');

   const url = 'mongodb+srv://Akhileshsh026:Akhilesh-123@cluster0-rsbn2.gcp.mongodb.net';
    
   app.engine('html', engines.nunjucks);
   app.set('view engine','html');
   app.set('views',__dirname + '/views');

MongoClient.connect(url,function(err,db) {
    
    assert.equal(null,err);
    console.log('Sucessfully connected to server');

    app.get('/' , function(req,res) {
        db.collection('movies').find({}).toArray(function(err, docs) {
            res.render('movie',{'movies':docs});
        });
    });

    app.use(function(req,res) {
        res.sendStatus(404);
    });

    
   var server = app.listen('9000',function() {
    var port = server.address().port;
    console.log('Server is listing at port no : ',port);
   });

});


