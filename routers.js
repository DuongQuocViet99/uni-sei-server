const project = require('./src/project/routes');

module.exports = app => {
  app.use('/project', project);
};