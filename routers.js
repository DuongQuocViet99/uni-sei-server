const project = require('./src/project/routes');
const user = require('./src/user/routes');

module.exports = app => {
  app.use('/project', project);
  app.use('/user', user);
};