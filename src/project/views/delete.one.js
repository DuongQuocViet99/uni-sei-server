const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res ) => {
  const { projectid } = req.params;
  db.all('PRAGMA foreign_keys = ON');
  db.all(`DELETE FROM project WHERE projectid = ${ projectid };`);
  res.end();
}
