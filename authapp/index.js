const express = require('express');
var session = require('express-session');

const app = express();

let db = [];

app.use(express.urlencoded({extended : true}));

app.use(session({
    secret:'amazingsecret', //to create a hash of the cookie data to prevent tampering with
    resave: true,//if true it will save all sessions every time even if no changes were
    saveUninitialized:true,//it saves new sessions that have not been modified yet
}));


app.get('/',(req,res)=>{
    isValidUser(req,res);
    res.sendFile(__dirname + '/templates/index.html');
});

app.get('/auth',(req,res)=>{
    res.sendFile(__dirname + '/templates/auth.html');
});

db.push({
    "username":"Admin123",
    "email": "admin@email.com",
    "password": "80706050",
})

app.post('/login',(req,res)=>{
    isValidUser(req,res);
    db.forEach((user)=>{
    if((req.body.username === user.username || 
        req.body.email === user.email) && 
        req.body.password === user.password){

        req.session.is_logged_in = true;
        res.redirect('/');
        return;
        }
    });
    res.send("<h1>Invalid Username or Password</h1>");
});

app.post('/register',(req,res)=>{
    isValidUser(req,res);
    
    //Check the user is exist or not..
    db.forEach((user)=>{
        if(user.username === req.username){
            alert(`Username ${req.username} already exists`);
            return;
        }
        else if(user.email === req.email){
            alert(`${req.email} email address has been used by another account.`);
            return;
        }
    });
    db.push({
        "username" : req.body.username,
        "email" : req.body.email,
        "password" : req.body.password,
    });
    req.session.is_logged_in = true;
    console.log(`User Created Successfully, Username : ${req.body.username}`);
    res.redirect('/');
});

app.listen(3000,()=>{
    console.log("Server is running on : http://localhost:3000");
});


function isValidUser(req,res) {
    if(!req.session.is_logged_in){
        res.redirect('/auth');
        return;
    }
}