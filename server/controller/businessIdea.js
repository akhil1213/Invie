const BusinessIdea = require("../models/BusinessIdea");


exports.createBusinessIdea = (req, res, next) => {
  const idea = new BusinessIdea({
    userId: req.data.investeeId
  });
  idea.save()
  .then(result => {
    res.status(201).json({
      message: "Idea created successfully!",
      result: result
    });
  })
  .catch(error => {
    res.status(404).json({
      message: error
    });
  });
}

exports.getBusinessIdea = (req, res, next) => {

}

exports.updateBusinessIdea = (req, res, next) => {
  Investee.findOneAndUpdate (
      {userId : req.data.InvesteeId})
      .then(documents => {
          res.status(200).json({
              message: "Updated BusinessIdea",
              posts: documents
          });
      })
      .catch(error => {
          res.status(401).json({
            message: error
          });
        });
      }
