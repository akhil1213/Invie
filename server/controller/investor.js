const Investor = require("../models/Investor");

const bcrypt = require("bcrypt");



exports.createInvestor = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const investor = new Investor({
      email: req.body.email,
      password: hash,
      username: req.body.username,
      phoneNumber: req.body.phoneNumber
    });
    investor.save()
      .then(result => {
        res.status(201).json({
          message: 'Investor user created!',
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
  Investor.findOne({username: req.body.username})
    .then(investor => {
      if(!investor) {
        return res.status(401).json({
          message: "Authenication failed!"
        });
      }
      finvestor = investor;
      return bcrypt.compare(req.body.password, investor.password);
    })
    .then(result => {
      if(!result) {
        return res.status(401).json({
          message: "Authenication failed!"
        });
      } else {
        const token = jwt.sign(
          {username: fInvestor.username, investorId: fInvestor._id},
          "brian_is_a_little_baby",
          {expiresIn: "24h"}
          );
          res.status(200).json({
            token: token
          });
      }
    })
    .catch(error => {
      return res.status(401).json({
        message: "Authenication failed!"
      });
    });
}


exports.updateInvestor = (req,res,next) => {
  Investor.findOneAndUpdate(
    {username: req.data.username},
    {description: req.body.newDescription})
    .then(documents => {
      res.status(200).json({
        message: "Updated Description Successfully",
        posts: documents
      });
    })
    .catch(error => {
      res.status(401).json({
        message: error
      });
    });
  }
