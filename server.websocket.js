let WSServer = require('ws').Server;
let server = require('http').createServer();
let port = 8081


// Create web socket server on top of a regular http server
let wss = new WSServer({

  server: server
});

// Also mount the app here


wss.on('connection', function connection(ws) {
 
  ws.on('message', function incoming(message) {
    
    console.log(`received: ${message}`);
    
    ws.send(JSON.stringify({

      answer: 41344
    }));
  });
});


server.listen(port, function() {

  console.log(`http/ws server listening on ${port}`);
});