const express = require("express");
const InvesteeController = require("../controller/investee");
const router = express.Router();


router.post("/signup", InvesteeController.createInvestee);

router.post("/login", InvesteeConstroller.loginInvestee);

module.exports = router;
