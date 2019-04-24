const express = require("express");
const InvestorController = require("../controller/investor");
const bcrypt = require('bcrypt');

const router = express.Router();


router.post("/signup", InvestorController.createInvestor);

module.exports = router;
