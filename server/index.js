var fs = require("fs");
var io = require("socket.io").listen(3010);

io.on('connection', function(socket){
    io.emit('connectionConfirmation', "You have connected with socket ID: " + socket.id);
});
