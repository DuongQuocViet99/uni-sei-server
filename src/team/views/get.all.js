const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res ) => {
  const { projectid } = req.params;

  db.all(`SELECT p.projectid, u.fullname FROM team
  INNER JOIN project as p on team.projectid = p.projectid
  INNER JOIN user as u on team.userid = u.userid
  WHERE team.projectid = '${ projectid }'`, ( err, rows ) => {
    res.json( rows );
  });
}
