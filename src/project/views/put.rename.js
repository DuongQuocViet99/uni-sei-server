const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res ) => {
  const { projectid } = req.params;
  const { name } = req.body;
  db.all(`UPDATE project SET name='${ name }' WHERE projectid=${ projectid }`);
  res.end();
}
