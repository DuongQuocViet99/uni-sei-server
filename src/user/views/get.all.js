const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res ) => {
  db.all('SELECT * FROM user', ( err, rows ) => {
    res.json( rows );
  });
}
