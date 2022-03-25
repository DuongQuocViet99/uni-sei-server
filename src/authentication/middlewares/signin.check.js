const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res, next ) => {
  const { username, password } = req.body;
  
  db.each("SELECT * FROM user", ( err, row ) => {
    bcrypt.compare( password, row.password, ( err, result ) => {
      if( row.username === username && result ) {
        res.locals.user = row;
        res.locals.password = password;
        next();
      } else {
        res.send('Incorrect password or account !');
      }
    });
  });
}