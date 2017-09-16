var socket = io("https://mafia.acsmars.com",{path: '/socket.io'}); // Hardset for now for localhost debug reasons
socket.on('connectionConfirmation', function(msg){
    console.log("Connected: " + msg);
});

module.export = socket;