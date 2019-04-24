const express = require("express");
const InvestorController = require("../controller/investor");

const router = express.Router();


router.post("/signup", InvestorController.createInvestor);

router.post("/login", InvestorConstroller.loginInvestor);

module.exports = router;
