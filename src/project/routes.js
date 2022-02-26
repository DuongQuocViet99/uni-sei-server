const express = require("express");
const route = express.Router();

const getAllproject = require('./views/get.all');
const getOneproject = require('./views/get.one');
const putRenameproject = require('./views/put.rename');
const deleteOneproject = require('./views/delete.one');

route.get('/', getAllproject);
route.get('/:projectid', getOneproject);
route.put('/:projectid/rename', putRenameproject);
route.delete('/:projectid/delete', deleteOneproject);

module.exports = route;