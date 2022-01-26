const express = require("express");
const route = express.Router();

const getAllnote = require('./views/get.all');

route.get('/', getAllnote);

module.exports = route;