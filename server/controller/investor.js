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
