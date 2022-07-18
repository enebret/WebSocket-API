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
    let msg = JSON.parse(message)
    console.log(msg);
    
    ws.send(JSON.stringify({

      answer: 41344
    }));

    ws.on('close', function close() {
      console.log('disconnected');
    });
  });
});


server.listen(port, function() {

  console.log(`http/ws server listening on ${port}`);
});