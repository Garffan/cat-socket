/**
 * Created by marioz on 5/14/15.
 */
var http = require('http');
var app = http.createServer();

var io = require('socket.io').listen(app);

io.on('connection', function(socket) {
  console.log('connected!');
  socket.emit('getUserName', '12333');

  var userName = 'lol';
  setInterval(function () {
    socket.emit('getUserName', userName + ' ' + new Date());
  });
  socket.on('getUserName', function (data, cb) {
    cb(12333);
  });
});

app.listen(3002);
