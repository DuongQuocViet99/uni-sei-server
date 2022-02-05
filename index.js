const express = require("express");
const app = express();
const port = 3001;

require('./configs')( app, express );
require('./routers')( app );

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${ port }`);
});