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
  BusinessIdea.findOne({userId: req.data.investeeId})
	.then(BusinessIdea =>{
	   if(!BusinessIdea) {
	     return res.status(404).json({
	     	message: "Object cannot be found"
	     });
	   }
	   return res.status(200).json({
	     BusinessIdea: BusinessIdea,
	       message: "Object found"
	   });
	 })
	.catch(error => {
	  console.log(error);
	  return res.status(401).json({
	  	message: error
	  });
	});
}


exports.updateBusinessIdea = (req, res, next) => {
  Investee.findOneAndUpdate (
      {userId : req.data.investeeId},
        {
          name: req.body.name,
          objective: req.body.objective,
          description: req.body.description,
          weblink: req.body.weblink,
          tags: req.body.tags,
          owners: req.body.owners,
          typeOfBusiness: req.typeOfBusiness
        })
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
