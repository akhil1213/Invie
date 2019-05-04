const express = require("express");
const InvesteeController = require("../controller/investee");
const midAuth = require("../tokenAuth/authInvestee");

const router = express.Router();


router.post("/signup", InvesteeController.createInvestee);

router.post("/login", InvesteeController.loginInvestee);

router.patch("/updateDesc", midAuth,InvesteeController.updateInvestee);

module.exports = router;
