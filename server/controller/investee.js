const Investee = require("../models/Investee");
const Investor = require("../models/Investor");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const userInfo = (obj) => {
  return {
    email: obj.email,
    name: obj.name,
    phoneNumber: obj.phoneNumber,
    description: obj.description
  };
}


exports.createInvestee = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const investee = new Investee({
        email: req.body.email,
        password: hash,
        name: req.body.name
      });
      investee.save()
        .then(result => {
          res.status(201).json({
            message: 'Investee user created successfully!',
            result: userInfo(result)
          });
        })
        .catch(error => {
          res.status(500).json({
            error: error
          });
        });
    });
}

exports.loginInvestee = (req, res, next) => {
  let fInvestee;
  Investee.findOne({email: req.body.email})
    .then(investee => {
      if(!investee) {
        return res.status(401).json({
          message: "Authenication failed!"
        });
      }
      fInvestee = investee;
      return bcrypt.compare(req.body.password, investee.password);
    })
    .then(result => {
      if(!result) {
        return res.status(401).json({
          message: "Authenication failed!"
        });
      } else {
        const token = jwt.sign(
          {email: fInvestee.email, investeeId: fInvestee._id},
          "brian_is_a_little_baby",
          {expiresIn: "24h"}
          );
          res.status(200).json({
            token: token,
            expiresIn: 24*3600000
          });
      }
    })
    .catch(error => {
      return res.status(401).json({
        message: "Authenication failed!"
      });
    });
}

exports.getInvestee = (req, res, next) => {
  Investee.findOne(
    {email: req.data.email, _id: req.data.investeeId}
  )
  .then(result => {
    if(!result) {
      return res.status(401).json({
        message: "Not found!"
      });
    }
    else {
      res.status(201).json({
        message: 'Retrieved user information.',
        result: userInfo(result)
      });
    }
  })
  .catch(error => {
    res.status(401).json({
      message: error
    });
  });
}

exports.updateInvestee = (req,res,next) => {
  Investee.findOneAndUpdate(
    {email: req.data.email, _id: req.data.investeeId},
    {name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      description: req.body.description})
    .then(documents => {
      res.status(200).json({
        message: "Updated Description Successfully",
        result: userInfo(documents)
      });
    })
    .catch(error => {
      res.status(401).json({
        message: error
      });
    });
}

exports.generateFeed = (req,res,next) => {
  Investor.find({}).limit(5)
    .then(result =>{
      if(!result){
        return res.status(404).json({
          message:"Users cannot be retrieved."
        });
      }
      else{
        res.status(201).json(result);
      }
  })
  .catch(error =>{
    res.status(401).json({
      message: error
    });
  });
}
