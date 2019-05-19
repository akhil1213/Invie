const express = require("express");
const InvestorController = require("../controller/investor");
const BusinessIdeaController = require("../controller/businessIdea");
const midAuth = require("../tokenAuth/authInvestor");

const router = express.Router();


router.post("/signup", InvestorController.createInvestor);

router.post("/login", InvestorController.loginInvestor);
//Use this route to update investor information.
//Frontend needs to pass in: name, phoneNumber, description. weblink, currentCompany, interest.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.patch("/updateDesc", midAuth, InvestorController.updateInvestor);

//Use this route to retrieve the investor information.
//You do not need to pass in any information.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.get("/getInvestor", midAuth, InvestorController.getInvestor);

//Use this route to generate the feed of business idea.
//You don't need to pass information.
//ONLY CALL THIS ROUTE IF USER IS LOGGED IN!
router.get("/generateFeed", midAuth, BusinessIdeaController.generateFeed);

module.exports = router;
