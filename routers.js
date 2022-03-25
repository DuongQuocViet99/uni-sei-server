const project = require('./src/project/routes');
const process = require('./src/process/routes');
const user = require('./src/user/routes');
const task = require('./src/task/routes');
const note = require('./src/note/routes');
const action = require('./src/action/routes');
const authentication = require('./src/authentication/routes');

module.exports = app => {
  app.use('/authentication', authentication);
  app.use('/project', project);
  app.use('/process', process);
  app.use('/action', action);
  app.use('/user', user);
  app.use('/task', task);
  app.use('/note', note);
};