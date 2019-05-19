const express = require("express");
const InvesteeController = require("../controller/investee");
const BusinessIdeaController = require("../controller/businessIdea");
const midAuth = require("../tokenAuth/authInvestee");

const router = express.Router();


router.post("/signup", InvesteeController.createInvestee);

router.post("/login", InvesteeController.loginInvestee);

//Use this route to initialize the first business idea for user to the database.
//This route will only create an empty idea with the users _id linked to it.
//You do not need to pass in any information.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.post("/createIdea", midAuth, BusinessIdeaController.createBusinessIdea);

//Use this route to retrieve the business idea.
//You do not need to pass in any information.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.get("/getIdea", midAuth, BusinessIdeaController.getBusinessIdea);

//Use this route to update user business idea information.
//All the frontend needs to pass in is: name, objective, description, weblink, tags (array), owners (array), typeOfBusiness.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.patch("/updateIdea", midAuth, BusinessIdeaController.updateBusinessIdea);

//Use this route to update investee information.
//Information that need to be passed in from the frontend: name, phoneNumber, description.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.patch("/updateDesc", midAuth, InvesteeController.updateInvestee);

//Pass in a string of comment to add to the array of comments.
//Add it as ---message---.
router.patch("/pushComment", midAuth, BusinessIdeaController.updateBusinessComments);

//Use this route to retrieve the investee information.
//You do not need to pass in any information.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.get("/getInvestee", midAuth, InvesteeController.getInvestee);
//Use this route to generate the feed of investors.
//You don't need to pass information.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.get("/generateFeed", midAuth, InvesteeController.generateFeed);

module.exports = router;
