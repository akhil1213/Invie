const express = require("express");
const InvestorController = require("../controller/investor");

const router = express.Router();


router.post("/signup", InvestorController.createInvestor);

router.post("/login", InvestorController.loginInvestor);

router.patch("/updateDesc", InvestorController.updateInvestorDesc);

module.exports = router;
