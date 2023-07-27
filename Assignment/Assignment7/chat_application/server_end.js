const express = require('express');
const http  = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

app.use(express.static(__dirname + '/templates'));


//Global variable...
let records = [];


//Route start :)
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/templates/index.html');
});

app.get('/chats', (req,res)=>{
    res.sendFile(__dirname + '/templates/chats.html');
})


//Route End :(

//For Server Info...
io.on('connection', (socket)=>{
    socket.on('disconnect', ()=>{
        console.log(`User ${socket.id} Disconnected`);
    });

    socket.on('user connection', (user)=>{
        console.log(JSON.parse(user));
        updateRecord(user);
    })

    console.log(`User ${socket.id} Connected`);
});

//Server Listen here :)
server.listen(PORT,()=>{
    console.log("Server is running on port: http://localhost:"+PORT);
})

//helper function

function updateRecord(user){
    for(let record in records){
        if(record['uname'] === user['uname'] || record['email'] === user['email']){
            record['status'] = true;
            return record;
        }
    }
    user['count']++;
    records.push(user);
    return user;
}