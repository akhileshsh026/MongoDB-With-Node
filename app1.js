var experss = require('express'),
   app = experss(),
   engines = require('consolidate');


   app.get('/' , function(req,res) {
       res.send('Hello World');
   });

   app.use(function(req,res) {
       res.sendStatus(404);
   });

   var server = app.listen('9000',function() {
       var port = server.address().port;
       console.log('Server is listing at port no : ',port);

   })