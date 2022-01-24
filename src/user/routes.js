const express = require("express");
const route = express.Router();

const getAlluser = require('./views/get.all');
const getOneuser = require('./views/get.one');

route.get('/', getAlluser);
route.get('/:projectid', getOneuser);

module.exports = route;