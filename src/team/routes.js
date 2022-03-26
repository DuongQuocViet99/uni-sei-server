const express = require("express");
const route = express.Router();

const getAllTeam = require('./views/get.all')

route.get('/:projectid', getAllTeam );

module.exports = route;