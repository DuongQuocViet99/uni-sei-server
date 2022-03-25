const bcrypt = require("bcrypt");

module.exports = async ( req, res, next ) => {
  const { password } = req.body;
  
  const salt = await bcrypt.genSalt( 10 );
  const hash = await bcrypt.hash( password, salt );
  res.locals.password = hash;
  
  next();
}