const Investee = require("../models/Investee");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");


exports.createInvestee = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const investee = new Investee({
        email: req.body.email,
        password: hash,
        username: req.body.username,
        phoneNumber: req.body.phoneNumber
      });
      investee.save()
        .then(result => {
          res.status(201).json({
            message: 'Investee user created!',
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

exports.loginInvestee = (req, res, next) => {
  let fInvestee;
  Investee.findOne({username: req.body.username})
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
          {username: fInvestee.username, investeeId: fInvestee._id},
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
