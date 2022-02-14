const express = require("express");
const route = express.Router();

const getAllaction = require('./views/get.all');

route.get('/', getAllaction);

module.exports = route;