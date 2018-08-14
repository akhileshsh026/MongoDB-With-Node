var experss = require('express'),
   app = experss(),
   engines = require('consolidate');


   app.engine('html', engines.nunjucks);
   app.set('view engine','html');
   app.set('views',__dirname,'/views');

   app.get('/' , function(req,res) {
       res.render('hello',{'name':'templetes'});   // hello is templete stored in /views folder
   });

   app.use(function(req,res) {
       res.sendStatus(404);
   });

   var server = app.listen('9000',function() {
       var port = server.address().port;
       console.log('Server is listing at port no : ',port);

   })