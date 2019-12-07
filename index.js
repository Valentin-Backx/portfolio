var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('views','./views')

app.set('view engine', 'jade');

app.get('/', function (req, res) {
   res.sendfile('index')
})

var port = normalizePort(process.env.PORT || '8081');

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
function normalizePort(val) {
   var port = parseInt(val, 10);
 
   if (isNaN(port)) {
     // named pipe
     return val;
   }
 
   if (port >= 0) {
     // port number
     return port;
   }
 
   return false;
 }
 