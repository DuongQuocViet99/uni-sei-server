const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res ) => {
  const { procName, procColor, projectid } = req.body;
  db.all(`
    INSERT INTO process (name, color, projectid) 
    VALUES ('${ procName }', '${ procColor }', '${ projectid }')
  `);
  res.end();
}
