//Bestemmer hvilket packeages der skal bruges
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors())

//importerer router
const userRoute = require("./routes/user");
//laver et middlewear der sørge for at vi ender i det rigtige endpoint
app.use("/user", userRoute);

const interestRoute = require("./routes/interest");

app.use("/interest", interestRoute);

const matchRoute = require("./routes/match");

app.use("/match", matchRoute);


//Routes
app.get('/',function(req,res){
    res.send("Welcome to the dating app!");
});

//Bestemmer hvilken port der skal lyttes på
app.listen(5000,function(){
console.log("Server running on port 5000")
})

// Importerer controller 

const protectedController = require('../GodkendelsesopgaveDating/controler/protected')
const loginController = require('../GodkendelsesopgaveDating/controler/logIn')

//henter middleware
const ensureToken = require('../GodkendelsesopgaveDating/Middelwear/ensureToken')
//read endpoint på routen '/'

app.get('/protected', ensureToken,  protectedController)

app.post('/login', loginController)



//importerer olysninger om brugerne
const user = require("../GodkendelsesopgaveDating/modules/user");
const userInterest = require("../GodkendelsesopgaveDating/modules/interest");




//laver et post endpoint 
app.post('/user1post', (req, res) => {
res.send(user.freeUser);
  })
  app.post('/user2post', (req, res) => {
    res.send(user.payingUser);
  })
  
  //delete user
  app.delete('/user1delete', (req, res) => {
    res.send("har slettet " + user.freeUser.name);
  })
  app.delete('/user2delete', (req, res) => {
    res.send("har slettet " + user.payingUser.name);
  })
  
  
  //put (update) users
  app.put('/user1put', (req, res) => {
    res.send(user.freeUser);
  })
  app.put('/user2put', (req, res) => {
    res.send(user.payingUser);
  })
  
  // herefter laves der CRUD på match!!!!! 
  app.get('/user1match', (req, res) => {
    res.send(user.freeUser.match);
  })
  
  app.get('/user2match', (req, res) => {
    res.send(user.payingUser.match);
  })
  //post på match 
  app.post('/1matchpost', (req, res) => {
    res.send(user.freeUser.match);
  })
  app.post('/2matchpost', (req, res) => {
    res.send(user.payingUser.match);
  })
  //delete match
  app.delete('/1matchdelete', (req, res) => {
    res.send("har slettet " + user.freeUser.match);
  })
  app.delete('/2matchdelete', (req, res) => {
    res.send("har slettet " + user.payingUser.match);
  })
  //put (update) match
  app.put('/1matchput', (req, res) => {
    res.send(user.freeUser.match);
  })
  app.put('/2matchput', (req, res) => {
    res.send(user.payingUser.match);
  })
  
  
  // herefter laves der CRUD på interest
  app.get('/user1interests', (req, res) => {
    res.send(userInterest.user1Interes);
  })
  
  app.get('/user2interests', (req, res) => {
    res.send(userInterest.user2Interes);
  })
  
  //post på interests
  app.post('/1interestspost', (req, res) => {
    res.send(userInterest.user1Interes);
  })
  app.post('/2interestspost', (req, res) => {
    res.send(userInterest.user2Interes);
  })
  //delete match
  app.delete('/1interestsdelete', (req, res) => {
    res.send("har slettet " + userInterest.user1Interes);
  })
  app.delete('/2interestsdelete', (req, res) => {
    res.send("har slettet " + userInterest.user2Interes);
  })
  //put (update) match
  app.put('/1interestsput', (req, res) => {
    res.send(userInterest.user1Interes);
  })
  app.put('/2interestsput', (req, res) => {
    res.send(userInterest.user2Interes);
  })
