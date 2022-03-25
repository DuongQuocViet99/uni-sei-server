const express = require("express");
const route = express.Router();

const signUp = require('./views/signup');
const signIn = require('./views/signin');
const getUser = require('./views/get.user');

const middHassPassword = require('./middlewares/signup.hasspassword');
const middCheck = require('./middlewares/signin.check');

route.get('/getuser', getUser);
route.post('/signin', middCheck, signIn);
route.post('/signup', middHassPassword, signUp);

module.exports = route;