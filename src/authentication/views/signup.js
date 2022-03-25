const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite3');

module.exports = ( req, res ) => {
  const { username, fullname } = req.body;
  const { password } = res.locals;
  
  db.all(`
    INSERT INTO user (fullname, username, password) 
    VALUES ('${ fullname }', '${ username }', '${ password }')
  `);

  res.end();
}