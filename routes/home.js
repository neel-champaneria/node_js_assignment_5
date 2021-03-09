const path = require('path');

const express = require('express');

const greetController = require("../controllers/greeting");

const userController = require("../controllers/users");

const router = express.Router();

router.get('/', greetController.getGreets);

router.get('/create', userController.getCreateUser);

router.post('/add', userController.postCreateUser);

router.get('/users', userController.getListOfUsers);

exports.routes = router;