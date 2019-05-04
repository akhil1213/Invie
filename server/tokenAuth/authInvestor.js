const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.token;
    const decodedToken = jwt.verify(token, "brian_is_a_little_baby");
    req.data = {email: decodedToken.email, investorId: decodedToken.investorId};
    next();
  } catch (error) {
    res.status(401).json({message: "Authenication error!"});
  }
}
