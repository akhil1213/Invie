const Investor = require("../models/Investor");

const bcrypt = require("bcrypt");



exports.createInvestor = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    console.log("inside hash");
    const investor = new Investor({
      email: req.body.email,
      password: hash,
      name: req.body.name
    });
    investor.save()
      .then(result => {
        console.log("investor saved");
        res.status(201).json({
          message: 'Investor user created!',
          result: result
        });
      })
      .catch(error => {
        console.log(error);
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
          {email: fInvestor.email, investorId: fInvestor._id},
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


exports.updateInvestorDesc = (req,res,next) => {
  Investor.findOneAndUpdate(
    {email: req.data.email},
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
