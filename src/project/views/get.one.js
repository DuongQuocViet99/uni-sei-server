const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res ) => {
  const { projectid } = req.params;
  db.all(`SELECT * FROM project WHERE projectid = ${ projectid }`, ( err, rows ) => {
    res.json( rows );
  });
}
