const express = require("express");
const route = express.Router();

const getAllprocess = require('./views/get.all');

route.get('/', getAllprocess);

module.exports = route;