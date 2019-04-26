// Package Imports
const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router();
var app = express();



const uri ='mongodb+srv://admin:6M8ldlg4BPNz7iNE@cluster0-afxpp.mongodb.net/test?retryWrites=true';
mongoose.connect(uri, { useNewUrlParser: true}).then(()=>{
   console.log("connected");
}).catch(()=>{
  console.log("error occured");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Allows servers to communicate with each other
app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});


//Routes for different users
const investorRoute = require("./server/routes/investor");
const investeeRoute = require("./server/routes/investee");
app.use("/user/investor", investorRoute);
app.use("/user/investee", investeeRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.sendStatus(err.status)
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

module.exports = app;
