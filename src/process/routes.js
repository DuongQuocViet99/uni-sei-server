const express = require("express");
const route = express.Router();

const getAllprocess = require('./views/get.all');
const postAddProcess = require('./views/post');

route.get('/', getAllprocess);
route.post('/add', postAddProcess);

module.exports = route;