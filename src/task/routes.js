const express = require("express");
const route = express.Router();

const getAlltask = require('./views/get.all')

route.get('/', getAlltask);

module.exports = route;