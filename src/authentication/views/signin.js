const jwt = require("jsonwebtoken");

module.exports = ( req, res ) => {
  const { user, password } = res.locals;
  const token = jwt.sign({ user, password }, process.env.TOKEN_SECRET );
  
  res.json( token );
}
