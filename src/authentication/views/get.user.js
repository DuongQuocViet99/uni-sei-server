const jwt = require('jsonwebtoken');

module.exports = ( req, res ) => {
  const { authorization } = req.headers;  
  const decoded = jwt.decode( authorization );
  res.json({ user: decoded.user })
}
