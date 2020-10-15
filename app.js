//Bestemmer hvilket packeages der skal bruges
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors())

//app.use('/users', (req,res) => {
  //  res.send("det virker!");
//})

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
