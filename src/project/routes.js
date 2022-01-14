const express = require("express");
const route = express.Router();

const getAllproject = require('./views/get.all');

route.get('/', getAllproject);

module.exports = route;