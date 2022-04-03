const bcrypt = require("bcrypt");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res, next ) => {
  const { username, password } = req.body;
  
  db.all(`SELECT * FROM user WHERE username='${ username }'`, ( err, row ) => {
    bcrypt.compare( password, row[0].password, ( err, result ) => {
      if( row[0].username && result ) {
        res.locals.user = row;
        res.locals.password = password;
        next();
      } else {
        res.send('Incorrect password or account !');
        return;
      }
    });
  });
}