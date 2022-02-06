const express = require("express");
const route = express.Router();

const getAllproject = require('./views/get.all');
const getOneproject = require('./views/get.one');
const putRenameproject = require('./views/put.rename');
const putAnchorproject = require('./views/put.anchor')

route.get('/', getAllproject);
route.get('/:projectid', getOneproject);
route.put('/:projectid/rename', putRenameproject);
route.put('/:projectid/anchor', putAnchorproject);

module.exports = route;