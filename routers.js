const project = require('./src/project/routes');
const user = require('./src/user/routes');
const task = require('./src/task/routes');

module.exports = app => {
  app.use('/project', project);
  app.use('/user', user);
  app.use('/task', task);
};