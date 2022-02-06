const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res ) => {
  const { projectid } = req.params;
  const { anchor } = req.body;
  db.all(`UPDATE project SET anchor='${ anchor }' WHERE projectid=${ projectid }`);
  res.end();
}
