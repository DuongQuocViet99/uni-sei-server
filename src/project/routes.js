const express = require("express");
const route = express.Router();

const getAllproject = require('./views/get.all');
const getOneproject = require('./views/get.one');
const putRenameproject = require('./views/put.rename');

route.get('/', getAllproject);
route.get('/:projectid', getOneproject);
route.put('/:projectid/rename', putRenameproject);

module.exports = route;