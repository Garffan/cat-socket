/**
 * Created by marioz on 5/14/15.
 */
var http = require('http');
var app = http.createServer();

var io = require('socket.io').listen(app);

io.on('connection', function(socket) {

  console.log('connected');
  setInterval(function () {
    socket.emit('serverDate', new Date());
  }, 1000);
  socket.on('serverDate', function (data, cb) {
    console.log(data);
    cb('11111111answer');
  });
  socket.on('serverDate2', function (data, cb) {
    console.log(data);
    cb('22222222answer');
  });
  socket.on('serverDate3', function (data, cb) {
    console.log(data);
    cb('33333333answer');
  });

});

app.listen(3002);
