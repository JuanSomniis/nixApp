'use strict';

var express = require('express');
var controller = require('./usuario.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/find', controller.find);

module.exports = router;
