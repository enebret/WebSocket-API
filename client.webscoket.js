const WebSocket = require('ws');
const url = 'ws://localhost:8081'
const connection = new WebSocket(url)
connection.onopen = () => {
  let fg = {
    "update_id": "c0efd8a1-b3b8-49b7-92b1-69edc8bd6c0c",
    "username": "jenna",
    "ts": 1503031275211,
    "newSteps": 17
  }
  connection.send(JSON.stringify(fg)) 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
connection.onmessage = (e) => {
  console.log(e.data)
}