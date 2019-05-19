// Package Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
var app = express();
//Routes for different users
const investorRoute = require("./routes/investor");
const investeeRoute = require("./routes/investee");



const uri ='mongodb+srv://admin:6M8ldlg4BPNz7iNE@cluster0-afxpp.mongodb.net/test?retryWrites=true';
mongoose.connect(uri, { useNewUrlParser: true}).then(()=>{
   console.log("connected");
}).catch(()=>{
  console.log("error occured");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use("/", express.static(path.join(__dirname, "angular")));

// Allows servers to communicate with each other
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use("/user/investor", investorRoute);
app.use("/user/investee", investeeRoute);
// app.use((req, res, next)=> {
//   res.sendFile(__dirname, path.join("angular","index.html"))
// });

module.exports = app;
