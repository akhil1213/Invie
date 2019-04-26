const express = require("express");
const InvesteeController = require("../controller/investee");
const router = express.Router();


router.post("/signup", InvesteeController.createInvestee);

router.post("/login", InvesteeController.loginInvestee);

router.patch("/updateDesc", InvesteeController.updateInvesteeDesc);

module.exports = router;
