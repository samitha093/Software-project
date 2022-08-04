const express = require('express');
const cors = require('cors');
const http = require ("http");
const { Server } = require('socket.io');

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin:"*",
    method: ["GET", "POST"]
  },
});

io.on("connection", (socket)=>{
  console.log("User connected with :" + socket.id);
  socket.on("sendMessage",(data)=>{
    console.log("send message to : ", data.message)
    socket.to(data.message).emit("broadcastMessage",data);
  });
  socket.on("joinRoom",(data)=>{
    console.log("createdroom : ", data.message)
    socket.join(data.message);
  });
})

app.get("/",(_,res)=>res.send('WebSocket is running'));

server.listen(7000, ()=>{
    console.log("Server is starting");
});