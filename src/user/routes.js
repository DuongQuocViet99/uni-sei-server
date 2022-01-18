const express = require("express");
const route = express.Router();

const getAlluser = require('./views/get.all');

route.get('/', getAlluser);

module.exports = route;