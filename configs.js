const cors = require('cors');

module.exports = ( app, express ) => {
  app.use(cors());
  app.use( express.urlencoded({ extended: true }) );
  app.use( express.json() ); // To parse the incoming requests with JSON payloads
}