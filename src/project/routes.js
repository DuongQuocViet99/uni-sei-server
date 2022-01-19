const express = require("express");
const route = express.Router();

const getAllproject = require('./views/get.all');
const getOneproject = require('./views/get.one');

route.get('/', getAllproject);
route.get('/:projectid', getOneproject);

module.exports = route;