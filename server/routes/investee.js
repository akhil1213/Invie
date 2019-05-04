const express = require("express");
const InvesteeController = require("../controller/investee");
const BusinessIdeaController = require("../controller/businessIdea");
const midAuth = require("../tokenAuth/authInvestee");

const router = express.Router();


router.post("/signup", InvesteeController.createInvestee);

router.post("/login", InvesteeController.loginInvestee);

router.post("/createIdea", midAuth, BusinessIdeaController.createBusinessIdea);

router.get("/getIdea", midAuth, BusinessIdeaController.getBusinessIdea);

router.patch("/updateIdea", midAuth, BusinessIdeaController.updateBusinessIdea);

router.patch("/updateDesc", midAuth, InvesteeController.updateInvestee);

module.exports = router;
