const Investor = require("../models/Investor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");



exports.createInvestor = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const investor = new Investor({
      email: req.body.email,
      password: hash,
      name: req.body.name
    });
    investor.save()
      .then(result => {
        delete result.password;
        res.status(201).json({
          message: 'Investor user created successfully!',
          result: result
        });
      })
      .catch(error => {
        res.status(500).json({
          error: error
        });
      });
  });
}


exports.loginInvestor = (req, res, next) => {
  let fInvestor;
  Investor.findOne({email: req.body.email})
    .then(investor => {
      if(!investor) {
        return res.status(401).json({
          message: "Authenication failed!"
        });
      }
      fInvestor = investor;
      return bcrypt.compare(req.body.password, investor.password);
    })
    .then(result => {
      if(!result) {
        return res.status(401).json({
          message: "Authenication failed!"
        });
      } else {
        const token = jwt.sign(
          {email: fInvestor.email, investorId: fInvestor._id},
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
      console.log(error);
      return res.status(401).json({
        message: "Authenication failed!"
      });
    });
}

exports.getInvestor = (req, res, next) => {
  Investor.findOne(
    {email: req.data.email, _id: req.data.investorId}
  )
  .then(result => {
    if(!result) {
      return res.status(401).json({
        message: "Not found!"
      });
    }
    else {
      delete result.password;
      delete result._id;
      res.status(201).json({
        message: 'Retrieved user information.',
        result: result
      });
    }
  })
  .catch(error => {
    res.status(401).json({
      message: error
    });
  });
}

exports.updateInvestor = (req,res,next) => {
  Investor.findOneAndUpdate(
    {email: req.data.email, _id: req.data.investorId},
    {name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      description: req.body.description,
      weblink: req.body.weblink,
      currentCompany: req.body.currnetCompany,
      interest: req.body.interest})
    .then(documents => {
      delete document.password;
      delete document._id;
      res.status(200).json({
        message: "Updated Description Successfully!",
        result: documents
      });
    })
    .catch(error => {
      res.status(401).json({
        message: error
      });
    });
  }
