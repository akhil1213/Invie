const express = require("express");
const InvestorController = require("../controller/investor");
const midAuth = require("../tokenAuth/authInvestor");

const router = express.Router();


router.post("/signup", InvestorController.createInvestor);

router.post("/login", InvestorController.loginInvestor);

router.patch("/updateDesc", midAuth, InvestorController.updateInvestor);

module.exports = router;
