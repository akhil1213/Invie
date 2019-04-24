const Investee = require("../models/Investee");

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
